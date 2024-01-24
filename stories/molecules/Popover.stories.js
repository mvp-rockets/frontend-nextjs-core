import Text from "../../atoms/Text";
import Popover from "../../molecules/Popover";
import Modal from "../../organisms/Modal";

export default {
  title: "Molecules/Popovers",
  component: Popover,
  argTypes: {
    position: {
      control: "select",
      options: ["top", "bottom", "left", "right", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"],
    },
  },
};
const Template = (args) => <Popover {...args} />;

export const Popovers = Template.bind({});
Popovers.args = {
  children: <div><Text
    variant="bodySmall"
    fontWeight="font-bold"
    className={"px-4 py-1"}
  >Card Title</Text>
    <div className="border-t border-[#F0F0F0] py-3 px-4">content<br />content</div> </div>,
  position: "bottom",
  hoverText: "Hover to see the Popover",
};

export const PopoverInsideModal = () => {
  return (
    <Popover
      id="popoverInsideModal"
      position="bottomRight"
      radius="rounded-2xl"
      hoverText="Hover to see the Popover"
      popoverWidth="w-[344px]"
      arrow={false}>
      <Modal showModal={true}
        children="Content item placeholder. To be replaced with component"
        cardRadius="rounded-2xl"
        modalTitle="Title of the modal"
        modalSecondaryBtn={true}
        modalFooter={true}
        modalBodyClass="text-center"
        baseModal={true}
        overlayClass="hidden"
        modalHeight="h-auto"
        modalPosition="static" />
    </Popover>
  );
};
