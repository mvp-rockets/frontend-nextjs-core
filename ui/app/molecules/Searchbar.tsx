import React, { useState } from 'react';
import NextImage from 'next/image';

interface SearchbarProps {
    id: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    className?: string;
    errorMessage?: React.ReactNode;
    register?: (name: string) => React.Ref<any>;
    disabled?: boolean;
}

const Searchbar: React.FC<SearchbarProps> = ({
    id,
    name,
    required = false,
    placeholder,
    className,
    errorMessage,
    register,
    disabled = false,
}) => {
    const [value, setValue] = useState('');

    return (
        <div className={`relative rounded ${className || ''}`}>
            <span className='absolute top-1/2 left-4 z-10 transform -translate-y-1/2'>
                <NextImage src='/images/icons/search.svg' width={24} height={24} alt='search'/>
            </span>
            <input
                id={id}
                name={name}
                type="text"
                value={value}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                onChange={(e) => setValue(e.target.value)}
                {...(register && { ...register(name) })}
                className='border border-neutral-300 hover:border-neutral-600 focus:border-primary-900 py-3 pl-12 pr-4 rounded w-full h-full focus:outline-none'
            />
            {errorMessage && <span className="text-error-100 text-sm mt-2 block">{errorMessage}</span>}
        </div>
    );
};

export default Searchbar;
