import React from "react";

function TypeOf({ selectHandle }) {
  return (
    <div className="pb-5">
      <h4 className="pb-3 text-[18px] text-primary font-medium">
        Type of Employment
      </h4>
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
          Any
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="Full-time"
          />
          Full Time
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="Temporary"
          />
          Temporary
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="Part-time"
          />
          Part-time
        </label>
      </div>
    </div>
  );
}

export default TypeOf;
