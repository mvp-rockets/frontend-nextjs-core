import Image from "next/image";
import React from "react";
import Checkbox from "../../atoms/Checkbox";
import Table from "../../organisms/Table";

export default {
  title: "organisms/Tables",
  component: Table,
};

const tableData = {
  rows: [
    {
      projectName: "Jaffar",
      founderName: "Justin Curtis",
      startDate: "27 Aug, 2022",
      launchDate: "27 Aug, 2022",
    },
    {
      projectName: "Kachow!",
      founderName: "Mira Dokidis",
      startDate: "26 Aug, 2022",
      launchDate: "26 Aug, 2022",
    },
    {
      projectName: "Jakob Dorwart!",
      founderName: "Mira Dokidis",
      startDate: "22 Aug, 2022",
      launchDate: "22 Aug, 2022",
    },
    {
      projectName: "Canengage!",
      founderName: "Alfredo Gouse",
      startDate: "11 Aug, 2022",
      launchDate: "11 Aug, 2022",
    },
    {
      projectName: "Livspace!",
      founderName: "Ann Vaccaro",
      startDate: "22 Aug, 2022",
      launchDate: "22 Aug, 2022",
    },
    {
      projectName: "Stream Alive!",
      founderName: "Aspen Stanton",
      startDate: "02 Aug, 2022",
      launchDate: "02 Aug, 2022",
    },
    {
      projectName: "Alaan!",
      founderName: "Aspen Stanton",
      startDate: "28 Aug, 2022",
      launchDate: "28 Aug, 2022",
    },
    {
      projectName: "Bimaplan!",
      founderName: "Aspen Stanton",
      startDate: "11 Aug, 2022",
      launchDate: "11 Aug, 2022",
    },
    {
      projectName: "Nirogstreet!",
      founderName: "Aspen Stanton",
      startDate: "15 Aug, 2022",
      launchDate: "15 Aug, 2022",
    },
  ],
  count: 9,
};

const columns = [
  {
    text: "",
    className: "md:w-16 w-full",
    formatter: (data) => <Checkbox />,
  },

  {
    text: "Project Name",
    showSorting: true,
    className: "md:w-1/4 w-full",
    formatter: (data) => data.projectName,
  },
  {
    text: "Founder Name",
    showSorting: true,
    className: "md:w-1/4 w-full",
    formatter: (data) => data.founderName,
  },
  {
    text: "Start Date",
    showSorting: true,
    className: "md:w-1/4 w-full",
    formatter: (data) => data.startDate,
  },
  {
    text: "Launch Date",
    showSorting: true,
    className: "md:w-1/4 w-full",
    formatter: (data) => data.launchDate,
  },
];

const Template = (args) => <Table {...args} />;
export const Tables = Template.bind({});
Tables.args = {
  flexResponsive: true,
  striped: true,
  tableData,
  columns,
  tableClass: "shadow-sm",
  theadRow: "hidden md:flex flex-wrap md:flex-nowrap",
  tbodyRow: "flex flex-wrap md:flex-nowrap",
  mobileHeaderFontWeight: "font-semibold",
  mobileHeaderFontSize: "14px",
  mobileHeaderFontColor: "text-neutral-600",
};
