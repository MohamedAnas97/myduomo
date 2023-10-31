import React, { FC, useState } from "react";
import { Modal } from "antd";
import CustomSignupProcess from "./customSignupProcess";
import ThirdPartyAuthentication from "./thirdPartyAuthentication";
import { GetAuthAPIService, PostAPIService } from "context/services";
import { listCountries } from "countries-ts";

export interface SignupVerificationProps {
  className?: string;
  verificationModal?: any;
  isModalOpen?: boolean;
  setIsModalOpen?: any;
  openNotification?: any;
  user?: any;
  setUser?: any;
  selectedAuthentication?: any;
  history?: any;
}

const PageLogin: FC<SignupVerificationProps> = ({
  setIsModalOpen,
  isModalOpen,
  verificationModal,
  openNotification,
  user,
  setUser,
  selectedAuthentication,
  history,
}) => {
  // all option of country for listing
  const countryLists = listCountries();
  const [options, setOptions]: any = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  // loader
  const [loader, setLoader] = useState(false);
  // active step
  const [current, setCurrent] = useState(0);
  // otp states for value and validation for email and phone
  const [otpValue, setOtpValue] = useState(["", "", "", "", "", ""]);
  const [otpValidation, setOtpValidation] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const [validationErrorMsg, setValidationErrorMsg] = useState("");
  // state for mobile number
  const [phoneVerificationStep, setPhoneVerificationStep] = useState(false);
  const [phoneNumberValidation, setPhoneNumberValidation] = useState("");
  const [selectedFile, setSelectedFile]: any = useState([]);
  // next step handler
  const next = () => {
    setCurrent(current < 2 ? current + 1 : current);
  };

  // otp value handler
  const otpValueHandler = (index: number, value: number) => {
    let code: any = [...otpValue];
    code[index] = value;
    setOtpValue(code);
    if (
      otpValidation[0] === false ||
      otpValidation[1] === false ||
      otpValidation[2] === false ||
      otpValidation[3] === false ||
      otpValidation[4] === false ||
      otpValidation[5] === false
    ) {
      setValidationErrorMsg("");
    }
  };

  // email code verificationHandler
  const emailCodeVerificationHandler = () => {
    setLoader(true);
    if (
      otpValue.join("")?.length < 6 ||
      otpValidation[0] === true ||
      otpValidation[1] === true ||
      otpValidation[2] === true ||
      otpValidation[3] === true ||
      otpValidation[4] === true ||
      otpValidation[5] === true
    ) {
      // setOtpValidation("less then 6 digits");
      setValidationErrorMsg("Enter 6 Digits of Code");
      setLoader(false);
    } else {
      const payload = {
        email: user.email,
        email_verification_code: otpValue.join(""),
      };
      PostAPIService("/email-verification?locale=en", payload)
        .then((response: any) => {
          openNotification(
            "success",
            "Success",
            "Your email has been verified successfully."
          );
          setOtpValidation([false, false, false, false, false, false]);
          setValidationErrorMsg("");
          setOtpValue(["", "", "", "", "", ""]);
          setLoader(false);
          next();
        })
        .catch((error) => {
          setValidationErrorMsg("");
          setOtpValidation([false, false, false, false, false, false]);
          openNotification("error", "Error", error.response.data.error);
          setLoader(false);
        });
    }
  };

  // phone code verificationHandler
  const phoneCodeVerificationHandler = () => {
    setLoader(true);
    if (
      otpValue.join("")?.length < 6 ||
      otpValidation[0] === true ||
      otpValidation[1] === true ||
      otpValidation[2] === true ||
      otpValidation[3] === true ||
      otpValidation[4] === true ||
      otpValidation[5] === true
    ) {
      // setOtpValidation("less then 6 digits");
      setValidationErrorMsg("Enter 6 Digits of Code");
      setLoader(false);
    } else {
      const payload = {
        phone: user.code + user.phone,
        phone_verification_code: otpValue.join(""),
      };
      PostAPIService("/phone-verification?locale=en", payload)
        .then((response: any) => {
          openNotification(
            "success",
            "Success",
            "Your Phone number has been verified successfully."
          );
          setOtpValidation([false, false, false, false, false, false]);
          setOtpValue(["", "", "", "", "", ""]);
          setValidationErrorMsg("");
          setLoader(false);
          next();
        })
        .catch((error) => {
          setValidationErrorMsg("");
          setOtpValidation([false, false, false, false, false, false]);
          openNotification("error", "Error", error.response.data.error);
          setLoader(false);
        });
    }
  };

  // resend code handler for email and for phone
  const resendCodeHandler = (key: string) => {
    setLoader(true);
    setOtpValidation([true, true, true, true, true, true]);
    setOtpValue(["", "", "", "", "", ""]);
    let payload = {};
    if (key === "email") {
      payload = {
        email: user.email,
        verification: 1,
      };
    }
    if (key === "phone") {
      payload = {
        phone: user.code + user.phone,
        verification: 1,
      };
    }
    PostAPIService("/resend-code?locale=en", payload)
      .then((response) => {
        setLoader(false);
        openNotification("success", "Success", response?.data?.message);
      })
      .catch((error) => {
        setLoader(false);
        openNotification("error", "Error", error?.response?.data?.error);
      });
  };

  // countryCodeVerificationHandler to check selected code is matched or not
  const countryCodeVerificationHandler = () => {
    let key = 0;
    countryLists?.find((item: any) => {
      if (item.countryCode === selectedCountryCode) {
        key = 1;
      }
    });
    return key;
  };

  // phoneNumberErrorMessage handler after registeration
  const phoneNumberErrorMessage = (error: any) => {
    if (
      error.response.data.error ===
      "[HTTP 400] Unable to create record: The To number +9XXXX is not a valid phone number"
    ) {
      return "The To number +9XXXX is not a valid phone number";
    } else {
      return error.response.data.error;
    }
  };

  // phone handler to send verification code
  const phoneApiHandler = (values: any) => {
    setPhoneNumberValidation("");
    setLoader(true);
    // if both are not added
    if (
      values?.phone === "" ||
      (values?.phone === undefined && selectedCountryCode === "")
    ) {
      setPhoneNumberValidation("Enter Code and Phone Number");
      setLoader(false);
    }
    // to check phone if it's empty
    else if (values?.phone === undefined || values?.phone === "") {
      setPhoneNumberValidation("Enter Phone Number");
      setLoader(false);
    }
    // to check code if it's empty
    else if (selectedCountryCode === "") {
      setPhoneNumberValidation("Select Code");
      setLoader(false);
    }
    // to verify code
    else if (countryCodeVerificationHandler() === 0) {
      setPhoneNumberValidation("Incorrect country code selected");
      setLoader(false);
    }
    // success
    else {
      // adding phone to user detail state
      setUser({
        ...user,
        phone: values?.phone,
        code: `${selectedCountryCode}`,
      });
      // payload for API call
      const payload = {
        email: user.email,
        phone: `${selectedCountryCode}${values?.phone}`,
      };
      PostAPIService("/register-phone?locale=en", payload)
        .then((response: any) => {
          openNotification("success", "Success", response?.data?.message);
          setLoader(false);
          setPhoneVerificationStep(true);
          setPhoneNumberValidation("");
        })
        .catch((error) => {
          if (
            error.response.data.message === "The phone has already been taken."
          ) {
            setPhoneVerificationStep(true);
            resendCodeHandler("phone");
          } else {
            openNotification("error", "Error", phoneNumberErrorMessage(error));
          }
          setPhoneNumberValidation("");
          setLoader(false);
        });
    }
  };

  // handler for google and apple
  const thirdPartyAuthHandler = async (values: any, key: string) => {
    // const body = await response.json();
    // postData("https://api.where2nxt.com/auth/google?role_id=3");
    // setLoader(true);
    // var config = {
    //   headers: { "X-Id-Token": "abc123abc123" },
    // };

    GetAuthAPIService(
      key === "signup-with-google"
        ? `/google?role_id=${values?.role}`
        : `/apple?role_id=${values?.role}`
    )
      .then((response: any) => {
        console.log("response", response);
        setLoader(false);
      })
      .catch((error: any) => {
        setLoader(false);
        console.log("error", error);
      });
  };

  // registerUserDetailHandler final step to complete all user data
  const registerUserDetailHandler = (values: any) => {
    // config
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    setLoader(true);
    let payload = {
      ...values,
      email: user.email,
      profile_photo: values?.profile_photo?.file,
    };
    PostAPIService("/complete-user-info?locale=en", payload, config)
      .then((response) => {
        setLoader(false);
        openNotification("success", "Success", response?.data?.message);
        history.push("/login");
      })
      .catch((error: any) => {
        openNotification("error", "Error", error?.response?.data?.message);
      });
  };

  // success handler for form
  const onFinish = (values: any, key: string) => {
    console.log("Success:", values);
    if (key === "email-verification") {
      emailCodeVerificationHandler();
    }
    if (key === "phone-registeration") {
      phoneApiHandler(values);
    }
    if (key === "phone-verification") {
      phoneCodeVerificationHandler();
    }
    if (key === "signup-with-google" || key === "signup-with-apple") {
      thirdPartyAuthHandler(values, key);
    }
    if (key === "register-user-detail") {
      registerUserDetailHandler(values);
    }
  };

  // failed handler for form
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const activeModalHandler = (active: string) => {
    switch (active) {
      case "custom":
        return (
          <CustomSignupProcess
            setIsModalOpen={setIsModalOpen}
            next={next}
            current={current}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            otpValueHandler={otpValueHandler}
            otpValidation={otpValidation}
            setOtpValidation={setOtpValidation}
            validationErrorMsg={validationErrorMsg}
            resendCodeHandler={resendCodeHandler}
            phoneVerificationStep={phoneVerificationStep}
            setPhoneVerificationStep={setPhoneVerificationStep}
            loader={loader}
            countryLists={countryLists}
            options={options}
            setOptions={setOptions}
            selectedCountryCode={selectedCountryCode}
            setSelectedCountryCode={setSelectedCountryCode}
            otpValue={otpValue}
            phoneNumberValidation={phoneNumberValidation}
            user={user}
            setUser={setUser}
            openNotification={openNotification}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        );
      case "third-party":
        return (
          <ThirdPartyAuthentication
            setIsModalOpen={setIsModalOpen}
            next={next}
            current={current}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            selectedAuthentication={selectedAuthentication}
            loader={loader}
            otpValueHandler={otpValueHandler}
            otpValidation={otpValidation}
            setOtpValidation={setOtpValidation}
            validationErrorMsg={validationErrorMsg}
            resendCodeHandler={resendCodeHandler}
            phoneVerificationStep={phoneVerificationStep}
            setPhoneVerificationStep={setPhoneVerificationStep}
            countryLists={countryLists}
            options={options}
            setOptions={setOptions}
            selectedCountryCode={selectedCountryCode}
            setSelectedCountryCode={setSelectedCountryCode}
            otpValue={otpValue}
            phoneNumberValidation={phoneNumberValidation}
            user={user}
            setUser={setUser}
            openNotification={openNotification}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        );
      default:
        return "";
    }
  };

  return (
    <div>
      <Modal
        title="Authentication Steps"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className="!w-[100%] md:!w-[80%] lg:!w-[50%] font-[poppins]"
      >
        {activeModalHandler(verificationModal)}
      </Modal>
    </div>
  );
};

export default PageLogin;
