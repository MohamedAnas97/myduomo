import React, { FC, useState } from "react";
// import facebookSvg from "images/Facebook.svg";
import AppleSvg from "images/Apple.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Link, withRouter } from "react-router-dom";
import { Form } from "antd";
import SignupVerificationModal from "shared/modals/signupVerificationModal";
import { PostAPIService } from "context/services";
import { notification } from "antd";

const loginSocials = [
  {
    name: "Continue with Apple",
    href: "#",
    icon: AppleSvg,
  },
  {
    name: "Continue with Google",
    href: "#",
    icon: googleSvg,
  },
];

const PageSignUp = (props: any) => {
  const { className, history }: any = props;
  const [verificationModal, setVerificationModal] = useState("");
  const [selectedAuthentication, setSelectedAuthentication] = useState("");
  const [user, setUser] = useState({});
  // state for verification modal
  const [isModalOpen, setIsModalOpen]: any = useState(false);
  // notification popup
  const [api, contextHolder] = notification.useNotification();
  // state to save data
  const [loader, setLoader] = useState(false);
  // notification
  type NotificationType = "success" | "info" | "warning" | "error";
  const openNotification = (
    type: NotificationType,
    message: string,
    description: string
  ) => {
    api[type]({
      message: message,
      description: description,
    });
  };

  const onFinish = (values: any) => {
    setLoader(true);
    if (values.password !== values.password_confirmation) {
      openNotification("error", "Error", "Password not matched");
      setLoader(false);
    } else {
      PostAPIService("/register-email?locale=en", values)
        .then(() => {
          setUser(values);
          setIsModalOpen(true);
          setVerificationModal("custom");
          setLoader(false);
          openNotification(
            "success",
            "Success",
            "An email has been sent to you, please check your inbox to verify your email."
          );
        })
        .catch((error: any) => {
          setLoader(false);
          openNotification("error", "Error", error.response.data.message);
        });
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={`nc-PageSignUp  ${className}`} data-nc-id="PageSignUp">
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      {/* modal */}
      <SignupVerificationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        verificationModal={verificationModal}
        openNotification={openNotification}
        user={user}
        setUser={setUser}
        selectedAuthentication={selectedAuthentication}
        history={history}
      />
      {/* notification popup */}
      {contextHolder}
      {/* content */}
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Signup
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:bg-[#d9dff2]"
                onClick={() => {
                  setIsModalOpen(true);
                  setVerificationModal("third-party");
                  setSelectedAuthentication(item.name);
                }}
              >
                <img
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
          </div>
          {/* FORM */}
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            className="max-w-full"
          >
            {/* email */}
            <Form.Item
              label=""
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
              className="antd-label-container"
            >
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Email address
                </span>
                <Input
                  type="email"
                  placeholder="example@example.com"
                  className="mt-1"
                />
              </label>
            </Form.Item>
            {/* password */}
            <Form.Item
              label=""
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              className="antd-label-container"
            >
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Password
                </span>
                <Input type="password" className="mt-1" minLength={8} />
              </label>
            </Form.Item>
            {/* password */}
            <Form.Item
              label=""
              name="password_confirmation"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              className="antd-label-container"
            >
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Confirm Password
                </span>
                <Input type="password" className="mt-1" minLength={8} />
              </label>
            </Form.Item>
            {/* role */}
            <Form.Item
              label=""
              name="role_id"
              rules={[{ required: true, message: "Please slect your role" }]}
              className="antd-label-container"
            >
              <label className="block">
                <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
                  Role
                </span>
                <Select className="mt-1">
                  <option value="">Select Role</option>
                  <option value="2">Admin</option>
                  <option value="3">User</option>
                </Select>
              </label>
            </Form.Item>
            {/* button */}
            <div className="flex justify-center">
              <ButtonPrimary type="submit" disabled={loader}>
                {loader ? "...Wait" : "Continue"}
              </ButtonPrimary>
            </div>
          </Form>
          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link to="/login">Sign in</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PageSignUp);
