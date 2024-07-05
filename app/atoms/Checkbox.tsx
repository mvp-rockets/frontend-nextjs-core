import React, { ChangeEvent } from 'react';
import Image from 'next/image';

interface CheckboxProps {
  id: string;
  name?: string;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  label?: React.ReactNode;
  errorMessage?: string;
  disabled?: boolean;
  register?: (name: string | undefined) => { [key: string]: any };
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  name,
  className,
  checked,
  defaultChecked,
  label,
  errorMessage,
  disabled = false,
  register = () => ({}),
  onChange = () => {},
  ...rest
}) => {
  let pointerClass = disabled ? 'pointer-events-none' : 'cursor-pointer';

  return (
    <div className="flex flex-col w-fit">
      <div className={`inline-flex items-center gap-x-2 ${className || ''}`}>
        <label className={`relative flex items-center cursor-pointer ${pointerClass}`} htmlFor={id}>
          <input
            type="checkbox"
            id={id}
            name={name}
            checked={checked}
            defaultChecked={defaultChecked}
            onChange={onChange}
            disabled={disabled}
            {...(register && register(name))}
            {...rest}
            className={`
              before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded border transition-all checked:bg-primary-900 checked:border-0 disabled:bg-neutral-100 disabled:pointer-events-none disabled:border !disabled:border-red-400
              ${errorMessage ? 'border-error-100' : 'border-neutral-400 bg-basic-white'}
            `}
          />
          <span
            className="absolute text-basic-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
          >
            <Image src={disabled ? '/images/icons/check-gray.svg' : '/images/icons/check.svg'} alt="check" width={12} height={12} />
          </span>
        </label>
        <label className={`text-secondary-700 text-sm ${pointerClass}`} htmlFor={id}>
          {label}
        </label>
      </div>
      {errorMessage && <span className="text-xs text-error-100 mt-1">{errorMessage}</span>}
    </div>
  );
};

export default Checkbox;
