import React from "react";

function Experience({ selectHandle }) {
  return (
    <div className="pb-5">
      <h4 className="pb-3 text-[18px] text-primary font-medium">
        Work Experience
      </h4>
      <div className="flex flex-col space-y-2 pt-2">
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            id="test"
            value="Any experience"
          />
          Any Experience
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="Intership"
          />
          Internship
        </label>
        <label>
          <input
            className="mr-2"
            type="radio"
            onChange={selectHandle}
            name="test"
            value="Work remotely"
          />
          Remotely
        </label>
      </div>
    </div>
  );
}

export default Experience;
