import Animationcard from "./Animationcard";
import Moviecard from "./Moviecard";

const SearchList = ({
  filteredItems,
  handleCloseSearchList,
  searchField,
  setLoader,
  closeSearch,
}) => {
  const filtered = filteredItems.map((item, index) => {
    return item.category.replace(/ /g, "") === "movie" ? (
      <Moviecard
        key={index}
        item={item}
        handleCloseSearchList={handleCloseSearchList}
      />
    ) : item.category.replace(/ /g, "") === "animation" ? (
      <Animationcard
        key={index}
        item={item}
        handleCloseSearchList={handleCloseSearchList}
      />
    ) : null;
  });

  console.log(filteredItems);
  return (
    <div className="w-[100vw] min-h-[100vh] pt-[25px] pb-[100px] px-4 md:px-10 bg-[#020d18] fixed left-0 top-[85px] lg:top-[80px] z-10 overflow-y-scroll overflow-x-hidden no-scrollbar">
      <div className="">
        <h2 className="w-[fit-content] text-[1.1rem] text-slate-100 mx-auto md:text-[1.5rem] mt-4 lg:mt-0">
          The keyword "{searchField}" yielded{" "}
          {filtered ? filtered.length : "No"} search Result
          {filtered.length < 2 ? "" : "s"}:
        </h2>
        <div className="w-full bg-black/30 mt-5 mb-8 p-5 gap-5 rounded-lg grid grid-flow-col place-items-center justify-start scroll-auto overflow-y-auto overscroll-x-contain snap-mandatory md:snap-none snap-x no-scrollbar">
          <button
            onClick={closeSearch}
            className={`px-[10px] lg:px-[20px] py-1 h-[fit-content] md:py-2 rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 absolute top-0 lg:top-[20px] right-[20px] lg:right-[50px]`}
          >
            Back
          </button>
          {filtered}
        </div>
      </div>
    </div>
  );
};

export default SearchList;
