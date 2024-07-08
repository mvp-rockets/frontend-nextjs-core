import React, { useEffect, useState } from 'react';
import NextImage from 'next/image';
import { Heading } from '../atoms';

interface AccordionListProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const AccordionList: React.FC<AccordionListProps> = ({ title, content, isActive, onClick }) => {
  return (
    <>
      <div className={`bg-basic-white text-lg flex justify-between items-center transform duration-500 px-4 border-t-2 py-[18px] ${isActive ? "border-primary-900" : "first:border-none"}`} onClick={(e) => { e.stopPropagation(); onClick() }}>
        <Heading type="h6" className="text-neutral-900">{title}</Heading>
        <span className='transform flex items-center'>
          <NextImage src="/images/icons/arrow-down-black.svg" alt="arrow" width={32} height={32} />
        </span>
      </div>

      <div
        className={`text-sm text-neutral-700 px-4 pt-5 pb-[18px] bg-basic-white ${isActive ? "opacity-100 block" : "opacity-0 hidden"}`}
        onClick={(e) => e.stopPropagation()}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
};

interface AccordionProps {
  className?: string;
  accordionList: {
    id: string | number;
    content: string;
    title: string;
  }[];
}

const Accordion: React.FC<AccordionProps> = ({ accordionList, className }) => {
  const [isActive, setIsActive] = useState<string | number | null>(null);

  const handleClickOutside = () => {
    setIsActive(null);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false);
    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    };
  }, []);

  return (
    <div className={`border border-neutral-300 max-w-[618px] w-full cursor-pointer rounded overflow-hidden ${className || ""}`}>
      {accordionList.map(({ title, content, id }) => (
        <AccordionList key={id} title={title} content={content} isActive={isActive === id} onClick={() => setIsActive(id)} />
      ))}
    </div>
  );
};

export default Accordion;
