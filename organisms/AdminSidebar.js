import Icon from "../atoms/Icon";
import SubMenu from "../molecules/SubMenu";

const AdminSidebar = ({ menuItems, linkColor, linkHoverColor, activeLinkColor, linkHoverBgColor }) => {
    return (
        <div className="w-60 bg-primary-900 text-white px-6 h-screen Adminsidebar">
            <div className="text-white">
                <Icon iconSrc="/images/logo-white.svg" iconWidth="200" iconHeight="50" className="py-3" />
                <SubMenu
                    menuItems={menuItems}
                    subMenuClass="text-white"
                    type="horizontal"
                    linkColor={linkColor}
                    linkHoverColor={linkHoverColor}
                    activeLinkColor={activeLinkColor}
                    linkHoverBgColor={linkHoverBgColor}
                />
            </div>
        </div>
    );
};

export default AdminSidebar;
