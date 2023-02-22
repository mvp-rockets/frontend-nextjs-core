import React from 'react';
import PropTypes from 'prop-types';
import Button from "../atoms/Button";
import Heading from "../atoms/Heading";
import IcomoonIcon from "../atoms/IcomoonIcon";
import Label from "../atoms/Label";
import ReactDatePicker from '../atoms/DatePicker';
import { useState } from "react";

const AddSession = ({
    headingText = 'Add Session',
    addBtn = 'Add more session',
    saveBtn = 'Save',
    dateLabel = 'Date',
    fromLabel = 'From',
    toLabel = 'To',
  }) => 
  
  {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <div id='addsession' className='w-full h-full overflow-hidden'>

      <Heading type="h5" className="mb-6"> {headingText} </Heading>

      <div className="bg-white p-6 w-full h-full">

        <div className="flex flex-row flex-wrap items-center mb-3 md:mb-6">
         <div className='w-28'>
             <Label variant='large' className="mb-3 sm:mb-0" children={dateLabel} />
         </div>

          <div className="relative max-w-[240px]">
            <ReactDatePicker
              placeholderText='DD/MM/YY'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            /> 
          </div>

        </div>

        <div className="flex flex-row flex-wrap space-x-10">

          <div className="flex flex-row flex-wrap items-center">

            <div className='w-28'>
              <Label variant='large' className="mb-3 sm:mb-0" children={fromLabel} />
            </div>

            <div className="relative max-w-[240px]">
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="h:mm aa"
                placeholderText='SELECT TIME'
                showTimeSelect
                showTimeSelectOnly
                timeCaption=""
                timeIntervals={15}
              /> 
            </div>

          </div>

          <div className="flex flex-row flex-wrap items-center">
            <div className='w-28'>
              <Label variant='large' className="mb-3 sm:mb-0" children={toLabel} />
            </div>
            
            <div className="flex items-center space-x-6">

            <div className="relative max-w-[240px]">
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="h:mm aa"              
                placeholderText='SELECT TIME'
                showTimeSelect
                showTimeSelectOnly
                timeCaption=""
                timeIntervals={15}
              /> 
            </div>

              <IcomoonIcon
                className="cursor-pointer"
                icon="Delete"
                size="24"
              />

            </div>
          </div>

        </div>

        <div className="flex space-x-2 pt-10">
            <Button style="ghost" label={addBtn} size="small" />
            <Button label={saveBtn} size="small" />
        </div>

      </div>
    </div>

    );
  };

export default AddSession;

AddSession.propTypes = {
  headingText: PropTypes.string,
  addBtn: PropTypes.string,
  saveBtn: PropTypes.string,
  dateLabel: PropTypes.string,
  toLabel: PropTypes.string,
  fromLabel: PropTypes.string,
};