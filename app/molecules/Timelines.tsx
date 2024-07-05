import React from "react";
import Image from "next/image";
import { Text } from "../atoms";

interface TimeLineListProps {
  type: "dot" | "icon";
  date: string;
  title: string;
  description: string;
}

const TimeLineList: React.FC<TimeLineListProps> = ({
  type,
  date,
  title,
  description,
}) => {
  const isIcon = type === "icon";

  return (
    <li className={`relative after:content-[''] after:top-2 after:absolute after:w-1 after:h-full after:bg-neutral-300  ${isIcon ? "after:left-[9px]" : "after:left-[2px]"}`}>
      <div className="flex relative">
        <div className={`flex items-center justify-center rounded-full overflow-hidden bg-primary-900 outline outline-8 outline-basic-white relative z-10 ${isIcon ? "w-6 h-6" : "w-2 h-2"}`}>
          {isIcon && <Image src="./icons/check.svg" alt="check" width={12} height={12} />}
        </div>
        <div className="ml-5 pb-[26px] -mt-1">
          <Text variant="bodySmall" textColor="text-secondary-500">{date}</Text>
          <Text variant="bodySmall" textColor="text-neutral-900" fontWeight="font-medium" className="my-1">{title}</Text>
          <Text variant="bodySmall" textColor="text-neutral-500">{description}</Text>
        </div>
      </div>
    </li>
  );
};

interface TimeLineProps {
  type: "dot" | "icon";
  timelineList: {
    id: number | string;
    date: string;
    title: string;
    description: string;
  }[];
}

const TimeLine: React.FC<TimeLineProps> = ({ type, timelineList }) => {
  return (
    <ol>
      {timelineList.map(({ id, date, title, description }) => (
        <TimeLineList key={id} type={type} date={date} title={title} description={description} />
      ))}
    </ol>
  );
};

export default TimeLine;
