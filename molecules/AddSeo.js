import InputBox from "../atoms/InputBox";
import TextArea from "../atoms/TextArea";

const AddSeo = () => {
    return (
        <div className="flex flex-col gap-7">
            <InputBox
                id="name"
                name="name"
                placeholder="Page Title"
                labelClass="w-40"
                labelText="Page Title"
                isLabel
                register={() => {}}
                type="text"
                variant="Small"
                className=""
                align="flex flex-row"
                inputWidth="w-572"
            />
            <InputBox
                id="name"
                name="name"
                placeholder="H1 Tag"
                labelClass="w-40"
                labelText="H1 Tag"
                isLabel
                register={() => {}}
                type="text"
                variant="Small"
                className=""
                align="flex flex-row"
                inputWidth="w-572"
            />
            <InputBox
                id="name"
                name="name"
                placeholder="Meta Keyword"
                labelClass="w-40"
                labelText="Meta Keyword"
                isLabel
                register={() => {}}
                type="text"
                variant="Small"
                className=""
                align="flex flex-row"
                inputWidth="w-572"
            />
            <div className="flex">
                <label className="w-40">Meta Tag</label>
                <TextArea errorMessage="Error Message" id="name" name="name" placeholder="Placeholder" register={() => {}} variant="default" height="h-40" inputWidth="w-572" />
            </div>
        </div>
    );
};

export default AddSeo;
