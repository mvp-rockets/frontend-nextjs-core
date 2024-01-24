import React from "react";
import PropTypes from "prop-types";
import Navbar from "../molecules/Navbar";
import Scheduler from "../molecules/Scheduler";
import Sidebar from "../molecules/Sidebar";

const SchedulerTemplate = ({
  logo,
  logoAlt,
  menuItem,
  menuTitle,
  menuItems,
  tagList,
  removeTag,
  subHeading,
  headingText,
}) => {
  return (
    <div>
      <Navbar logo={logo} logoAlt={logoAlt} menuItem={menuItem} />

      <div className={`flex flex-row`}>
        <Sidebar menuTitle={menuTitle} menuItems={menuItems} />
        <div className="bg-neutral-100 w-full p-8 pb-4 ">
          <Scheduler
            tagList={tagList}
            removeTag={removeTag}
            subHeading={subHeading}
            headingText={headingText}
          />
        </div>
      </div>
    </div>
  );
};

export default SchedulerTemplate;

SchedulerTemplate.propTypes = {
  shadow: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  menuItem: PropTypes.array,
};
