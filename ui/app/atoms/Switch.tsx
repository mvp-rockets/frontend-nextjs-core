import React, { useState } from 'react';

interface SwitchProps {
    disabled?: boolean;
    name?: string;
    id: string;
    onChange?: () => void;
    register?: (name: string) => { onChange: () => void; onBlur: () => void; ref: (instance: HTMLInputElement | null) => void };
}

const Switch: React.FC<SwitchProps> = ({
    disabled = false,
    name,
    id,
    onChange,
    register = () => {},
    ...rest
}) => {
    const [enabled, setEnabled] = useState(!disabled);

    return (
        <label className="inline-flex relative items-center mr-5">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={enabled}
                readOnly
                disabled={disabled}
                name={name}
                id={id}
                onChange={onChange}
                {...(register && register(name || ''))}
                {...rest}
            />
            <div
                onClick={() => setEnabled(!enabled)}
                className={`w-[52px] h-8 transition ease-in duration-300 rounded-full relative after:content-[''] after:absolute after:w-6 after:h-6 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:left-1 peer ${
                    disabled
                        ? "border border-neutral-300 bg-neutral-100 after:bg-neutral-300 pointer-events-none peer-checked:border-none peer-checked:after:translate-x-[82%]"
                        : "bg-neutral-300 after:bg-basic-white peer-checked:bg-primary-900 peer-checked:after:translate-x-[82%] cursor-pointer"
                }`}
            ></div>
        </label>
    );
};

export default Switch;