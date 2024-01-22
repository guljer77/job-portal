import React, { useContext, useEffect, useState } from "react";
import Container from "../../Components/Container";
import { Link } from "react-router-dom";
import { GoPencil } from "react-icons/go";
import { FaTrash } from "react-icons/fa";
import { deleteJobs } from "../../Api/jobs";
import { AuthContext } from "../../Provider/AuthProvider";

function MyJobs() {
  const { user, loading, setLoading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 4;

  useEffect(() => {
    fetch(`https://job-portal-server-ifva1t51z-guljer77.vercel.app/all-jobs`)
      .then(res => res.json())
      .then(data => {
        const finalData = data.filter(item => item?.author === user?.email);
        setJobs(finalData);
      });
  }, [jobs, user?.email]);

  //search
  const handleSearch = event => {
    const searchTerms = event.target.value;
    setSearchInput(searchTerms);
    const finalInput = jobs.filter(item =>
      item?.jobTitle.toLowerCase().indexOf((searchTerms.toLowerCase())) !== -1
    );
    setJobs(finalInput);
    console.log(finalInput);
  };
  //pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentJobs = jobs.slice(indexOfFirstItem, indexOfLastItem);
  //next-page
  const nextPage = () => {
    if (indexOfLastItem < jobs.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  //previous Page
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const deleteJob = id => {
    deleteJobs(id);
    const remaiNingJobs = jobs?.filter(item => item?._id !== id);
    setJobs(remaiNingJobs);
  };

  return (
    <div className="py-10">
      <Container>
        <div className="p-10 bg-gray-200 rounded">
          <h4 className="text-center pb-5">All My Jobs</h4>
          <div className="text-center pb-10">
            <form action="">
              <input
                type="text"
                placeholder="Search Every Where"
                defaultValue={searchInput}
                onChange={handleSearch}
                className="px-3 py-2 rounded-s-full outline-0 border border-primary w-[50%]"
              />
              <input
                type="submit"
                value="Search"
                className="px-5 py-2 bg-blue border border-blue text-white rounded-e-full"
              />
            </form>
          </div>
          <div>
            <div className="flex items-center justify-between py-3">
              <h4>All Jobs</h4>
              <Link
                to="/postedJob"
                className="text-[15px] text-white bg-blue px-5 py-2 rounded"
              >
                Post A Job
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th>Title</th>
                    <th>Company Name</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {currentJobs?.map((job, index) => (
                    <tr key={index} className="hover py-2">
                      <td>{index + 1}</td>
                      <td>{job?.jobTitle}</td>
                      <td>{job?.companyName}</td>
                      <td>
                        $ {job?.minPrice} - {job?.maxPrice}
                      </td>
                      <td className="flex items-center space-x-5">
                        <Link
                          to={`/edit/${job?._id}`}
                          className="border border-gray-700 p-2 cursor-pointer"
                        >
                          <GoPencil size={24} />
                        </Link>
                        <span
                          onClick={() => deleteJob(job?._id)}
                          className="border border-gray-700 p-2 cursor-pointer"
                        >
                          <FaTrash size={24} />
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="text-primary mt-5">
            {/* pagination */}
            {currentPage > 1 && (
              <button className="text-[16px] font-medium hover:text-blue hover:underline" type="submit" onClick={previousPage}>Previous Page</button>
            )}
            {indexOfLastItem < jobs.length && (
              <button className="text-[16px] font-medium hover:text-blue hover:underline" type="submit" onClick={nextPage}>Next Page</button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MyJobs;
