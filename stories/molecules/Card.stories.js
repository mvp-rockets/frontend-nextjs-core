import React from "react";
import Card from "../../molecules/Card";

export default {
  title: "molecules/Cards",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  backgroundColor: "bg-white",
  cardPadding:"p-4",
  borderRadius: "rounded-md",
  HeadingText : "Card title",
  SecondaryText : "This is Default Card",
  variant : 'default',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  backgroundColor: "bg-white",
  cardPadding:"p-4",
  borderRadius: "rounded-md",
  HeadingText : "Card title",
  SecondaryText : "Card with Icon",
  variant : 'cardWithIcon',
  iconAlt : '/images/icons/home.svg',
  iconSrc : 'Home Icon',
};

export const WithImage = Template.bind({});
WithImage.args = {
  backgroundColor: "bg-white",
  cardPadding:"p-4",
  borderRadius: "rounded-md",
  HeadingText : "Card title",
  SecondaryText : "This card having Image",
  variant : 'cardWithImage',
  imgSrc : "/images/card.png",
  imgAlt : "Image Description",
};

export const cardWithSmallImage = Template.bind({});
cardWithSmallImage.args = {
  backgroundColor: "bg-white",
  cardPadding:"p-4",
  borderRadius: "rounded-md",
  HeadingText : "Card title",
  SecondaryText : "This card having Image",
  variant : 'cardWithSmallImage',
  imgSmall: true,
  imgSrc : "/images/card.png",
  imgAlt : "Image Description",
  imgClass: 'w-28 rounded-lg '
};



export const WithButton = Template.bind({});
WithButton.args = {
  backgroundColor: "bg-white",
  cardPadding:"p-4",
  borderRadius: "rounded-md",
  HeadingText : "Card title",
  SecondaryText : "This card having Image and Button both",
  buttonLabel : 'Button Label',
  variant : 'detailCard',
  imgSrc : "/images/card.png",
  imgAlt : "Image Description",
};