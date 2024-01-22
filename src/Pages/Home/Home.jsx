import React, { useEffect, useState } from "react";
import Container from "../../Components/Container";
import Banner from "./Hero/Banner";
import Card from "../../Components/Card";
import Jobs from "./Jobs/Jobs";
import Sidebar from "../../Components/Shared/Sidebar/Sidebar";
import NewsLetter from "../../Components/NewsLatter/NewsLetter";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json")
      .then(res => res.json())
      .then(data => setJobs(data));
    setIsLoading(false);
  }, []);
  //searchItem
  const [query, setQuery] = useState("");
  const handleChange = event => {
    const searchInput = event.target.value;
    setQuery(searchInput);
  };
  const searchItem = jobs.filter(
    job => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // selectedItem
  const selectHandle = event => {
    setCategory(event.target.value);
  };
  // selectedItemClick
  const selectHandleClick = event => {
    setCategory(event.target.value);
  };

  //calculate page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return{ startIndex, endIndex };
  };
  //next page
  const nextPage = () => {
    if (currentPage < Math.ceil(jobs.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };
  //previousPage
  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //mainFunction
  const filterData = (jobs, selected, query) => {
    let mainData = jobs;
    if (query) {
      mainData = searchItem;
    }
    if (selected) {
      mainData = mainData.filter(
        ({
          jobLocation,
          maxPrice,
          salaryType,
          experienceLevel,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
    }
    const { startIndex, endIndex } = calculatePageRange;
    mainData = mainData.slice(startIndex, endIndex);
    return mainData.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filterData(jobs, category, query);

  return (
    <div className="">
      <Container>
        <Banner handleChange={handleChange} query={query} />
      </Container>
      <div className="bg-gray-200 py-10">
        <Container>
          <div className="lg:grid grid-cols-4 gap-5 rounded">
            <div className="col-span-1 bg-white rounded p-5">
              <Sidebar
                selectHandle={selectHandle}
                selectHandleClick={selectHandleClick}
              />
            </div>
            <div className="col-span-2 bg-white rounded p-5">
              {isLoading ? (
                <p></p>
              ) : result.length > 0 ? (
                <>
                  {/* <h3 className="text-[18px] font-medium text-primary pb-5">
                    {result.length} Jobs
                  </h3> */}
                  <Jobs result={result} />
                </>
              ) : (
                <>
                  <h3 className="text-[18px] font-medium text-primary">
                    {result.length} Jobs
                  </h3>
                  <p>No Data Found</p>
                </>
              )}
              {result.length > 0 ? (
                <>
                  <div>
                    <button onClick={previousPage}>Previous</button>
                    <span>Page {currentPage} of {Math.ceil(searchItem.length / itemPerPage)}</span>
                    <button onClick={nextPage}>Next</button>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
            <div className="col-span-1 bg-white rounded p-5">
              <NewsLetter />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Home;
