import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

// style
import "./style.css";
import "react-datepicker/dist/react-datepicker.css";

const DateAndTime = ({setBeginAt ,setEndAt,beginAt,endAt,startTime, setStartTime,endTime, setEndTime}) => {


  // set range value
  const onChange = (dates) => {
    const [start, end] = dates;
    setBeginAt(start);
    setEndAt(end);
  };

  return (
    <>
      <label to="dates">Select Dates</label>
      <DatePicker
        selected={beginAt}
        onChange={onChange}
        startDate={beginAt}
        endDate={endAt}
        minDate={new Date()}
        selectsRange
        inline
        id="dates"
      />

      <label to="startTime">Start Time</label>
      <DatePicker
        selected={startTime}
        onChange={(date) => {
          setStartTime(date);
          console.log(date);
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        id="startTime"
      />
      
      <label to="endTime">End Time</label>
      <DatePicker
        selected={endTime}
        onChange={(date) => {
          setEndTime(date);
          console.log(date);
        }}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Time"
        dateFormat="h:mm aa"
        id="endTime"
      />
    </>
  );
};

export default DateAndTime;
