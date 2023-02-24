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
            Name: "sdsd",
            aa: "sssss",
        },
        {
            Name: "sdsd",
            aa: "sssss",
        },
        {
            Name: "sdsd",
            aa: "sssss",
        },
        {
            Name: "sdsd",
            aa: "sssss",
        },
    ],
};
