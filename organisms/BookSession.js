import PropTypes from "prop-types";
import Breadcrumb from "../atoms/Breadcrumb";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import InputBox from "../atoms/InputBox";
import Tag from "../atoms/Tag";
import Text from "../atoms/Text";
import TextArea from "../atoms/TextArea";
import Tabs from "../molecules/Tabs";
import { useState } from "react";
import DatePicker from "../atoms/DatePicker";

const BookSession = ({ bookSessionBreadcrumb, bookSessionTabs, timeSlot }) => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="w-full">
      <Breadcrumb
        divider="slash"
        data={bookSessionBreadcrumb}
        textSize="text-base md:text-xl"
        defaultClass="text-primary-900 font-semibold leading-5 capitalize"
        currentClass="text-primary-900 font-normal leading-5 capitalize"
      />

      <Text
        className="text-neutral-400 my-2"
        children="Australian Board Certified and RCI certified Clinical Psychologist. M.Phil from NIMHANS"
      />

      <Tag
        style="border"
        title="₹1200/Session"
        size="default"
        shape="rounded"
        icon={false}
      />

      <div className="py-10">
        <Tabs
          type="horizontalFilled"
          tabsClass="w-1/2 text-center bg-white"
          tabs={bookSessionTabs}
        />

        <div className="flex flex-wrap md:flex-nowrap gap-6 w-full mt-6">
          <div className="flex flex-wrap md:flex-nowrap bg-white w-full md:w-4/6 px-6 py-5 rounded-lg">
            <div className="w-full sm:w-4/6">
              <Heading
                type="h6"
                className="text-gray-900 mb-6"
                children="Choose Date"
              />
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                inline
              />
            </div>

            <div className="w-full sm:w-2/6 sm:border-l border-gray-200 sm:px-6">
              <Heading
                type="h6"
                className="text-gray-900 mb-6"
                children="Select Time"
              />

              {timeSlot.map((title) => (
                <Tag
                  icon={false}
                  style="primary"
                  shape="rounded"
                  title={title.time}
                  className="mb-4 mr-2 cursor-pointer"
                />
              ))}
            </div>
          </div>

          <div className="bg-white w-full md:w-2/6 px-6 py-5 rounded-lg">
            <Heading
              type="h6"
              className="text-gray-900 pb-4 mb-6 border-b border-gray-200"
              children="Message to Doctor"
            />

            <InputBox className="mb-4" placeholder="Doctor" variant="Large" />

            <TextArea
              name={"get help"}
              placeholder="Briefly explain what you would like to get help in"
              height="h-[202px]"
            />
          </div>
        </div>
      </div>
      <Button size="small" label="Book Session" />
    </div>
  );
};

BookSession.defaultProps = {
  bookSessionBreadcrumb: [],
  bookSessionTabs: [],
  timeSlot: [],
};

BookSession.propTypes = {
  bookSessionBreadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      path: PropTypes.string,
    })
  ),
  bookSessionTabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      active: PropTypes.string,
    })
  ),
  timeSlot: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.date,
    })
  ),
};

export default BookSession;
