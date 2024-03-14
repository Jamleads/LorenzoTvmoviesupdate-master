import ScrollToTop from "../ScrollToTop";
import coming from "../images/coming-soon.png";
import Header from "../Header";
import Footer from "../Footer";

const Series = ({
  animationFromDb,
  moviesFromDb,
  showSearchList,
  handleCloseSearchList,
  handleSearchSubmit,
}) => {
  return (
    <>
      <Header
        showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        moviesFromDb={moviesFromDb}
        animationFromDb={animationFromDb}
      />
      <div className="bg-[#020d18] min-h-[70vh] text-slate-100 px-4 py-14 md:px-[50px] pt-[130px]">
        <h1 className="text-[2rem] font-bold text-center mb-8">TV Shows</h1>
        <img alt="" src={coming} className="w-[260px] h-auto mx-auto" />
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Series;
