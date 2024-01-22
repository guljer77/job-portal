import React from "react";
import Image from "../../assets/error.svg";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center bg-gray-100 w-full h-screen">
      <div className="lg:w-[70%] w-[80%] lg:h-[90vh] h-auto bg-white p-10 shadow-lg rounded-md">
        <img src={Image} alt="" className="w-full h-[75%]" />
        <div>
          <h4 className="text-[22px] font-medium text-primary">Sorry we could not find this page.</h4>
          <h6 className="text-[15px] font-light text-primary py-3">But don't worry, you can find plenty of other things on our homepage.</h6>
          <Link to="/" className="px-5 py-[6px] rounded-md bg-blue text-white inline-block">Back to HomePage</Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
