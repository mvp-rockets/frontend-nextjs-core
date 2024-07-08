import React, { ChangeEvent } from 'react';

interface InputProps {
  label?: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
  errorMessage?: string | React.ReactNode;
  disabled?: boolean;
  register?: any;
  value?: string;
  classNameForContainer?: string;
  variant?: 'large' | 'small' | 'medium';
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  name,
  type = 'text',
  required = false,
  placeholder,
  className = '',
  errorMessage,
  disabled = false,
  register,
  value,
  classNameForContainer = '',
  variant = 'medium',
  onChange = () => {},
  ...rest
}) => {
  const sizeVariant = {
    large: 'py-3 px-4',
    medium: 'py-2.5 px-4',
    small: 'p-2',
  };

  return (
    <div className={`relative ${classNameForContainer}`}>
      {label && (
        <label htmlFor={id} className="block text-neutral-900 text-base mb-2">
          {label}
          {required && <span className="text-error-100 ml-1">*</span>}
        </label>
      )}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        disabled={disabled}
        {...(register && { ...register(name) })}
        onChange={onChange}
        className={`
          border rounded-lg bg-basic-white placeholder:text-neutral-400 text-base text-neutral-900
          focus:outline-none
          ${errorMessage ? 'border-error-100' : 'border-neutral-300 hover:border-neutral-600 focus:border-primary-900'}
          ${disabled && 'disabled:bg-neutral-100 disabled:pointer-events-none disabled:select-none'}
          ${sizeVariant[variant]}
          ${className}
        `}
        {...rest}
      />
      {errorMessage && (
        <span className="text-error-100 text-sm mt-2 block">{errorMessage}</span>
      )}
    </div>
  );
};

export default Input;
