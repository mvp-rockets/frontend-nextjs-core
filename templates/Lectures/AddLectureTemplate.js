import AdminSidebar from "../../organisms/AdminSidebar";
import AdminTopBar from "../../organisms/AdminTopBar";
import AddLecture from "../../organisms/lectures/AddLecture";

const AddLectureTemplate = ({ menuItems, linkColor, linkHoverColor, activeLinkColor, linkHoverBgColor, data }) => {
    return (
        <>
            <div className="grid grid-cols-6">
                <div className="w-64">
                    <AdminSidebar
                        menuItems={menuItems}
                        subMenuClass="text-white"
                        type="horizontal"
                        linkColor={linkColor}
                        linkHoverColor={linkHoverColor}
                        activeLinkColor={activeLinkColor}
                        linkHoverBgColor={linkHoverBgColor}
                    ></AdminSidebar>
                </div>
                <div className="col-span-5">
                    <AdminTopBar breadcrumb={data}></AdminTopBar>
                    <AddLecture></AddLecture>
                </div>
            </div>
        </>
    );
};

export default AddLectureTemplate;
