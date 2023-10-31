import React, { FC, useMemo, useState } from "react";
import { Button, Form, Upload } from "antd";
import Input from "shared/Input/Input";
import Select from "shared/Select/Select";
import Avatar from "shared/Avatar/Avatar";
import PlaceHolderImage from "images/placeholder-small.png";
import { UploadOutlined } from "@ant-design/icons";

export interface SignupVerificationProps {
  user?: any;
  setUser?: any;
  openNotification?: any;
  selectedFile?: any;
  setSelectedFile?: any;
}

const PageLogin: FC<SignupVerificationProps> = ({
  user,
  setUser,
  openNotification,
  selectedFile,
  setSelectedFile,
}) => {
  const [selectedImage, setSelectedImage] = useState("");
  console.log("selectedFile", selectedFile[0]);
  // handler for single files
  const uploadProps2 = useMemo(
    () => ({
      beforeUpload: (file: any) => {
        if (file?.type?.split("/")[0] === "image") {
          setSelectedFile((state: any) => [file]);
          setUser({ ...user, profile_photo: file });
          // file reader to show image URL
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const base64String = e.target.result;
            setSelectedImage(base64String);
          };
          reader.readAsDataURL(file);
          return false;
        } else {
          openNotification("error", "Error", "Upload image file");
        }
      },
    }),
    [selectedFile]
  );

  return (
    <div className="flex flex-col items-center w-full pt-4">
      <div className="flex-shrink-0 flex flex-col justify-center items-center ">
        <div>
          <Form.Item
            name="profile_photo"
            label=""
            rules={[
              { required: false, message: "Please upload your profile photo" },
            ]}
          >
            <Upload
              name="profile_photo"
              multiple
              {...uploadProps2}
              fileList={selectedFile}
              className="flex flex-col items-center ant-upload-list-container"
            >
              <Avatar
                sizeClass="w-32 h-32"
                imgUrl={selectedImage ? selectedImage : PlaceHolderImage}
              />{" "}
              <div
                className={
                  "rounded-full absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer"
                }
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="mt-1 text-xs">
                  {selectedImage ? "Change Image" : "Upload Image"}
                </span>
              </div>
            </Upload>
          </Form.Item>
        </div>
      </div>
      <div className="flex-grow mt-10 md:mt-0 space-y-6 w-full">
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
          name="first_name"
          className="mb-2"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              First Name
            </span>
            <Input
              name="text"
              className="mt-1.5 font-[poppins] !text-[14px]"
              defaultValue=""
            />
          </label>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your name!",
            },
          ]}
          name="last_name"
          className="mb-2"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              Last Name
            </span>
            <Input
              name="text"
              className="mt-1.5 font-[poppins] !text-[14px]"
              defaultValue=""
            />
          </label>
        </Form.Item>
        {/* ---- */}
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please select your gender!",
            },
          ]}
          name="gender"
        >
          <label>
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              Gender
            </span>
            <Select className="mt-1.5 font-[poppins] !text-[14px]">
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </label>
        </Form.Item>
        {/* ---- */}
        {/* <Form.Item
          rules={[
            {
              required: false,
              message: "Please enter your email!",
            },
          ]}
          name="email"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              Email
            </span>
            <Input
              name="email"
              className="mt-1.5 font-[poppins] !text-[14px] !bg-[#e5e7eb] cursor-not-allowed"
              value={user?.email}
              disabled
            />
          </label>
        </Form.Item> */}
        {/* ---- */}
        {/* ---- */}
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your country!",
            },
          ]}
          name="country"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              Country
            </span>
            <Input
              name="country"
              className="mt-1.5 font-[poppins] !text-[14px]"
            />
          </label>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your city!",
            },
          ]}
          name="city"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              City
            </span>
            <Input name="city" className="mt-1.5 font-[poppins] !text-[14px]" />
          </label>
        </Form.Item>{" "}
        <Form.Item
          className="w-full"
          rules={[
            {
              required: true,
              message: "Please select your Date of Birth!",
            },
          ]}
          name="date_of_birth"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              Date of Birth
            </span>
            <Input
              className="mt-1.5 font-[poppins] !text-[14px]"
              type="date"
              // defaultValue="1990-07-22"
              name="date_of_birth"
            />
          </label>
        </Form.Item>
        <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your Adress!",
            },
          ]}
          name="detailed_address"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              Address
            </span>
            <Input
              name="detailed_address"
              className="mt-1.5 font-[poppins] !text-[14px]"
            />
          </label>
        </Form.Item>
        {/* ---- */}
        {/* <Form.Item
          rules={[
            {
              required: false,
              message: "Please enter your number!",
            },
          ]}
          name="number"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200  font-[poppins] !text-[14px]">
              Phone number
            </span>
            <Input
              className="mt-1.5 font-[poppins] !text-[14px] !bg-[#e5e7eb] cursor-not-allowed"
              name="number"
              value={user?.phone}
              disabled
            />
          </label>
        </Form.Item> */}
        {/* ---- */}
        {/* <Form.Item
          rules={[
            {
              required: true,
              message: "Please enter your Description",
            },
          ]}
          name="description"
        >
          <label className="block">
            <span className="text-neutral-800 dark:text-neutral-200 font-[poppins] !text-[14px]">
              About you
            </span>
            <Textarea
              className="mt-1.5 font-[poppins] !text-[14px]"
              defaultValue="..."
              name="description"
            />
          </label>
        </Form.Item> */}
      </div>
    </div>
  );
};

export default PageLogin;
