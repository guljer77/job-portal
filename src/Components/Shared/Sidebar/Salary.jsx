import React from "react";

function Salary({ selectHandle, selectHandleClick }) {
  return (
    <div className="py-5">
      <h4 className="pb-3 text-[18px] text-primary font-medium">Salary</h4>
      <div className="">
        <button
          onClick={selectHandleClick}
          value=""
          className="p-2 border text-primary"
        >
          Hourly
        </button>
        <button
          onClick={selectHandleClick}
          value="Monthly"
          className="p-2 border text-primary"
        >
          Monthly
        </button>
        <button
          onClick={selectHandleClick}
          value="Yearly"
          className="p-2 border text-primary"
        >
          Yearly
        </button>
      </div>
      <div className="flex flex-col space-y-2 pt-2">
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            id="test"
            value=""
          />
          All
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="30"
          />
          {"< 30000"}
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="50"
          />
          {"< 50000"}
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="80"
          />
          {"< 80000"}
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="100000"
          />
          {"< 100000"}
        </label>
      </div>
    </div>
  );
}

export default Salary;
