// import moviedata from "../data/movieData.json";
import { useState } from "react";
import Moviecard from "../components/Moviecard";
import ScrollToTop from "../ScrollToTop";
//import Search from "../components/Search";
import MovieSearch from "../components/MovieSearch";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../components/Loader";

const Movies = ({
  loader,
  setLoader,
  currentPage,
  moviesFromDb,
  animationFromDb,
  firstTwenty,
  nextThirty,
  nextForty,
  nextFifty,
  nextSixty,
  display30,
  display40,
  display50,
  display60,
  show30,
  show40,
  show50,
  show60,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  // const [searching, setSearching] = useState(false);

  async function handleSearchSubmit(event) {
    event.preventDefault();
    try {
      setLoader(true); // show the loader
      let searchData = [...moviesFromDb];
      const filt = searchData.filter((item) => {
        return item.title.toLowerCase().includes(searchField.toLowerCase());
      });
      setFilteredItems([...filt]);
      setShowSearch(true);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoader(false); // hide the loader
    }
  }

  function handleCloseSearchList() {
    setShowSearch(false);
    setSearchField("");
  }

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const filtered = filteredItems.map((item, index) => {
    return (
      <Moviecard
        key={index}
        item={item}
        handleCloseSearchList={handleCloseSearchList}
      />
    );
  });

  // console.log(filteredItems);

  return (
    <>
      <Header
        // showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        loader={loader}
        setLoader={setLoader}
        currentPage={currentPage}
        moviesFromDb={moviesFromDb}
        animationFromDb={animationFromDb}
      />
      {loader && <Loader />}
      <section className="bg-[#020d18] text-slate-100 pt-[130px] px-4 md:px-[50px]">
        <h1 className="w-[fit-content] sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          Movies
        </h1>
        <div className="w-full md:w-[60%] mt-4">
          <MovieSearch
            // showSearchList={showSearchList}
            handleSearchSubmit={handleSearchSubmit}
            handleChange={handleChange}
            searchField={searchField}
          />
        </div>
      </section>
      {showSearch && (
        <div className="min-h-[300px] bg-black/20 text-slate-100 my-8 px-4 py-[60px] md:p-[30px] relative">
          <h1 className="w-[fit-content] sm:w-full text-[1.1rem] md:text-[1.75rem] font-medium mx-auto">
            The keyword "{searchField}" yielded{" "}
            {filtered ? filtered.length : "No"} search Result
            {filtered.length < 2 ? "" : "s"}:
          </h1>
          <button
            onClick={handleCloseSearchList}
            className={`px-[10px] lg:px-[20px] py-1 h-[fit-content] md:py-2 rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 absolute top-4 md:top-8 right-[20px] lg:right-[50px]`}
          >
            Close
          </button>
          <section className="w-full py-[50px] grid justify-center sm:justify-start place-items-center sm:place-items-start grid-lg gap-6 lg:gap-8">
            {filtered}
          </section>
          <ScrollToTop />
        </div>
      )}
      {/* page content */} {/* page content */} {/* page content */}
      {/* page content */} {/* page content */} {/* page content */}
      {!showSearch && (
        <div className="text-slate-100 px-4 md:px-[50px]">
          <section className="w-full py-[50px] grid justify-center place-items-center grid-lg gap-6 lg:gap-8">
            {firstTwenty?.map((item, index) => {
              return <Moviecard key={index} item={item} />;
            })}
            {display30 &&
              nextThirty?.map((item, index) => {
                return <Moviecard key={index} item={item} />;
              })}
            {display40 &&
              nextForty?.map((item, index) => {
                return <Moviecard key={index} item={item} />;
              })}
            {display50 &&
              nextFifty?.map((item, index) => {
                return <Moviecard key={index} item={item} />;
              })}
            {display60 &&
              nextSixty?.map((item, index) => {
                return <Moviecard key={index} item={item} />;
              })}
          </section>
          <div className="w-full my-12 flex justify-center items-center">
            {!display30 && (
              <button
                onClick={show30}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {display30 && !display40 && (
              <button
                onClick={show40}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {display40 && !display50 && (
              <button
                onClick={show50}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {display50 && !display60 && (
              <button
                onClick={show60}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {display50 && display60 && (
              <div className="w-full flex flex-col items-center gap-12">
                <p className="text-[1.2rem]">
                  There's more, goto search through our database.
                </p>
                <button
                  onClick={() => window.scrollTo(0, 0)}
                  className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
                >
                  Goto search
                </button>
              </div>
            )}
          </div>
          <ScrollToTop />
        </div>
      )}
      <Footer />
    </>
  );
};

export default Movies;
