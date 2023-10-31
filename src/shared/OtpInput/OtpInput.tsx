import React, { FC, useRef } from "react";
import Input from "shared/Input/Input";

export interface OTPInputProps {
  className?: string;
  otp?: any;
  otpValueHandler?: any;
  otpValidation?: any;
  setOtpValidation?: any;
  otpValue?: any;
}

const OtpInput: FC<OTPInputProps> = ({
  className = "",
  otpValueHandler,
  otpValidation,
  setOtpValidation,
  otpValue,
}) => {
  const inputRef: any = useRef<HTMLElement>(null);
  const inputRef2: any = useRef<HTMLElement>(null);
  const inputRef3: any = useRef<HTMLElement>(null);
  const inputRef4: any = useRef<HTMLElement>(null);
  const inputRef5: any = useRef<HTMLElement>(null);
  const inputRef6: any = useRef<HTMLElement>(null);

  const validationHandler = (index: number, value: boolean) => {
    let duplicate = [...otpValidation];
    duplicate[index] = value;
    setOtpValidation(duplicate);
  };

  return (
    <div className="flex pt-2">
      <Input
        className="!w-[45px] rounded-[10px] ml-2 mr-2 text-center"
        ref={inputRef}
        onChange={(e) => {
          if (e.target.value === "") {
            validationHandler(0, true);
          } else if (e.target.value !== "") {
            inputRef2.current.focus();
            validationHandler(0, false);
          }
          otpValueHandler(0, e.target.value);
        }}
        id="error"
        maxLength={1}
        value={otpValue[0]}
      />
      <Input
        className="!w-[45px] rounded-[10px] mr-2 text-center"
        ref={inputRef2}
        onChange={(e) => {
          if (e.target.value === "") {
            validationHandler(1, true);
          } else if (e.target.value !== "") {
            inputRef3.current.focus();
            validationHandler(1, false);
          }
          otpValueHandler(1, e.target.value);
        }}
        id="error"
        maxLength={1}
        value={otpValue[1]}
      />
      <Input
        className="!w-[45px] rounded-[10px] mr-2 text-center"
        ref={inputRef3}
        onChange={(e) => {
          if (e.target.value === "") {
            validationHandler(2, true);
          } else if (e.target.value !== "") {
            inputRef4.current.focus();
            validationHandler(2, false);
          }
          otpValueHandler(2, e.target.value);
        }}
        id="error"
        maxLength={1}
        value={otpValue[2]}
      />
      <Input
        className="!w-[45px] rounded-[10px] mr-2 text-center"
        ref={inputRef4}
        onChange={(e) => {
          if (e.target.value === "") {
            validationHandler(3, true);
          } else if (e.target.value !== "") {
            inputRef5.current.focus();
            validationHandler(3, false);
          }
          otpValueHandler(3, e.target.value);
        }}
        id="error"
        maxLength={1}
        value={otpValue[3]}
      />
      <Input
        className="!w-[45px] rounded-[10px] mr-2 text-center"
        ref={inputRef5}
        onChange={(e) => {
          if (e.target.value === "") {
            validationHandler(4, true);
          } else if (e.target.value !== "") {
            inputRef6.current.focus();
            validationHandler(4, false);
          }
          otpValueHandler(4, e.target.value);
        }}
        id="error"
        maxLength={1}
        value={otpValue[4]}
      />
      <Input
        className="!w-[45px] rounded-[10px] mr-2"
        ref={inputRef6}
        maxLength={1}
        onChange={(e) => {
          if (e.target.value === "") {
            validationHandler(5, true);
          }
          if (e.target.value !== "") {
            validationHandler(5, false);
          }
          otpValueHandler(5, e.target.value);
        }}
        value={otpValue[5]}
      />
    </div>
  );
};

export default OtpInput;
