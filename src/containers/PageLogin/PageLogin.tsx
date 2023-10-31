import React, { FC, useState } from "react";
import AppleSvg from "images/Apple.svg";
import googleSvg from "images/Google.svg";
import { Helmet } from "react-helmet";
import Input from "shared/Input/Input";
import { Link } from "react-router-dom";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import { Form } from "antd";
import SigninVerificationModal from "shared/modals/signInVerificationModal";

export interface PageLoginProps {
  className?: string;
}

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

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={`nc-PageLogin ${className}`} data-nc-id="PageLogin">
      {/* page */}
      <Helmet>
        <title>Login</title>
      </Helmet>
      {/* modal */}
      <SigninVerificationModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      {/*  */}
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:bg-[#d9dff2]"
                onClick={() => setIsModalOpen(true)}
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
                <Input type="password" className="mt-1" />
              </label>
            </Form.Item>
            {/* button */}
            <div className="flex justify-center">
              <ButtonPrimary type="submit">Continue</ButtonPrimary>
            </div>
          </Form>
          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            New user? {` `}
            <Link to="/signup">Create an account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;
