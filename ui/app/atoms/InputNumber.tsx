import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames';
import NextImage from 'next/image';

interface RenderIconProps {
  className: string;
  onClick: () => void;
  classForContainer?: string;
}

const RenderIcon: React.FC<RenderIconProps> = ({ className, onClick, classForContainer }) => {
  return (
    <div
      className={`border-l border-neutral-100 bg-basic-white w-5 flex items-center justify-center cursor-pointer ${
        classForContainer || ''
      }`}
      onClick={onClick}
    >
      <span className={`flex items-center ${className}`}>
        <NextImage src="/images/icons/arrow-down.svg" alt="arrow-down" width={7} height={7} />
      </span>
    </div>
  );
};

interface InputNumberProps {
  className?: string;
  minimum?: number;
  increment?: number;
  decrement?: number;
  getCountValue?: (value: number) => void;
}

const InputNumber: React.FC<InputNumberProps> = ({
  className = '',
  minimum = 0,
  increment = 1,
  decrement = 1,
  getCountValue = () => {},
}) => {
  const [count, setCount] = useState(minimum);
  const [hasFocus, setFocus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        handleIncrement();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        handleDecrement();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => {
      const newValue = prevCount + increment;
      getCountValue(newValue);
      return newValue;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > minimum) {
        const newValue = prevCount - decrement;
        getCountValue(newValue);
        return newValue;
      }
      return prevCount;
    });
  };

  const handleClickOutside = () => {
    setFocus(false);
  };

  const handleInputFocus = () => {
    setFocus(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setCount(value);
      getCountValue(value);
    }
  };

  return (
    <div className="relative" onClick={(e) => e.stopPropagation()}>
      <input
        ref={inputRef}
        type="number"
        value={count}
        onFocus={handleInputFocus}
        onChange={handleInputChange}
        className={classNames(className, {
          'border-primary-900 outline-none': hasFocus,
          'border-neutral-300': !hasFocus,
        })}
      />
      {hasFocus && (
        <div className="h-full absolute top-px right-px -bottom-px z-50">
          <RenderIcon
            classForContainer=" border-b h-[calc(50%-1px)]"
            className="transform rotate-180"
            onClick={handleIncrement}
          />
          <RenderIcon classForContainer="h-[calc(50%-1px)]" className="" onClick={handleDecrement} />
        </div>
      )}
    </div>
  );
};

export default InputNumber;