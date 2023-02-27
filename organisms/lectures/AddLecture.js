import Tabs from "../../molecules/Tabs";
import AddLecturesMolecule from "../../molecules/lectures/AddLecturesMolecule";
import AddSeo from "../../molecules/AddSeo";

const AddLecture = ({}) => {
    return (
        <div className="w-full">
            <Tabs
                className="py-4"
                tabContainerStyle="py-5"
                tabs={[
                    {
                        content: <AddLecturesMolecule />,
                        id: 1,
                        title: "Lecture Details",
                    },
                    {
                        content: <AddSeo />,
                        id: 2,
                        title: "Configure SEO",
                    },
                ]}
                type="horizontalFilled"
            />
        </div>
    );
};

export default AddLecture;
