import React, { FC } from "react";
import { Steps, Form } from "antd";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import OtpInput from "shared/OtpInput/OtpInput";
import RegisterUserDetail from "./registerUserDetails";
import PhoneVerificationComponent from "./phoneVerification";
import PhoneImg from "images/email.svg";

export interface SignupVerificationProps {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen?: any;
  next?: any;
  current?: any;
  onFinish?: any;
  onFinishFailed?: any;
  otpValueHandler?: any;
  otpValidation?: any;
  setOtpValidation?: any;
  validationErrorMsg?: any;
  resendCodeHandler?: any;
  phoneVerificationStep?: any;
  setPhoneVerificationStep?: any;
  loader?: any;
  countryLists?: any;
  options?: any;
  setOptions?: any;
  selectedCountryCode?: any;
  setSelectedCountryCode?: any;
  otpValue?: any;
  phoneNumberValidation?: any;
  user?: any;
  setUser?: any;
  openNotification?: any;
  selectedFile?: any;
  setSelectedFile?: any;
}

const PageLogin: FC<SignupVerificationProps> = ({
  setIsModalOpen,
  isModalOpen,
  next,
  current,
  onFinish,
  onFinishFailed,
  otpValueHandler,
  otpValidation,
  setOtpValidation,
  validationErrorMsg,
  resendCodeHandler,
  phoneVerificationStep,
  setPhoneVerificationStep,
  loader,
  countryLists,
  options,
  setOptions,
  selectedCountryCode,
  setSelectedCountryCode,
  otpValue,
  phoneNumberValidation,
  user,
  setUser,
  openNotification,
  selectedFile,
  setSelectedFile,
}) => {
  const steps = [
    {
      title: "Email",
      content: "First-content",
    },
    {
      title: "Phone",
      content: "Second-content",
    },
    {
      title: "Account",
      content: "Last-content",
    },
  ];
  // all items of steps
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div>
      <div className="pt-2">
        <Steps
          current={current}
          items={items}
          className="font-[poppins] !text-[14px]"
        />
      </div>
      <div>
        {current === 0 && (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={(e) => onFinish(e, "email-verification")}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="max-w-full"
          >
            <div className="py-10 px-1 w-full">
              <label className="block">
                {/* role */}
                <Form.Item
                  label=""
                  name="email_verification_code"
                  rules={[
                    {
                      required: false,
                      message: "Please enter verification code",
                    },
                  ]}
                  className="antd-label-container"
                  validateStatus="error"
                >
                  <label className="flex flex-col items-center ">
                    <div className="flex justify-center pb-5">
                      <img src={PhoneImg} alt="" />
                    </div>
                    <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
                      Verification Code sent to your email
                    </span>
                    <div className="flex justify-center">
                      <OtpInput
                        otpValueHandler={otpValueHandler}
                        setOtpValidation={setOtpValidation}
                        otpValidation={otpValidation}
                        otpValue={otpValue}
                      />
                    </div>
                    <div>
                      <span className="flex justify-between items-center !text-[#8c8c8c] font-[poppins] !text-[13px] pt-3">
                        Didn't recieve a code ?
                        <span
                          className="font-bold cursor-pointer pl-1"
                          onClick={() => resendCodeHandler("email")}
                        >
                          {" "}
                          Resend
                        </span>
                      </span>
                    </div>
                    <div
                      id="basic_email_verification_code_help"
                      className="ant-form-item-explain ant-form-item-explain-connected css-dev-only-do-not-override-3mqfnx text-center pt-2"
                      role="alert"
                    >
                      <div className="ant-form-item-explain-error font-[poppins] !text-[14px]">
                        {validationErrorMsg}
                      </div>
                    </div>
                    <div className="flex justify-end pt-5">
                      <ButtonPrimary
                        className="outline-none"
                        type="submit"
                        disabled={loader}
                      >
                        {loader ? "...Wait" : "Continue"}
                      </ButtonPrimary>{" "}
                    </div>
                  </label>
                </Form.Item>
              </label>
            </div>
          </Form>
        )}
        {current === 1 && (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={(e) =>
              onFinish(
                e,
                phoneVerificationStep
                  ? "phone-verification"
                  : "phone-registeration"
              )
            }
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="max-w-full"
          >
            <div>
              <PhoneVerificationComponent
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
              />{" "}
              <div className="flex justify-center pb-8">
                <ButtonPrimary
                  className="outline-none"
                  type="submit"
                  disabled={loader}
                >
                  {loader ? "...Wait" : "Continue"}
                </ButtonPrimary>{" "}
              </div>
            </div>
          </Form>
        )}
        {current == 2 && (
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={(e) => onFinish(e, "register-user-detail")}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="max-w-full"
          >
            <div className="py-10 px-1 w-full">
              <h2 className="text-3xl font-semibold text-center font-[poppins]">
                Account infomation
              </h2>
              <RegisterUserDetail
                user={user}
                setUser={setUser}
                openNotification={openNotification}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            </div>
            <div className="flex justify-end pt-5">
              {/* <ButtonSecondary
                className="outline-none mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </ButtonSecondary> */}
              <ButtonPrimary
                className="outline-none"
                type="submit"
                disabled={loader}
              >
                {loader ? "...Wait" : "Submit"}
              </ButtonPrimary>{" "}
            </div>
          </Form>
        )}
      </div>
    </div>
  );
};

export default PageLogin;
