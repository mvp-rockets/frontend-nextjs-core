import React from 'react';
import Label from '../atoms/Label';

interface AnimatedInputLabelProps {
  className?: string;
  id?: string;
  disabled?: boolean;
  labelText: string;
  name: string;
  register?: (name: string) => { onChange: () => void; onBlur: () => void; ref: (instance: HTMLInputElement | null) => void };
  isError?: boolean;
  errorMessage?: string;
}

const AnimatedInputLabel: React.FC<AnimatedInputLabelProps> = ({
  className,
  id,
  disabled,
  labelText,
  name,
  register,
  isError,
  errorMessage,
}) => {
  return (
    <div className={`relative z-0 w-full ${className || ''}`}>
      <input
        type="text"
        name={name}
        id={id || 'floating_input'}
        placeholder=""
        disabled={disabled}
        {...(register && { ...register(name) })}
        className={`block py-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b
                appearance-none focus:outline-none focus:ring-0 peer
                ${disabled ? 'pointer-events-none text-neutral-300' : ''}
                ${isError ? 'border-error-100 focus:border-error-100' : 'border-neutral-300  focus:border-primary-900'}
                `}
      />

      <Label
        id={id || 'floating_input_id'}
        labelFor={id || 'floating_input'}
        textColor="text-neutral-600"
        variant="small"
        className="absolute duration-300 transform -translate-y-6 scale-90 top-3 -z-10 origin-[0] peer-focus:start-0  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {labelText}
      </Label>
      {isError && (
        <span className={`text-error-100 text-sm select-none mt-2`}>
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default AnimatedInputLabel;
