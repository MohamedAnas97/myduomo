import React, { FC } from "react";
import { Form } from "antd";
import Input from "shared/Input/Input";
import OtpInput from "shared/OtpInput/OtpInput";
import SelectCountryCode from "shared/autoComplete/country";
import PhoneImg from "images/phone.svg";

export interface SignupVerificationProps {
  className?: string;
  otpValueHandler?: any;
  otpValidation?: any;
  setOtpValidation?: any;
  validationErrorMsg?: any;
  resendCodeHandler?: any;
  phoneVerificationStep?: any;
  setPhoneVerificationStep?: any;
  countryLists?: any;
  options?: any;
  setOptions?: any;
  selectedCountryCode?: any;
  setSelectedCountryCode?: any;
  otpValue?: any;
  phoneNumberValidation?: any;
}

const PageLogin: FC<SignupVerificationProps> = ({
  otpValueHandler,
  otpValidation,
  setOtpValidation,
  validationErrorMsg,
  resendCodeHandler,
  phoneVerificationStep,
  setPhoneVerificationStep,
  countryLists,
  options,
  setOptions,
  selectedCountryCode,
  setSelectedCountryCode,
  otpValue,
  phoneNumberValidation,
}) => {
  return (
    <>
      {!phoneVerificationStep ? (
        <div className="pt-10 pb-2 text-center">
          <div className="px-1 flex flex-col ">
            <div>
              <div className="flex justify-center pb-5">
                <img src={PhoneImg} alt="" />
              </div>
              <div className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px] text-center">
                Enter your phone number to send you verification code
              </div>
              <div className="flex pt-2 flex justify-center">
                <Form.Item
                  className=" md:!w-[80px]"
                  rules={[
                    {
                      required: false,
                      message: "Please enter code!",
                    },
                  ]}
                  name="code"
                >
                  <label className="block">
                    <SelectCountryCode
                      countryLists={countryLists}
                      setSelectedCountryCode={setSelectedCountryCode}
                      selectedCountryCode={selectedCountryCode}
                      options={options}
                      setOptions={setOptions}
                      className={"!w-full autosearch-container"}
                    />
                  </label>
                </Form.Item>
                <Form.Item
                  className=""
                  rules={[
                    {
                      required: false,
                      message: "Please enter your phone number!",
                    },
                  ]}
                  name="phone"
                >
                  <label className="block phone-input-container">
                    <Input
                      name="phone"
                      type="number"
                      placeholder="Phone"
                      className="mt-1 font-[poppins] !text-[14px] !w-[220px] !rounded-e-2xl"
                    />
                  </label>
                </Form.Item>
              </div>{" "}
              <div
                // id="basic_email_verification_code_help"
                className="ant-form-item-explain ant-form-item-explain-connected css-dev-only-do-not-override-3mqfnx text-center pb-2"
                role="alert"
              >
                <div className="ant-form-item-explain-error font-[poppins] !text-[14px] !text-[#ff4d4f]">
                  {phoneNumberValidation}
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      ) : (
        <div className="pt-10 pb-2 px-1 w-full">
          <div className="flex justify-center pb-5">
            <img src={PhoneImg} alt="" />
          </div>
          <label className="block">
            {/* role */}
            <Form.Item
              label=""
              name="otp"
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
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
                  Verification Code Sent to Your Phone
                </span>
                <div className="flex justify-center pl-2 sm:pl-0">
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
                      className="font-medium cursor-pointer pl-1"
                      onClick={() => resendCodeHandler("phone")}
                    >
                      {" "}
                      Resend
                    </span>
                  </span>
                </div>
                <div>
                  <span className="flex justify-between items-center !text-[#8c8c8c] font-[poppins] !text-[13px] pt-1">
                    Or
                  </span>
                </div>
                <div>
                  <span className="flex justify-between items-center !text-[#8c8c8c] font-[poppins] !text-[13px] pt-1">
                    <span
                      className="font-medium cursor-pointer pl-1"
                      onClick={() => setPhoneVerificationStep(false)}
                    >
                      {" "}
                      Change phone number
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
              </label>
            </Form.Item>
          </label>
        </div>
      )}
    </>
  );
};

export default PageLogin;
