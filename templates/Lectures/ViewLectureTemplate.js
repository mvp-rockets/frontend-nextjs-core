import AdminSidebar from "../../organisms/AdminSidebar";
import AdminTopBar from "../../organisms/AdminTopBar";
import ViewLecture from "../../organisms/lectures/ViewLecture";

const ViewLectureTemplate = ({ menuItems, linkColor, linkHoverColor, activeLinkColor, linkHoverBgColor, data, columns, tableData }) => {
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
                    <ViewLecture columns={columns} tableData={tableData}></ViewLecture>
                </div>
            </div>
        </>
    );
};

export default ViewLectureTemplate;
