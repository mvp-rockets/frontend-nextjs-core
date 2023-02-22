import PropTypes from "prop-types";
import Text from "../atoms/Text";
import VerticalMenu from "../atoms/VerticalMenu";
const Sidebar = ({ sidebarColor = "bg-white", sidebarWidth = "w-[264px] min-w-[264px]", sidebarPadding = "p-8", menuTitle = "features", menuItems = [] }) => {
    return (
        <div className={`${sidebarColor} ${sidebarWidth} ${sidebarPadding} h-[calc(100vh_-_120px)]`}>
            <div className={``}>
                <Text variant="caption" className={"text-neutral-400 uppercase select-none block pb-2"}>
                    {menuTitle}
                </Text>
                <VerticalMenu menuItems={menuItems} />
            </div>
        </div>
    );
};
export default Sidebar;

Sidebar.propTypes = {
    sidebarColor: PropTypes.string,
    sidebarWidth: PropTypes.string,
    sidebarPadding: PropTypes.string,
    menuTitle: PropTypes.string,
    menuItems: PropTypes.array,
};
