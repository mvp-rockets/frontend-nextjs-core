import React from 'react';
import NextImage from 'next/image';
import { Avatar, Checkbox, IconText, Tags, Text } from '@/app/atoms'

interface Header {
  id: string;
  type: string;
  checked?: boolean;
  label?: string;
}

interface Row {
  name: string;
  tagLabel: string;
  tagVariant: "primary" | "error" | "success" | "warning" | "neutral";
  avatarBgColor: string;
  avatarText: string;
  avatarTextColor: string;
  text: string;
  iconSrc: string;
}

interface TableProps {
  headers: Header[];
  tableData: Row[];
  handleOnClick?: () => void;
}

const TableHeaders: React.FC<{ headers: Header[] }> = ({ headers }) => {
  return (
    <thead className="text-sm font-medium text-secondary-700 bg-basic-white border-b border-neutral-400">
      <tr>
        {headers.map((header) => (
          <th scope="col" className="px-6 py-3 whitespace-nowrap" key={header.id}>
            {header.type === 'checkbox' ? (
              <Checkbox
                className="w-fit"
                errorMessage=""
                id={`checkbox-${header.id}`}
                name={`checkbox-${header.id}`}
                onChange={() => { }}
                checked={header.checked}
              />
            ) : header.type === 'blank' ? (
              <></>
            ) : (
              <IconText
                alt="sort"
                className="cursor-pointer"
                fontWeight="font-medium"
                iconHeight={16}
                iconSrc="/images/icons/sort.svg"
                iconWidth={16}
                label={header.label || ''}
                // onClick={() => { }}
                textColor="text-secondary-700"
                variant="bodySmall"
              />
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const Table: React.FC<TableProps> = ({ headers, tableData, handleOnClick = () => { } }) => {
  return (
    <div className="relative overflow-x-auto rounded border border-neutral-400 border-b-0">
      <table className="w-full text-sm text-left">
        <TableHeaders headers={headers} />
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-neutral-400 bg-basic-white">
              <th scope="row" className="px-6 py-4 text-neutral-800 whitespace-nowrap w-[72px]">
                <Checkbox
                  className="w-fit"
                  errorMessage=""
                  id={`checkbox-${index}`}
                  name={`checkbox-${index}`}
                  onChange={() => { }}
                //   onClick={() => { }}
                />
              </th>
              <td className="px-6 py-4 text-neutral-800 whitespace-nowrap">{row.name}</td>
              <td className="px-6 py-4 text-neutral-800 whitespace-nowrap">{row.name}</td>
              <td className="px-6 py-4 text-neutral-800 whitespace-nowrap">
                <Tags
                  iconSrc=""
                  label={row.tagLabel}
                  onClick={() => { }}
                  shape="rounded"
                  size="small"
                  variant={row.tagVariant}
                />
              </td>
              <td className="px-6 py-4 text-neutral-800 whitespace-nowrap flex items-center gap-x-2">
                <Avatar
                  avatarShape="circle"
                  avatarSize="small"
                  bgColor={row.avatarBgColor}
                  className=""
                  onClick={() => { }}
                  text={row.avatarText}
                  textSize="bodySmall"
                  textColor={row.avatarTextColor}
                />
                <Text
                  className=""
                  onClick={() => { }}
                  textColor="text-neutral-800"
                  variant="bodySmall"
                >
                  {row.text}
                </Text>
              </td>
              <td className="px-6 py-4 text-neutral-800 whitespace-nowrap cursor-pointer w-[72px]" onClick={handleOnClick}>
                <NextImage src={row.iconSrc} alt='file' width={24} height={24} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
