import Icon from "../../atoms/Icon";
import Text from "../../atoms/Text";
import RadioButton from "../../atoms/RadioButton";

const ViewLectureMolecule = ({ lectureData, ...props }) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex  gap-5">
                <div className="w-40">
                    <Text>Title</Text>
                </div>
                <div>
                    <Text>Introduction to UX Design</Text>
                </div>
            </div>
            <div className="flex  gap-5">
                <div className="w-40">
                    <Text>Thumbnail</Text>
                </div>
                <div className="border p-1 rounded border-neutral-200">
                    <Icon iconSrc="/images/preview.svg" iconHeight="86" iconWidth="86" />
                </div>
            </div>

            <div className="flex  gap-5">
                <div className="w-40">
                    <Text>Video</Text>
                </div>
                <div>
                    <Icon iconSrc="/images/video-preview.svg" iconHeight="115" iconWidth="221" />
                </div>
            </div>
            <div className="flex  gap-5">
                <div className="w-40">
                    <Text>Instructor</Text>
                </div>
                <div>
                    <Text>Andrew, Stephen</Text>
                </div>
            </div>
            <div className="flex  gap-5">
                <div className="w-40">
                    <Text>Status</Text>
                </div>
                <div>
                    <RadioButton
                        data={[
                            {
                                className: "",
                                id: "test1",
                                isSelected: true,
                                name: "test",
                                radioLabel: "Active",
                                value: "test1",
                            },
                            {
                                className: "",
                                id: "test1",
                                name: "test",
                                radioLabel: "Inactive",
                                value: "test",
                            },
                        ]}
                        handleChange={() => {}}
                        radioLabelPos="right"
                    />
                </div>
            </div>
            <div className="flex  gap-5">
                <div className="w-40">
                    <Text>Description</Text>
                </div>
                <div>
                    <Text textColor="text-neutral-500">Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</Text>
                </div>
            </div>
        </div>
    );
};

export default ViewLectureMolecule;
