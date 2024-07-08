import React from 'react';

interface TextareaProps {
    id: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    className?: string;
    errorMessage?: React.ReactNode;
    disabled?: boolean;
    register?: (name: string) => React.Ref<any>;
    value?: string;
    variant?: 'large' | 'small' | 'extraSmall';
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
    id,
    name,
    required,
    placeholder,
    className,
    errorMessage,
    disabled,
    register,
    value,
    variant = 'large',
    onChange = () => {},
}) => {
    const autoGrow = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const minHeight = 40;
        const maxHeight = 200;

        let height = e.target.scrollHeight;

        if (height < minHeight) {
            height = minHeight;
        } else if (height > maxHeight) {
            height = maxHeight;
        }
        if (height > e.target.offsetHeight) {
            e.target.style.height = `${height}px`;
        }
    };

    const sizeVariant = {
        large: "p-4 text-base",
        small: "p-2 text-sm",
        extraSmall: "p-2 text-xs",
    };

    return (
        <>
            <textarea
                id={id}
                name={name}
                value={value}
                required={required}
                placeholder={placeholder}
                disabled={disabled}
                {...(register && register(name))}
                onChange={onChange}
                onInput={autoGrow}
                className={`border rounded-lg bg-basic-white placeholder:text-neutral-400 hover:placeholder:text-neutral-400 focus:outline-none text-neutral-900 disabled:bg-neutral-100 disabled:pointer-events-none disabled:select-none w-full resize-none ${errorMessage ? "border-error-100" : "border-neutral-400 hover:border-neutral-500 focus:border-primary-900"} ${className || ""} ${sizeVariant[variant]}`}
            />
            {errorMessage && <span className="text-error-100 text-sm mt-2 block">{errorMessage}</span>}
        </>
    );
};

export default Textarea;