import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign, FaCalendarAlt } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

function Card({ data }) {
  const {
    companyName,
    jobTitle,
    companyLogo,
    minPrice,
    maxPrice,
    jobLocation,
    postingDate,
    employmentType,
    description,
    id,
  } = data;
  return (
    <div>
      <div className="p-5 border border-gray-500 rounded mb-5">
        <Link to="/" className="flex items-start flex-col sm:flex-row gap-4">
          <img src={companyLogo} alt="" />
          <div>
            <h4 className="text-[16px] font-medium text-primary">
              {companyName}
            </h4>
            <h3 className="text-[22px] font-semibold text-primary">
              {jobTitle}
            </h3>
            <div className="flex flex-wrap mb-2 gap-3 text-base">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {jobLocation}
              </span>
              <span className="flex items-center gap-1">
                <CiClock2 /> {employmentType}
              </span>
              <span className="flex items-center gap-1">
                <FaDollarSign /> {minPrice} - {maxPrice}
              </span>
              <span className="flex items-center gap-1">
                <FaCalendarAlt /> {postingDate}
              </span>
            </div>
            <p className="text-[15px] font-light">{description}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
