import React, { useState } from 'react';
import Select, { ActionMeta, components, MultiValue, Props as SelectProps, StylesConfig } from 'react-select';
import { Checkbox } from '../atoms';

interface OptionType {
    label: string;
    value: string;
}

interface MultiSelectDropdownProps {
    errorMessage?: React.ReactNode;
    id?: string;
    name?: string;
    placeholder?: string;
    options: OptionType[];
    labelText?: string;
    htmlFor?: string;
    isDisabled?: boolean;
    inputRef?: React.Ref<any>;
    defaultValue?: string;
    onChange?: (selectedOptions: OptionType[] |  MultiValue<OptionType>) => void;
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

const CheckboxOption: React.FC<any> = ({ children, ...props }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.stopPropagation();
        const newValue = event.target.checked
            ? [...props.selectProps.value, props.data]
            : props?.selectProps?.value?.filter((option: OptionType) => option.value !== props.data.value);
        props.selectProps.onChange(newValue);
    };

    return (
        <components.Option {...props}>
            <div className='flex gap-x-2'>
                <Checkbox
                    className=""
                    errorMessage=""
                    id={props.data.label}
                    name="checkbox"
                    onChange={handleChange}
                    checked={props.isSelected}
                />
                {children}
            </div>
        </components.Option>
    );
};

const DropdownIndicator: React.FC<any> = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            {props.selectProps.menuIsOpen ? <CaretUpIcon /> : <CaretDownIcon />}
        </components.DropdownIndicator>
    );
};

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
    errorMessage,
    id,
    name,
    placeholder,
    options,
    labelText,
    htmlFor,
    isDisabled,
    inputRef,
    defaultValue,
    onChange = () => { },
}) => {
    const [selectedOption, setSelectedOption] = useState<OptionType[]| MultiValue<OptionType>>([]);

    const handleChange = (selectedOptions: MultiValue<OptionType>, actionMeta: ActionMeta<OptionType>) => {
        setSelectedOption(selectedOptions);
        onChange(selectedOptions);
    };

    const customStyles: StylesConfig<OptionType, true> = {
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
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: '#60A5FA',
            borderRadius: '4px',
        }),

        multiValueLabel: (provided) => ({
            ...provided,
            color: '#fff',
            fontSize: '12px',
            fontWeight: '500',
        }),

        multiValueRemove: (provided) => ({
            ...provided,
            color: '#fff',
            ':hover': {
                color: '#fff',
            },
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
                defaultInputValue={defaultValue}
                isDisabled={isDisabled}
                styles={customStyles}
                onMenuOpen={() => (isOpen = true)}
                onMenuClose={() => (isOpen = false)}
                components={{
                    DropdownIndicator,
                    Option: CheckboxOption,
                }}
                hideSelectedOptions={false}
                isMulti
                closeMenuOnSelect={false}
            />
            {errorMessage && (
                <div className="text-error-100 text-xs select-none mt-2">
                    {errorMessage}
                </div>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
