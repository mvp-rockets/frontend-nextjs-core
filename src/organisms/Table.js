
import PropTypes from "prop-types";
import { useState } from "react";
import SortingTableHeader from "../molecules/SortingTableHeader";

const Table = ({
    columns,
    tableData,
    tableOutline = "outline outline-1",
    tableOutlineColor = "outline-neutral-400",
    tableRadius = "rounded",
    tableClass = "outline outline-1 outline-neutral-400 rounded",
    theadClass = "",
    cellPadding = "px-6 py-4 md:py-4 md:px-6",
    theadBg = "basic-white",
    theadBorder = "border-b",
    theadBorderColor = "border-neutral-300",
    theadFontSize = "text-sm",
    theadFontWeight = "font-medium",
    theadFontColor = "text-neutral-800",
    tbodyBg = "basic-white",
    tbodyBorder = "border-b",
    tbodyBorderColor = "border-neutral-300",
    tbodyFontSize = "text-sm",
    tbodyFontWeight = "font-normal",
    tbodyFontColor = "text-neutral-800",
    stripedBg = "bg-neutral-50",
    striped = false,
    flexResponsive = false,

}) => {

    const [pageOptions, setPageOptions] = useState({
        sort: [],
        currentSortHeader: null,
    });
    const applySorting = (key, sortingOrder) => {
        setPageOptions((prevState) => ({
            ...prevState,
            currentSortHeader: key,
            sort: [key, sortingOrder],
        }));
    };

    return (
        <table className={`w-full text-left ${tableOutline} ${tableOutlineColor} ${tableRadius} ${tableClass}`}>
            <thead className={theadClass}>
                <tr className={`${flexResponsive && "max-md:flex flex-wrap"} ${theadFontSize} ${theadFontWeight} ${theadFontColor} ${theadBorder} ${theadBorderColor} ${theadBg}`}>
                    {columns.map((column, id) => (
                        <th key={id} scope="col" className={`${cellPadding} ${column.className}" `}>
                            {column.showSorting ? (
                                <SortingTableHeader
                                    title={column.text}
                                    onClick={(sortingOrder) =>
                                        applySorting(column.text, sortingOrder)
                                    }
                                    current={pageOptions.currentSortHeader == column.text}
                                />
                            ) : (
                                <div>{column.text}</div>
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {tableData.rows?.map((data, id) => (

                    <tr key={id} className={`${flexResponsive && "max-md:flex flex-wrap"} last:border-b-0 ${tbodyFontSize} ${tbodyFontWeight} ${tbodyFontColor} ${tbodyBorder} ${tbodyBorderColor} ${tbodyBg} even:${striped ? `${stripedBg}` : "bg-transparent"}`}>
                        {columns.map((col, idx) => (
                            <td key={idx} className={`${cellPadding} ${col.className}`}>
                                {col.formatter !== undefined
                                    ? col.formatter(data)
                                    : data[`${col.dataField}`]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    columns: PropTypes.object,
    tableData: PropTypes.object,
    tableOutline: PropTypes.string,
    tableOutlineColor: PropTypes.string,
    tableRadius: PropTypes.string,
    tableClass: PropTypes.string,
    theadClass: PropTypes.string,
    cellPadding: PropTypes.string,
    theadBg: PropTypes.string,
    theadBorder: PropTypes.string,
    theadBorderColor: PropTypes.string,
    theadFontSize: PropTypes.string,
    theadFontWeight: PropTypes.string,
    theadFontColor: PropTypes.string,
    tbodyBg: PropTypes.string,
    tbodyBorder: PropTypes.string,
    tbodyBorderColor: PropTypes.string,
    tbodyFontSize: PropTypes.string,
    tbodyFontWeight: PropTypes.string,
    tbodyFontColor: PropTypes.string,
    stripedBg: PropTypes.string,
    striped: PropTypes.bool,
    flexResponsive: PropTypes.bool,
};

export default Table;
