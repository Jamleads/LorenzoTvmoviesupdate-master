// import React, { useState } from "react";
// import Loader from "./Loader";
//import search from "../images/icons8-search-50.png";
// import SearchList from "./SearchList";

const MovieSearch = ({
  showSearchList,
  handleSearchSubmit,
  handleChange,
  searchField,
}) => {
  //   function searchList() {
  //     return;
  //   }

  return (
    <div>
      {/* {loader && <Loader />} */}

      <div
        className={`w-full bg-black/50 px-[15px] py-[10px] ${
          showSearchList ? "border-red-700/40" : "border-red-700"
        } border-[2px] rounded-lg relative`}
      >
        <form
          onSubmit={handleSearchSubmit}
          className="flex gap-[20px] items-center"
        >
          <input
            type="text"
            className="w-[85%] lg:w-[85%] bg-inherit text-[0.75rem] text-slate-100 px-1 outline-none"
            placeholder="Search for movie"
            onChange={handleChange}
            value={searchField}
          />
          <button
            onClick={handleSearchSubmit}
            className="py-1 px-3 md:px-3 bg-red-700 rounded-md text-[0.7rem] absolute right-3"
          >
            Search
          </button>
          {/* <button onClick={handleSearchSubmit} className="w-[fit-content]">
            <img alt="search-icon" src={search} className="w-[22px] h-[22px]" />
          </button> */}
        </form>
        {/* {showSearchList && (
          <div className="w-full h-full bg-[#020d18]/90 absolute top-0 left-0 rounded-lg"></div>
        )} */}
      </div>
      {/* {showSearchList && (
        <SearchList
          filteredItems={filteredItems}
          handleCloseSearchList={handleCloseSearchList}
          searchField={searchField}
        />
      )} */}
    </div>
  );
};

export default MovieSearch;
