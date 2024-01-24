import React from "react";
import PropTypes from "prop-types";
import Navbar from "../molecules/Navbar";
import Sidebar from "../molecules/Sidebar";
import BookSession from "../organisms/BookSession";

const BookSessionTemplate = ({
  logo,
  logoAlt,
  menuItem,
  menuTitle,
  menuItems,
  bookSessionBreadcrumb,
  bookSessionTabs,
  timeSlot,
}) => {
  return (
    <div className="w-full">
      <Navbar logo={logo} logoAlt={logoAlt} menuItem={menuItem} />

      <div className={`flex flex-row`}>
        <Sidebar menuTitle={menuTitle} menuItems={menuItems} />

        <div className="bg-neutral-100 w-full p-8 pb-4 flex flex-row">
          <BookSession
            bookSessionBreadcrumb={bookSessionBreadcrumb}
            bookSessionTabs={bookSessionTabs}
            timeSlot={timeSlot}
          />
        </div>
      </div>
    </div>
  );
};

BookSessionTemplate.defaultProps = {
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

BookSessionTemplate.propTypes = {
  shadow: PropTypes.string,
  logo: PropTypes.string,
  logoAlt: PropTypes.string,
  menuItem: PropTypes.array,
};

export default BookSessionTemplate;
