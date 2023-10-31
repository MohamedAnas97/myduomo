import React, { FC } from "react";
import { Steps, Form } from "antd";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Select from "shared/Select/Select";
import RegisterUserDetail from "./registerUserDetails";
import PhoneVerificationComponent from "./phoneVerification";

export interface SignupVerificationProps {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen?: any;
  next?: any;
  current?: any;
  onFinish?: any;
  onFinishFailed?: any;
  selectedAuthentication?: any;
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
  current,
  onFinish,
  onFinishFailed,
  selectedAuthentication,
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
      title: "Select Role",
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
            onFinish={(e) =>
              onFinish(
                e,
                selectedAuthentication === "Continue with Google"
                  ? "signup-with-google"
                  : "signup-with-apple"
              )
            }
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="max-w-full"
          >
            <div className="pt-10 pb-5 px-1 w-full">
              <label className="block">
                {/* role */}
                <Form.Item
                  label=""
                  name="role"
                  rules={[
                    { required: true, message: "Please slect your role" },
                  ]}
                  className="antd-label-container"
                >
                  <label className="block">
                    <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
                      Role
                    </span>
                    <Select className="mt-1 font-[poppins] !text-[14px]">
                      <option value="">Select Role</option>
                      <option value="2">Admin</option>
                      <option value="3">User</option>
                    </Select>
                  </label>
                </Form.Item>
              </label>
            </div>
            <div className="flex justify-end pb-5">
              <ButtonPrimary
                className="outline-none"
                type="submit"
                disabled={loader}
              >
                {loader ? "...Wait" : selectedAuthentication}
              </ButtonPrimary>
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
