import Heading from "../../atoms/Heading";

export default {
  title: "Atoms /Heading",
  component: Heading,
};

const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

export const Headings = (args) =>
  headings.map((type) => (
    <Heading key={type} {...args} type={type} />
  ));

Headings.args = {
  className: "",
  children: "Heading content",
};
