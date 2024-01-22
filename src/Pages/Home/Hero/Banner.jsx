import React from "react";

function Banner({query, handleChange}) {
  return (
    <div className="w-full h-[60vh] flex items-center">
      <div>
        <h2 className="text-[42px] font-bold text-primary pb-2">
          Find your <span className="text-blue">new job</span> today
        </h2>
        <p className="text-[15px] font-medium text-light">
          Thousand of jobs in the computer, engineering and technology sectors
          are waiting for you
        </p>
        <div className="pt-10">
          <form action="">
            <input
              type="text"
              placeholder="What position are looking for ?"
              onChange={handleChange}
              value={query}
              className="py-[6px] px-3 outline-0 border border-gray-700 lg:w-[75%] w-[60%] rounded-s-full"
            />
            <input
              type="submit"
              value="Submit"
              className="px-3 py-[6px] outline-0 border border-gray-700 bg-gray-700 text-white rounded-e-full cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Banner;
