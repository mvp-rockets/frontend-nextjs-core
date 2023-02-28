import Table from "../Table";
import DatePicker from "../../atoms/DatePicker";
import Dropdown from "../../atoms/Dropdown";
import Button from "../../atoms/Button";
import InputBox from "../../atoms/InputBox";

const ListLecture = ({ columns, tableData }) => {
    return (
        <div className="py-3">
            <div className="flex justify-between mb-4">
                <InputBox id="name" name="name" placeholder="Search" register={() => {}} type="text" variant="Small" className="" align="flex flex-row" inputWidth="w-96" />
                <Button className="py-0   px-2" label="Add Lecture" size="small" style="primary" onClick={() => {}} />
            </div>
            <div className="flex gap-5 mb-5">
                <DatePicker
                    autocomplete="off"
                    id="name"
                    name="name"
                    className=" rounded-md py-2 px-2 text-neutral-600 border border-neutral-300 w-[141px]"
                    placeholder="DD/MM/YY"
                    register={() => {}}
                />
                <Dropdown
                    dropdownWidth="w-48"
                    className="w-40 border-neutral-300"
                    align="flex-row"
                    id="selectbox"
                    labelFor="Input"
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
                    placeholder="Status"
                />
            </div>
            <Table columns={columns} tableData={tableData} />
        </div>
    );
};

export default ListLecture;
