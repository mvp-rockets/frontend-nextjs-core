import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getMonth, getYear } from 'date-fns';
import Image from 'next/image';
import { Text } from '../atoms';

interface DatepickerProps {
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    autocomplete?: 'on' | 'off';
    autofocus?: boolean;
    id: string;
    name: string;
    value?: string;
    register?: any;
    errorMessage?: React.ReactNode;
}

const renderMonthContent = (monthIndex: number, shortMonth: string, longMonth: string) => {
    // (monthIndex: number, shortMonthText: string, fullMonthText: string)
    const fullYear = new Date(monthIndex).getFullYear();
    const tooltipText = `Tooltip for month: ${longMonth} ${fullYear}`;

    return <span title={tooltipText} className='text-sm'>{longMonth}</span>;
};

const renderYearContent = (year: number) => {
    const tooltipText = `Tooltip for year: ${year}`;
    return <span title={tooltipText} className="text-sm">{year}</span>;
};

const range = (start: number, end: number, step = 1) => {
    const len = Math.floor((end - start) / step) + 1;
    return Array(len).fill(null).map((_, idx) => start + (idx * step));
};

const Datepicker: React.FC<DatepickerProps> = ({
    placeholder,
    disabled,
    required,
    autocomplete,
    autofocus,
    id,
    name,
    value,
    register,
    errorMessage = false,
    ...rest
}) => {
    const [startDate, setStartDate] = useState<Date | null>(new Date());
    const [showMonthPicker, setShowMonthPicker] = useState(false);
    const [showYearPicker, setShowYearPicker] = useState(false);
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleClickOutside = () => {
        setShowMonthPicker(false);
        setShowYearPicker(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    return (
        <div className='datepicker-container transform duration-300'>
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                placeholderText={placeholder}
                disabled={disabled}
                required={required}
                autoComplete={autocomplete || "off"}
                autoFocus={autofocus}
                id={id}
                name={name}
                {...(register && { ...register(name) })}
                renderMonthContent={renderMonthContent}
                showMonthYearPicker={showMonthPicker}
                renderYearContent={renderYearContent}
                showYearPicker={showYearPicker}
                shouldCloseOnSelect={false}
                dateFormat="dd/MM/yyyy"
                renderCustomHeader={({
                    date,
                    decreaseMonth,
                    increaseMonth,
                    increaseYear,
                    decreaseYear,
                    prevMonthButtonDisabled,
                    nextMonthButtonDisabled,
                    nextYearButtonDisabled,
                    prevYearButtonDisabled,
                }) => (
                    <>
                        {(showMonthPicker || showYearPicker) ? (
                            <div className='flex justify-between items-center px-2 pt-5' onClick={(e) => e.stopPropagation()}>
                                <div className={`${prevYearButtonDisabled ? 'pointer-events-none' : 'cursor-pointer'}`} onClick={showYearPicker ? decreaseYear : decreaseMonth}>
                                    <Image src="/images/icons/angle-left.svg" alt="arrow-left" width={34} height={34} />
                                </div>
                                <Text variant="bodySmall" textColor="text-neutral-800">
                                    {getYear(date)}
                                </Text>
                                <div className={`${nextYearButtonDisabled ? 'pointer-events-none' : 'cursor-pointer'}`} onClick={showYearPicker ? increaseYear : increaseMonth}>
                                    <Image src="/images/icons/angle-right.svg" alt="arrow-left" width={34} height={34} />
                                </div>
                            </div>
                        ) : (
                            <div className='flex justify-between items-center pt-5 px-5' onClick={(e) => e.stopPropagation()}>
                                <div className="flex items-center gap-x-4">
                                    <Text variant="bodySmall" textColor="text-primary-900" className="cursor-pointer" onClick={() => setShowMonthPicker(true)}>
                                        {months[getMonth(date)]}
                                    </Text>
                                    <Text variant="bodySmall" textColor="text-primary-900" className="cursor-pointer" onClick={() => setShowYearPicker(true)}>
                                        {getYear(date)}
                                    </Text>
                                </div>
                                <div className='flex'>
                                    <div className={`${prevMonthButtonDisabled ? 'pointer-events-none' : 'cursor-pointer'}`} onClick={decreaseMonth}>
                                        <Image src="/images/icons/angle-left.svg" alt="arrow-left" width={34} height={34} />
                                    </div>
                                    <div className={`${nextMonthButtonDisabled ? 'pointer-events-none' : 'cursor-pointer'}`} onClick={increaseMonth}>
                                        <Image src="/images/icons/angle-right.svg" alt="arrow-left" width={34} height={34} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </>
                )}
                className={`text-sm bg-basic-white border w-full text-neutral-900 outline-none appearance-none cursor-pointer py-2.5 px-4 rounded placeholder-neutral-400 disabled:bg-neutral-100 disabled:border-neutral-300
                  ${errorMessage
                        ? 'border-error-100 hover:border-error-100 focus:border-error-100'
                        : 'border-neutral-400 hover:border-neutral-400 focus-within:border-primary-900 focus:border-primary-900'
                    } `}
                {...rest}
            />
            {errorMessage && <span className="text-error-100 text-sm mt-2 block">{errorMessage}</span>}
        </div>
    );
}

export default Datepicker;
