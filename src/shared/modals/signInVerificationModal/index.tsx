import React, { FC, useState } from "react";
import { Steps, Modal } from "antd";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";
import Input from "shared/Input/Input";

export interface SignupVerificationProps {
  className?: string;
  isModalOpen?: boolean;
  setIsModalOpen?: any;
}

const PageLogin: FC<SignupVerificationProps> = ({
  setIsModalOpen,
  isModalOpen,
}) => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Phone",
      content: "Second-content",
    },
    {
      title: "Done",
      content: "Last-content",
    },
  ];
  // next
  const next = () => {
    setCurrent(current < 2 ? current + 1 : current);
  };

  // prev
  const prev = () => {
    setCurrent(current === 0 ? current : current - 1);
  };

  // all items of steps
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  return (
    <div>
      <Modal
        title="Authentication Steps"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        className="!w-[100%] md:!w-[80%] lg:!w-[50%] font-[poppins]"
        // width={'50%'}
      >
        <div className="pt-2">
          <Steps
            current={current}
            items={items}
            className="font-[poppins] !text-[14px]"
          />
        </div>
        <div>
          {current === 0 && (
            <div className="py-10 px-1 w-full">
              <label className="block">
                <span className="text-neutral-800 dark:text-neutral-200">
                  Authentication code sent to your email
                </span>
                <Input type="number" placeholder="000000" className="mt-1" />
              </label>
            </div>
          )}
          
          {current === 1 && (
            <div className="py-10 px-1 w-full">
              <label className="block text-center flex flex-col items-center">
                <span className="text-neutral-800 dark:text-neutral-200 text-center text-xl">
                  Authentication Completed
                </span>
                {/* <Input type="number" placeholder="" className="mt-1" /> */}
                <img
                  src="https://cdn-icons-png.flaticon.com/128/992/992481.png"
                  alt=""
                  className="mt-5 h-20"
                />
              </label>
            </div>
          )}
          <div className="flex justify-end pt-5">
            <ButtonSecondary
              className="outline-none mr-2"
              onClick={() => prev()}
            >
              Close
            </ButtonSecondary>
            <ButtonPrimary className="outline-none" onClick={() => next()}>
              Verify
            </ButtonPrimary>{" "}
          </div>
        </div>
        {/* <div className="flex justify-center"></div> */}
      </Modal>
    </div>
  );
};

export default PageLogin;
