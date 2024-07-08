import React, { useState } from 'react';
import Select, { components, Props as SelectProps, StylesConfig } from 'react-select';

interface OptionType {
    label: string;
    value: string;
}

interface DropdownProps {
    errorMessage?: React.ReactNode;
    id?: string;
    name?: string;
    placeholder?: string;
    options: OptionType[];
    labelText?: string;
    htmlFor?: string;
    isDisabled?: boolean;
    onChange?: (option: OptionType | null) => void;
    inputRef?: React.Ref<any>;
    defaultValue?: string;
}

const CaretDownIcon: React.FC = () => {
    return (
        <img
            src="/images/icons/angle-right.svg"
            alt="arrow"
            width={24}
            height={24}
            className='transform rotate-90'
        />
    );
};
let isOpen: boolean = false;
const CaretUpIcon: React.FC = () => {
    return (
        <img
            src="/images/icons/angle-right.svg"
            alt="arrow"
            width={24}
            height={24}
            className='transform -rotate-90'
        />
    );
};

const DropdownIndicator: React.FC<any> = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            {props.selectProps.menuIsOpen ? <CaretUpIcon /> : <CaretDownIcon />}
        </components.DropdownIndicator>
    );
};

const Dropdown: React.FC<DropdownProps> = ({
    errorMessage,
    id,
    name,
    placeholder,
    options,
    labelText,
    htmlFor,
    isDisabled,
    onChange = () => { },
    inputRef,
    defaultValue,
}) => {
    const [selectedOption, setSelectedOption] = useState<OptionType | null>(null);

    const handleChange = (selectedOption: OptionType | null) => {
        setSelectedOption(selectedOption);
        onChange(selectedOption);
    };

    const customStyles: StylesConfig<OptionType, false> = {
        container: (provided) => ({
            ...provided,
            width: "100%",
        }),
        control: (provided, state) => ({
            ...provided,
            minHeight: "40px",
            height: "40px",
            width: "100%",
            border: state.isDisabled
                ? '1px solid #d5d9dc66'
                : state.isFocused
                    ? '1px solid #1E3A8A'
                    : errorMessage
                        ? '1px solid #DC2020'
                        : '1px solid #6B6B80',
            boxShadow: 'none',
            borderRadius: '4px',
            cursor: state.isDisabled ? 'none' : 'pointer',
            paddingLeft: '16px',
            paddingRight: '8px',
            '&:hover': {
                border: errorMessage ? '1px solid #DC2020' : '1px solid #1E3A8A',
            },
            backgroundColor: state.isDisabled ? '#F3F3F6' : '#FCFCFC',
        }),

        valueContainer: (provided) => ({
            ...provided,
            padding: '0px',
        }),

        input: (provided, state) => ({
            ...provided,
            color: state.isDisabled ? '#A0A9AD' : '#1F1F37',
            margin: '0px',
            fontSize: '14px',
        }),

        menu: (provided) => ({
            ...provided,
            borderWidth: '1px',
            borderColor: '#6B6B80',
            borderRadius: '4px',
            boxShadow: 'none',
        }),
        option: (provided) => ({
            ...provided,
            color: '#1F1F37',
            backgroundColor: '#FFFFFF',
            cursor: 'pointer',
            borderRadius: '0px',
            fontSize: '14px',
            paddingLeft: '16px',
            paddingRight: '16px',
            fontWeight: '400',
            '&:hover': {
                backgroundColor: '#F3F3F6',
            },
        }),
        indicatorsContainer: () => ({
            height: "40px",
            display: 'flex',
            alignItems: 'center',
        }),
        indicatorSeparator: () => ({
            display: 'none',
        }),
    };

    return (
        <div className="flex flex-col w-full">
            {labelText && (
                <label
                    htmlFor={htmlFor}
                    className='text-neutral-700 text-sm mb-2'
                >
                    {labelText}
                </label>
            )}

            <Select
                // inputRef={inputRef}
                id={id}
                name={name}
                placeholder={placeholder}
                value={selectedOption}
                onChange={handleChange}
                options={options}
                defaultValue={defaultValue ? options.find(option => option.value === defaultValue) : undefined}
                isDisabled={isDisabled}
                styles={customStyles}
                onMenuOpen={() => (isOpen = true)}
                onMenuClose={() => (isOpen = false)}
                components={{ DropdownIndicator }}
            />
            {errorMessage && (
                <div className="text-error-100 text-xs select-none mt-2">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
