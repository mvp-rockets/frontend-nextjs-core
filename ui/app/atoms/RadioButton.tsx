import React from 'react';

interface RadioButtonProps {
  id: string;
  name?: string;
  className?: string;
  register?: (name: string) => { onChange: () => void; onBlur: () => void; ref: (instance: HTMLInputElement | null) => void };
  checked?: boolean;
  defaultChecked?: boolean;
  children?: React.ReactNode;
  isError?: boolean;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  name,
  className = '',
  register,
  checked = false,
  defaultChecked = false,
  children,
  isError = false,
  errorMessage,
  onChange = () => {},
  disabled = false,
}) => {
  const pointerClass = disabled ? 'pointer-events-none' : 'cursor-pointer';

  return (
    <div className="flex flex-col">
      <div className={`inline-flex items-center gap-x-2 ${className}`}>
        <label className={`relative flex items-center rounded-full ${pointerClass}`} htmlFor={id}>
          <input
            id={id}
            name={name}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            onChange={onChange}
            {...(register && { ...register(name || '') })}
            type="radio"
            className={`before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-full border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-full before:w-full before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full checked:border-0 checked:before:bg-primary-900 disabled:bg-neutral-10 disabled:checked:before:bg-neutral-300 ${
              errorMessage ? 'border border-error-100 ' : 'border-neutral-30'
            }`}
          />
          <span className="absolute h-3 w-3 rounded-full top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 bg-none peer-checked:bg-basic-white scale-0 peer-checked:scale-100 transform duration-300 peer-disabled:peer-checked:bg-neutral-100"></span>
        </label>
        <label className={`text-sm text-secondary-700 ${pointerClass} select-none`} htmlFor={id}>
          {children}
        </label>
      </div>
      {isError && <span className="text-xs text-error-100 mt-1">{errorMessage}</span>}
    </div>
  );
};

export default RadioButton;