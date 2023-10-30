import React from "react";
import PropTypes from "prop-types";
import Navbar from "../molecules/Navbar";
import Sidebar from "../molecules/Sidebar";
import AddSession from "../organisms/AddSession";

const BaseTemplate = ({
  logo,
  logoAlt,
  menuItem,
  menuTitle,
  menuItems,
  children,
  headingText,
  addBtn,
  saveBtn,
  handelAdd,
  handleSave,
  dateLabel,
  fromLabel,
  toLabel,
  deleteSession,
}) => {
  return (
    <div className="w-full">
      <Navbar logo={logo} logoAlt={logoAlt} menuItem={menuItem} />

      <div className={`flex flex-row`}>
        <Sidebar menuTitle={menuTitle} menuItems={menuItems} />

        <div className="bg-neutral-100 w-full p-6 mt-2 h-[calc(100vh_-_120px)]">
          {children}
          <AddSession
            headingText={headingText}
            addBtn={addBtn}
            saveBtn={saveBtn}
            handelAdd={handelAdd}
            handleSave={handleSave}
            dateLabel={dateLabel}
            fromLabel={fromLabel}
            toLabel={toLabel}
            deleteSession={deleteSession}
          />
        </div>
      </div>
    </div>
  );
};

AddSession.defaultProps = {
  logo: "/images/logo.svg",
  logoAlt: "MVPRockets",
  menuTitle: "Features",
  menuItem: [],
  headingText: "Add Session",
  addBtn: "Add more session",
  saveBtn: "Save",
  dateLabel: "Date",
  fromLabel: "From",
  toLabel: "To",
  handleAdd: () => {},
  handleSave: () => {},
  deleteSession: () => {},
};

BaseTemplate.propTypes = {
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  menuTitle: PropTypes.string,
  menuItem: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  headingText: PropTypes.string,
  addBtn: PropTypes.string,
  saveBtn: PropTypes.string,
  dateLabel: PropTypes.string,
  toLabel: PropTypes.string,
  fromLabel: PropTypes.string,
  handleAdd: PropTypes.func,
  handleSave: PropTypes.func,
  deleteSession: PropTypes.func,
};

export default BaseTemplate;
