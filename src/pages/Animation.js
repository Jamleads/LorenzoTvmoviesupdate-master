import ScrollToTop from "../ScrollToTop";
import Animationcard from "../components/Animationcard";
import AnimationSearch from "../components/AnimationSearch";
import Header from "../Header";
import Footer from "../Footer";
import Loader from "../components/Loader";
import { useState } from "react";
// import ReactGa from "react-ga";
// import { useEffect } from "react";

const Animation = ({
  currentPage,
  showSearchList,
  loader,
  setLoader,
  animationFromDb,
  moviesFromDb,
  firstTwentyA,
  nextThirtyA,
  nextFortyA,
  nextFiftyA,
  nextSixtyA,
  displayA30,
  displayA40,
  displayA50,
  displayA60,
  showA30,
  showA40,
  showA50,
  showA60,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  // const [searching, setSearching] = useState(false);

  async function handleSearchSubmit(event) {
    event.preventDefault();
    try {
      setLoader(true); // show the loader
      let searchData = [...animationFromDb];
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
      <Animationcard
        key={index}
        item={item}
        handleCloseSearchList={handleCloseSearchList}
      />
    );
  });

  return (
    <>
      <Header
        currentPage={currentPage}
        showSearch={showSearch}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        loader={loader}
        setLoader={setLoader}
        moviesFromDb={moviesFromDb}
        animationFromDb={animationFromDb}
      />
      {loader && <Loader />}

      <section className="bg-[#020d18] text-slate-100 pt-[130px] px-4 md:px-[50px]">
        <h1 className="w-[fit-content] sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          Animations
        </h1>
        <div className="w-full md:w-[60%] mt-4">
          <AnimationSearch
            // showSearch={showSearch}
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

      {!showSearch && (
        <div className="bg-[#020d18] text-slate-100 pt-[30px] px-4 md:px-[50px]">
          <section className="w-full py-[50px] grid justify-center place-items-center grid-lg gap-6 lg:gap-8">
            {firstTwentyA?.map((item, index) => {
              return <Animationcard key={index} item={item} />;
            })}
            {displayA30 &&
              nextThirtyA?.map((item, index) => {
                return <Animationcard key={index} item={item} />;
              })}
            {displayA40 &&
              nextFortyA?.map((item, index) => {
                return <Animationcard key={index} item={item} />;
              })}
            {displayA50 &&
              nextFiftyA?.map((item, index) => {
                return <Animationcard key={index} item={item} />;
              })}
            {displayA60 &&
              nextSixtyA?.map((item, index) => {
                return <Animationcard key={index} item={item} />;
              })}
          </section>
          <div className="w-full my-12 flex justify-center items-center">
            {!displayA30 && (
              <button
                onClick={showA30}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {displayA30 && !displayA40 && (
              <button
                onClick={showA40}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {displayA40 && !displayA50 && (
              <button
                onClick={showA50}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {displayA50 && !displayA60 && (
              <button
                onClick={showA60}
                className="w-full sm:w-2/5 px-[40px] py-[15px] mt-4 mx-auto rounded-md bg-[#b91c1c] hover:bg-[#b91c1c]/70 hover:translate-y-[6px] transition-all duration-300"
              >
                View more movies
              </button>
            )}
            {displayA50 && displayA60 && (
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

export default Animation;
