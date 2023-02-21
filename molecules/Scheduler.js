import React from "react";
import PropTypes from "prop-types";
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import Tag from "../atoms/Tag";
import Text from "../atoms/Text";

const Scheduler = ({ 
  tagList = [],
  removeTag,
  subHeading = "Breif explanation of what the feature is about.",
  headingText = "Manage Recurring Schedules",
  icon,
}) => {

  return (
     <div className='flex flex-col'>

      <div className="flex flex-wrap items-center justify-between mb-4">
        <div>
          <Heading type="h5"> {headingText} </Heading>
          <Text variant="body" className="mt-2 block text-neutral-400"> {subHeading} </Text>
        </div>

        <div className="flex mt-4 md:mt-0">
          <Button label="Save Recurring Schedule" style="ghost" size="small" className="mr-2" />
          <Button label="Add Reccurring Schedule" style="ghost" size="small" />
        </div>

      </div>

      {tagList.map((children) => (
        <div className="flex flex-wrap items-center pt-6 pb-2 border-b border-gray-200">

          <Heading type="h6" className="font-normal mb-4"> {children.date} </Heading>

          <div class="flex flex-wrap md:pl-10">
            {children.times.map((title) => (
              <Tag icon={icon} style="light" shape="soft" title={title.time} onClick={removeTag} className="mb-4 mr-2" />
            ))}
          </div>
          
        </div>
      ))}
    
    </div>
  );
};

Scheduler.propTypes = {
  tagList: PropTypes.object,
  removeTag: PropTypes.func,
  headingText: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Scheduler;
