import React, { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
    type?: keyof typeof containerStyle;
    className?: string;
}

const containerStyle = {
    type0: "w-full md:max-w-[1300px] xl:max-w-[1130px] mx-auto",
    type1: "w-full md:max-w-[1480px] mx-auto",
    type2: "w-full md:max-w-[1400px] mx-auto",
    type3: "w-full md:max-w-[1360px] mx-auto",
    type4: "w-full md:max-w-[760px] mx-auto",
    type5: "w-full md:max-w-211.5 mx-auto",
    type6: "w-full md:max-w-48.5",
    type7: "w-full md:max-w-157",
    type8: "w-full md:max-w-130",
    type9: "w-full md:max-w-211.5 mx-auto",
};

const Container: React.FC<ContainerProps> = ({
    children,
    type = "type1",
    className,
    ...property
}) => {
    return (
        <div
            className={`${containerStyle[type]} ${className || ""}`}
            {...property}
        >
            {children}
        </div>
    );
};

export default Container;
