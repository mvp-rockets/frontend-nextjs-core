import Tabs from "../../molecules/Tabs";
import ViewLectureMolecule from "../../molecules/lectures/ViewLectureMolecule";

const ViewLecture = ({}) => {
    return (
        <div className="w-full">
            <Tabs
                className="py-4"
                tabContainerStyle="py-5"
                tabs={[
                    {
                        content: <ViewLectureMolecule />,
                        id: 1,
                        title: "Lecture Details",
                    },
                    {
                        content: "SEO",
                        id: 2,
                        title: "Configure SEO",
                    },
                ]}
                type="horizontalFilled"
            />
        </div>
    );
};

export default ViewLecture;
