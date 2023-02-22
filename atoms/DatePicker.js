import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import PropTypes from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

const DatePicker = ({
  isError = false,
  errorClass = "text-error-100 pl-0.5 text-sm pt-2 font-normal leading-[21px]",
  isDisabled,
  register,
  id,
  placeholder = 'DD/MM/YY',
  isRequired,
  name = 'Date picker',
  dbName,
  value,
  autocomplete,
  autofocus,
  ...property
}) => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="relative">
      <ReactDatePicker
      onChange={(date) => setStartDate(date)}
      selected={startDate}
      placeholderText = {placeholder}
      disabled = {isDisabled} 
      required = {isRequired}
      autoComplete = {autocomplete}
      autoFocus = {autofocus}
      id = {id}
      name = {name}
      {...(register && { ...register(dbName) })}
      value={value}
      className = {`bg-white border w-full text-neutral-900 leading-[18px] outline-none appearance-none cursor-pointer py-2.5 px-4 rounded-lg placeholder-neutral-400 disabled:bg-neutral-100 disabled:border-neutral-300
                  ${isError ? "border-error-100 hover:border-error-100 focus:border-error-100" : 'border-neutral-200 hover:border-neutral-500 focus-within:border-primary-900 focus:border-primary-900'} `}
      { ...property}
    />

    {isError && ( <span className={`${errorClass} select-none`}> {errorMessage} </span> )}
    </div>
  );
};

export default DatePicker;

DatePicker.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  register: PropTypes.func,
  autocomplete: PropTypes.oneOf(["on", "off"]),
};