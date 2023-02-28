import AdminSidebar from "../../organisms/AdminSidebar";
import AdminTopBar from "../../organisms/AdminTopBar";
import ListLecture from "../../organisms/lectures/ListLecture";

const ListLectureTemplate = ({ menuItems, linkColor, linkHoverColor, activeLinkColor, linkHoverBgColor, data, columns, tableData }) => {
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
                    <ListLecture columns={columns} tableData={tableData}></ListLecture>
                </div>
            </div>
        </>
    );
};

export default ListLectureTemplate;
