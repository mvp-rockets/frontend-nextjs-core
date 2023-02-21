import Rating from "../../atoms/Rating";
export default {
    title: "Atoms /Ratings",
    component: Rating,
    argTypes: {
        icon: {
            control: "select",
            options: ["star", "smile"],
        },
    }
};
const Template = (args) => <Rating {...args} />;
export const Ratings = Template.bind({});
Ratings.args = {
    initialRating: 4,
    maxRating: 6
}