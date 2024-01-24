import Pagination from "../../molecules/Pagination";

export default {
  title: "Molecules/Paginations",
  component: Pagination,
  argTypes: {
    onPageChange: { action: "page change" },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Paginations = Template.bind({});
Paginations.args = {
  totalPages: 50,
  defaultSelectedPage: 1,
};

export const PaginationWithLabel = Template.bind({});
PaginationWithLabel.args = {
  totalPages: 50,
  defaultSelectedPage: 1,
  paginationLabel: "1 to 4 of 65 records",
};
