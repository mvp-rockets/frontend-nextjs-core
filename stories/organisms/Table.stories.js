import Image from "next/image";
import React from "react";
import Checkbox from "../../atoms/Checkbox";
import Table from "../../organisms/Table";

export default {
    title: "organisms/Tables",
    component: Table,
};

const Template = (args) => <Table {...args} />;
export const Tables = Template.bind({});

Tables.args = {
    tableData: [
        {
            Name: "Introduction",
            createdby: "John Doe",
            createdon: "13-05-2022",
            updatedby: "John Doe",
            updatedon: "13-05-2022",
            Instructor: "Andrew",
            status: "Active",
            action: "View",
        },
        {
            Name: "Introduction",
            createdby: "John Doe",
            createdon: "13-05-2022",
            updatedby: "John Doe",
            updatedon: "13-05-2022",
            Instructor: "Andrew",
            status: "Active",
            action: "View",
        },
        {
            Name: "Introduction",
            createdby: "John Doe",
            createdon: "13-05-2022",
            updatedby: "John Doe",
            updatedon: "13-05-2022",
            Instructor: "Andrew",
            status: "Active",
            action: "View",
        },
        {
            Name: "Introduction",
            createdby: "John Doe",
            createdon: "13-05-2022",
            updatedby: "John Doe",
            updatedon: "13-05-2022",
            Instructor: "Andrew",
            status: "Active",
            action: "View",
        },
    ],
    columns: [
        {
            Header: "Title",
            accessor: "Name",
        },
        {
            Header: "Created By",
            accessor: "createdby",
        },
        {
            Header: "Created On",
            accessor: "createdon",
        },
        {
            Header: "Updated By",
            accessor: "updatedby",
        },
        {
            Header: "Updated On",
            accessor: "updatedon",
        },
        {
            Header: "Instructor",
            accessor: "Instructor",
        },
        {
            Header: "Status",
            accessor: "status",
        },
        {
            Header: "Action",
            accessor: "action",
        },
    ],
};
