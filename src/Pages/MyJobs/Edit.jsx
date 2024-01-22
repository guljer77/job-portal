import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Container from "../../Components/Container";
import CreatableSelect from "react-select/creatable";
import { updateJobs } from "../../Api/jobs";

function Edit() {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    skills,
  } = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    data.skills = selectedOption;
    data.author = user?.email;
    updateJobs(data, id)
    navigate("/myJob");
  };
  const options = [
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "Tailwind CSS", label: "Tailwind CSS" },
    { value: "Bootstrap CSS", label: "Bootstrap CSS" },
    { value: "JavaScript", label: "JavaScript" },
    { value: "ES6", label: "ES6" },
    { value: "React.Js", label: "React.Js" },
    { value: "Next.JS", label: "Next.JS" },
    { value: "Firebase", label: "Firebase" },
    { value: "Redux", label: "Redux" },
    { value: "Axios", label: "Axios" },
    { value: "Node.Js", label: "Node.Js" },
    { value: "Express.Js", label: "Express.Js" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "JWT", label: "JWT" },
  ];

  return (
    <div className="py-10">
      <Container>
        <div className="bg-gray-200 p-10 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="lg:flex items-center justify-between gap-5 mb-3">
              <div className="lg:w-1/2 lg:mb-0 mb-3">
                <label className="text-lg block mb-2">Job Title</label>
                <input
                  type="text"
                  defaultValue={jobTitle}
                  {...register("jobTitle")}
                  className="w-full py-[5px] rounded outline-0 px-3"
                />
              </div>
              <div className="lg:w-1/2">
                <label className="text-lg block mb-2">CompanyName</label>
                <input
                  type="text"
                  defaultValue={companyName}
                  {...register("companyName")}
                  className="w-full py-[5px] rounded outline-0 px-3"
                />
              </div>
            </div>
            <div className="lg:flex items-center justify-between gap-5 mb-3">
              <div className="lg:w-1/2 lg:mb-0 mb-3">
                <label className="text-lg block mb-2">Minimum Salary</label>
                <input
                  type="text"
                  defaultValue={minPrice}
                  {...register("minPrice")}
                  className="w-full py-[5px] rounded outline-0 px-3"
                />
              </div>
              <div className="lg:w-1/2">
                <label className="text-lg block mb-2">CompanyName</label>
                <input
                  type="text"
                  defaultValue={maxPrice}
                  {...register("maxPrice")}
                  className="w-full py-[5px] rounded outline-0 px-3"
                />
              </div>
            </div>
            <div className="lg:flex items-center justify-between gap-5 mb-3">
              <div className="lg:w-1/2 lg:mb-0 mb-3">
                <label className="text-lg block mb-2">Salary Type</label>
                <select
                  {...register("salaryType")}
                  className="w-full py-[7px] rounded outline-0 px-3"
                >
                  <option value={salaryType}>{salaryType}</option>
                  <option value="hourly">Hourly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
              </div>
              <div className="lg:w-1/2">
                <label className="text-lg block mb-2">Job Location</label>
                <input
                  type="text"
                  defaultValue={jobLocation}
                  {...register("jobLocation")}
                  className="w-full py-[5px] rounded outline-0 px-3"
                />
              </div>
            </div>
            <div className="lg:flex items-center justify-between gap-5 mb-3">
              <div className="lg:w-1/2">
                <label className="text-lg block mb-2">Job Posting Date</label>
                <input
                  type="date"
                  defaultValue={postingDate}
                  {...register("postingDate")}
                  className="w-full py-[5px] rounded outline-0 px-3"
                />
              </div>
              <div className="lg:w-1/2 lg:mb-0 mb-3">
                <label className="text-lg block mb-2">Experience Level</label>
                <select
                  {...register("experienceLevel")}
                  className="w-full py-[7px] rounded outline-0 px-3"
                >
                  <option value={experienceLevel}>{experienceLevel}</option>
                  <option value="any">Any Experience</option>
                  <option value="internship">InternShip</option>
                  <option value="remotely">Remotely</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="text-lg block mb-2">Required Skill</label>
              <CreatableSelect
                defaultValue={skills}
                onChange={setSelectedOption}
                options={options}
                isMulti
                className="outline-0"
              />
            </div>
            <div className="lg:flex items-center justify-between gap-5 mb-3">
              <div className="lg:w-1/2 lg:mb-0 mb-3">
                <label className="text-lg block mb-2">Company Logo</label>
                <input
                  type="text"
                  defaultValue={companyLogo}
                  {...register("companyLogo")}
                  className="w-full py-[5px] rounded outline-0 px-3 border border-gray-100 bg-white"
                />
              </div>
              <div className="lg:w-1/2">
                <label className="text-lg block mb-2">Employment Type</label>
                <select
                  {...register("employmentType")}
                  className="w-full py-[7px] rounded outline-0 px-3"
                >
                  <option value={employmentType}>{employmentType}</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label className="text-lg block mb-2">Job Description</label>
              <textarea
                {...register("description")}
                defaultValue={description}
                id=""
                cols="30"
                rows="10"
                className="w-full py-[5px] rounded outline-0 px-3 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-7 py-2 bg-blue text-white rounded"
            >
              Add Job
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Edit;
