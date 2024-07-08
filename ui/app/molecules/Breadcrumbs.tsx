import React from 'react';
import Link from 'next/link';

interface BreadcrumbItem {
  id: string | number;
  name: string;
  path?: string;
}

interface BreadcrumbsProps {
  divider?: "separator" | "arrow";
  breadcrumbList: BreadcrumbItem[];
  className?: string;
}

const breadcrumbType: { [key: string]: string } = {
  separator: "/",
  arrow: ">",
};

const renderBreadcrumbs = (breadcrumbList: BreadcrumbItem[], divider: "separator" | "arrow") => {
  if (breadcrumbList.length <= 4) {
    return breadcrumbList.map(({ name, path, id }, key) => (
      key + 1 === breadcrumbList.length ?
        <li className="text-sm text-basic-black pointer-events-none" key={id}>{name}</li> :
        <li className="text-sm text-neutral-500 cursor-pointer flex gap-x-2" key={key}>
          <Link href={path || "#"}>
            {name}
          </Link>
          <span>{breadcrumbType[divider]}</span>
        </li>
    ));
  } else {
    const firstTwo = breadcrumbList.slice(0, 2).map(({ name, path }, key) => (
      <li className="text-sm text-neutral-500 cursor-pointer flex gap-x-2" key={key}>
        <Link href={path || "#"}>
          {name}
        </Link>
        <span>{breadcrumbType[divider]}</span>
      </li>
    ));

    const lastTwo = breadcrumbList.slice(-2).map(({ name, path }, key) => (
      key + 1 === 2 ?
        <li className="text-sm text-basic-black pointer-events-none" key={key}>{name}</li>
        :
        <li className="text-sm text-neutral-500 cursor-pointer flex gap-x-2" key={key}>
          <Link href={path || "#"}>
            {name}
          </Link>
          <span>{breadcrumbType[divider]}</span>
        </li>
    ));

    return [...firstTwo, <li key="middle" className="text-sm text-neutral-500 pointer-events-none flex gap-x-2"> ... <span>{breadcrumbType[divider]}</span></li>, ...lastTwo];
  }
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  divider = "separator",
  breadcrumbList,
  className
}) => {

  return (
    <ul className={`flex items-center gap-x-2 ${className}`}>
      {renderBreadcrumbs(breadcrumbList, divider)}
    </ul>
  );
}

export default Breadcrumbs;
