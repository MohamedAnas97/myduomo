import React, { FC, useEffect, useState } from "react";
import { AutoComplete, Input as AntdInput } from "antd";

export interface SignupVerificationProps {
  className?: string;
  countryLists?: any;
  setSelectedCountryCode?: any;
  selectedCountryCode?: any;
  options?: any;
  setOptions?: any;
}

const PageLogin: FC<SignupVerificationProps> = ({
  className,
  countryLists,
  setSelectedCountryCode,
  selectedCountryCode,
  options,
  setOptions,
}) => {
  const allOptions = () => {
    const allLists: any = [];
    countryLists?.map((item: any, index: any) => {
      return allLists?.push({
        key: index,
        value: item.countryCode,
      });
    });
    return allLists;
  };

  useEffect(() => {
    setOptions(allOptions());
  }, []);

  // filteredData handler to find records
  const filteredData = (inputValue: any) => {
    const filteredRecords = allOptions()?.filter(
      (option: any) =>
        option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    );
    setOptions(filteredRecords);
    console.log("filteredRecords?.length", filteredRecords?.length);
    if (filteredRecords?.length === 0) {
      setSelectedCountryCode("");
    }
    return filteredRecords;
  };

  // Selected Country
  const selectedCountry = (value: any) => {
    setSelectedCountryCode(value);
  };
  // Selected Country
  const onChanging = (value: any) => {
    console.log("value", value);
    // filteredData(value);
    setSelectedCountryCode(value);
  };

  return (
    <AutoComplete
      style={{ height: 44, borderRadius: 5 }}
      options={options}
      placeholder="Code"
      className={`auto-search-container rounded-[5px] mt-1 font-[poppins] !text-[14px] ${className}`}
      onSearch={filteredData}
      onChange={onChanging}
      onSelect={selectedCountry}
      defaultValue={selectedCountryCode}
      autoFocus={false}
      bordered={false}
      backfill={false}
    />
  );
};

export default PageLogin;
