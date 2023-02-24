import InputBox from "../../atoms/InputBox";
import Text from "../../atoms/Text";
import Dropdown from "../../atoms/Dropdown";
import FileUpload from "../../molecules/FileUpload";
import RadioButton from "../../atoms/RadioButton";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const AddLecturesMolecule = () => {
    return (
        <div className="">
            <div className="flex flex-col gap-5">
                <InputBox
                    id="name"
                    name="name"
                    placeholder="Enter Your Name"
                    labelClass="w-40"
                    labelText="Title"
                    isLabel
                    register={() => {}}
                    type="text"
                    variant="Small"
                    className=""
                    align="flex flex-row"
                    inputWidth="w-572"
                />
                <div className="flex">
                    <Text className="w-40">Thumbnail</Text>
                    <FileUpload UploadSubText="Upload" className="" iconAlt="Upload Icon" iconSrc="/images/icons/plus-icon-b.svg" variant="default" />
                </div>
                <div className="flex">
                    <Text className="w-40">Video</Text>
                    <FileUpload
                        UploadLabel="Click or drag file to this area to upload"
                        UploadLabelStyle=""
                        UploadSubText="Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files"
                        UploadSubTextStyle=""
                        className="bg-neutral-100 border "
                        iconAlt="Upload Icon"
                        iconSrc="/images/icons/upload-grag.svg"
                        variant="uploadDrag"
                        Width="w-572"
                    />
                </div>
                <Dropdown
                    labelClassName="w-40"
                    dropdownWidth="w-572"
                    className="w-40"
                    align="flex-row"
                    id="selectbox"
                    labelFor="Input"
                    labelText="Enter Label"
                    name="select"
                    defaultValue="fox"
                    options={[
                        {
                            label: "Fox",
                            value: "fox",
                        },
                        {
                            label: "Butterfly",
                            value: "Butterfly",
                        },
                        {
                            label: "Honeybee",
                            value: "Honeybee",
                        },
                    ]}
                    placeholder="Select From List"
                />
                <div className="flex">
                    <Text className="w-40">Status</Text>
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
                <div className="flex">
                    <Text className="w-44">Description</Text>
                    <Editor toolbarClassName="toolbarClassName" wrapperClassName="h-48 w-572" editorClassName="border h-48 px-2  " />
                </div>
            </div>
        </div>
    );
};

export default AddLecturesMolecule;
