import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ListItemProps {
    id: string | number;
    onClick?: () => void;
    onClickHandler: (id: string | number) => void;
    subMenus?: SubMenuItem[];
    isActive: boolean;
    padding?: string;
    name: string;
}

interface SubMenuProps {
    classForContainer?: string;
    padding?: string;
    lists: SubMenuItem[];
}

interface SubMenuItem {
    id: string | number;
    name: string;
    onClick?: () => void;
    subMenuItems?: SubMenuItem[];
}

const ListItem: React.FC<ListItemProps> = ({
    id,
    onClick,
    onClickHandler,
    subMenus,
    isActive,
    padding,
    name,
}) => {
    return (
        <li key={id} className="relative group" onClick={onClick}>
            <div
                className={`text-sm w-full bg-basic-white md:hover:bg-neutral-200 cursor-pointer flex items-center justify-between border-l-2 md:border-none ${isActive ? "border-l-2 border-primary-900 text-primary-900 md:text-secondary-700" : "text-secondary-700"} ${padding || "px-4 py-2.5"}`}
                onClick={(e) => { e.stopPropagation(); onClickHandler(id); }}
            >
                {name}

                {subMenus && subMenus.length > 0 && (
                    <span className={`flex items-center transform duration-500 md:hidden ${isActive ? "" : "rotate-180"}`}>
                        <Image src="/images/icons/angle-up.svg" alt="up arrow" width={24} height={24} />
                    </span>
                )}
            </div>

            {subMenus && subMenus.length > 0 && (
                <SubMenu lists={subMenus} classForContainer={`md:absolute left-full top-0 mt-0 md:ml-1 ${isActive ? "block" : "hidden"} md:group-hover:block`} padding="px-10 md:px-4 py-2.5" />
            )}
        </li>
    );
};

const SubMenu: React.FC<SubMenuProps> = ({ lists, classForContainer, padding }) => {
    const [active, setActive] = useState<string | number | null>(null);

    const onClickHandler = (id: string | number) => {
        setActive((prevActive) => (prevActive === id ? null : id));
    };

    const handleClickOutside = () => {
        setActive(null);
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    return (
        <ul className={`w-[300px] md:w-[160px] shadow-sm bg-basic-white transition ease-linear duration-500 ${classForContainer || ""}`}>
            {lists.map(({ id, name, onClick, subMenuItems }) => (
                <ListItem
                    key={id}
                    id={id}
                    name={name}
                    onClick={onClick}
                    subMenus={subMenuItems}
                    onClickHandler={onClickHandler}
                    isActive={active === id}
                    padding={padding}
                />
            ))}
        </ul>
    );
};

export default SubMenu;