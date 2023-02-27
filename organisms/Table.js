import IcomoonIcon from "../atoms/IcomoonIcon";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { usePagination, useSortBy, useTable } from "react-table";

const Table = ({ tableData }) => {
    const columns = React.useMemo(
        () => [
            {
                Header: "Full Name",
                accessor: "Name",
            },
            {
                Header: "Sector Focus",
                accessor: "aa",
            },
        ],
        []
    );
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        setPageSize,
        state: { sortBy },
    } = useTable(
        {
            columns,
            data: tableData,
            manualSortBy: true,
            disableMultiSort: true,
            initialState: {
                sortBy: [{ id: "fields[Name]", desc: false }],
            },
        },

        useSortBy,
        usePagination
    );
    return (
        <div>
            <table className="w-full" {...getTableProps()}>
                <thead className="bg-neutral-100 text-left text-xs md:text-sm uppercase text-neutral-400">
                    {headerGroups.map((headerGroup, i) => (
                        <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column, i) => (
                                <th
                                    className="px-4 py-4 md:px-6 md:py-5 font-medium w-fit truncate min-w-[200px] md:w-2/12 md:max-w-2/12 md:min-w-[16%]"
                                    key={i}
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                >
                                    {column.render("Header")}
                                    <span className="ml-3">
                                        {column.isSorted ? (
                                            column.isSortedDesc ? (
                                                <IcomoonIcon icon={"sort-desc"} size="22" />
                                            ) : (
                                                <IcomoonIcon icon={"sort-aces"} size="22" />
                                            )
                                        ) : (
                                            <IcomoonIcon icon={"sort"} size="22" />
                                        )}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr className="bg-white rounded-md whitespace-pre-line" key={i} {...row.getRowProps()}>
                                {row.cells.map((cell, i) => (
                                    <td key={i} className="px-4 py-4 md:px-6 md:py-5 text-xs md:text-sm" {...cell.getCellProps()}>
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

// Table.propTypes = {
//     columns: PropTypes.object,
//     tableData: PropTypes.object,
//     tableOutline: PropTypes.string,
//     tableOutlineColor: PropTypes.string,
//     tableRadius: PropTypes.string,
//     tableClass: PropTypes.string,
//     theadClass: PropTypes.string,
//     cellPadding: PropTypes.string,
//     theadBg: PropTypes.string,
//     theadBorder: PropTypes.string,
//     theadBorderColor: PropTypes.string,
//     theadFontSize: PropTypes.string,
//     theadFontWeight: PropTypes.string,
//     theadFontColor: PropTypes.string,
//     tbodyBg: PropTypes.string,
//     tbodyBorder: PropTypes.string,
//     tbodyBorderColor: PropTypes.string,
//     tbodyFontSize: PropTypes.string,
//     tbodyFontWeight: PropTypes.string,
//     tbodyFontColor: PropTypes.string,
//     stripedBg: PropTypes.string,
//     striped: PropTypes.bool,
//     flexResponsive: PropTypes.bool,
// };

export default Table;
