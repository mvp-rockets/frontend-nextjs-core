import Rating from "../../atoms/Rating";
export default {
  title: "Atoms /Rating",
  component: Rating,
};
const Template = (args) => <Rating {...args} />;
export const StarRating = Template.bind({});
StarRating.args = {
  initialRating: 4,
  maxRating: 5,
  iconImages: {
    active: "/images/icons/star-full.svg",
    inActive: "/images/icons/star-blank.svg",
  },
};
export const SmileRating = Template.bind({});
SmileRating.args = {
  icon: "smile",
  initialRating: 5,
  maxRating: 10,
  iconImages: {
    active: "/images/icons/smiley-full.svg",
    inActive: "/images/icons/smiley-blank.svg",
  },
};
