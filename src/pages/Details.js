import ScrollToTop from "../ScrollToTop";
import { useParams } from "react-router-dom";
// import moviedata from "../data/movieData.json";
import cinema from "../images/icons8-cinema-50.png";
import file from "../images/icons8-file-64.png";
import Header from "../Header";
import Footer from "../Footer";
import { useAppContext } from "../contexts/AppContext";

const Details = ({
  animationFromDb,
  moviesFromDb,
  showSearchList,
  handleCloseSearchList,
  handleSearchSubmit,
}) => {
  const { title } = useParams();
  const movie = moviesFromDb?.filter((movie) => movie.title === title)[0];

  const { movieImagesFromDb } = useAppContext();

  const filteredUrls = movieImagesFromDb.filter((item) => {
    return item.includes(
      movie?.title
        .replace(/ /g, "-")
        .replace(/\[/g, "%5B")
        .replace(/\]/g, "%5D")
        .replace(/:/g, "%3A")
    );
  });

  return (
    <>
      <Header
        showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        moviesFromDb={moviesFromDb}
        animationFromDb={animationFromDb}
      />
      <div className="bg-gradient-to-b from-[#020d18] to-[#111827] md:bg-[#020d18] text-slate-100 px-4 md:px-[50px] pt-[130px] pb-4 ">
        <h1 className="w-[fit-content] sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          {movie?.title}
        </h1>
        <div className="w-full bg-black/30 mt-10 mb-8 p-5 block sm:flex gap-5 rounded-lg">
          <img
            alt=""
            src={movie.image_link ? movie?.image_link : filteredUrls[0]}
            className="w-[220px] h-auto rounded-md mx-auto sm:mx-0 mb-8 sm:mb-0"
          />
          <div className="text-start">
            <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
              <span className="text-red-600 font-[700]">TITLE:</span>{" "}
              {movie?.title}
            </h2>
            <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
              <span className="text-red-600 font-[700]">CATEGORY:</span>{" "}
              {movie?.category}
            </h2>
            <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
              <span className="text-red-600 font-[700]">GENRE:</span>{" "}
              {movie?.genre}
            </h2>
            <h2 className="w-full sm:w-full text-[1rem] md:text-[1.25rem] mx-auto mb-3">
              <span className="text-red-600 font-[700]">STORY LINE:</span>{" "}
              {movie?.storyline}
            </h2>
            <div className="w-full text-center block sm:flex gap-8">
              <a href={`${movie?.download_link}`}>
                <button className="px-[40px] py-[15px] font-bold mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 flex items-center gap-2">
                  <p>Download {movie?.category}</p>{" "}
                  <img alt="" src={cinema} className="w-5 h-5" />
                </button>
              </a>
              <a href={`${movie?.subtitle_link}`}>
                <button className="px-[40px] py-[15px] font-bold mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300 flex items-center gap-2">
                  <p>Download Subtitle</p>{" "}
                  <img alt="" src={file} className="w-5 h-5" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-gradient-to-b from-[#020d18] to-[#111827] p-4">
          <h2 className="text-[1.75rem] font-bold mb-4">Movie Trailer</h2>
          {movie?.trailer_link && (
            <div className="min-w-[280px] max-w-[400px] h-[220px] sm:min-w-[350px] sm:max-w-[400px] sm:h-[240px] lg:min-w-[460px] lg:max-w-[480px] lg:h-[300px] bg-slate-300 rounded-xl mb-5 sm:mb-[50px]">
              <iframe
                width="100%"
                height="100%"
                className="rounded-xl"
                src={movie?.trailer_link}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {!movie?.trailer_link && (
            <div className="min-w-[280px] max-w-[400px] h-[220px] sm:min-w-[350px] sm:max-w-[400px] sm:h-[240px] lg:min-w-[460px] lg:max-w-[480px] lg:h-[300px] bg-slate-600 rounded-xl mb-5 sm:mb-[50px] flex justify-center items-center text-slate-800 font-bold text-[1.3rem]">
              <p>Not available</p>
            </div>
          )}
        </div>
        {/* //streaming links */}
        
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Details;
