import hero from "./images/lorenzo apple touch.jpeg";
import arcs from "./images/jelly-two-red-lines-1.png";
import three from "./images/jelly-three-red-lines-2.png";
import { useState, useEffect } from "react";
import Moviecard from "./components/Moviecard";
import Form from "./components/Form";
import contact from "./images/matey-man-and-woman-work-in-support-service.png";
import popcorn from "./images/linus-mimietz-uWjBqbCHY7g-unsplash.jpg";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Animationcard from "./components/Animationcard";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader";
import Header from "./Header";
import Footer from "./Footer";
// import ReactGa from "react-ga";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Main = ({
  showSearchList,
  handleCloseSearchList,
  loader,
  setLoader,
  handleSearchSubmit,
  currentPage,
  homeAnimations,
  homeMovies,
  moviesFromDb,
  animationFromDb,
  createContactUsDoc,
  submitMessage,
  handleSendAnother,
  errorMessage,
  handleContactChange,
}) => {
  useEffect(() => {
    AOS.init();
  });
  const navigate = useNavigate();
  // const [cookies, removeCookie] = useCookies([]);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     if (!cookies.token) {
  //       navigate("/signin");
  //     }
  //     const { data } = await axios.post(
  //       "http://localhost:4000",
  //       {},
  //       { withCredentials: true }
  //     );
  //     const { status, user } = data;
  //     setUsername(user);
  //     return status
  //       ? toast(`Hello ${user}`, {
  //           position: "top-right",
  //         })
  //       : (removeCookie("token"), navigate("/signin"));
  //   };
  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   navigate("/signup");
  // };
  //random display state
  const [randomDisplay, setRandomDisplay] = useState({
    movieDisplay: true,
    seriesDisplay: false,
    animeDisplay: false,
    animationDisplay: false,
  });

  function handleDisplayMovies() {
    setRandomDisplay((prevState) => {
      return {
        movieDisplay: true,
        seriesDisplay: false,
        animeDisplay: false,
        animationDisplay: false,
      };
    });
  }

  function handleDisplayAnimation() {
    setRandomDisplay((prevState) => {
      return {
        movieDisplay: false,
        seriesDisplay: false,
        animeDisplay: false,
        animationDisplay: true,
      };
    });
  }

  /*function handleDisplaySeries() {
    setRandomDisplay((prevState) => {
      return {
        movieDisplay: false,
        seriesDisplay: true,
        animeDisplay: false,
        animationDisplay: false,
      };
    });
  }

  function handleDisplayAnime() {
    setRandomDisplay((prevState) => {
      return {
        movieDisplay: false,
        seriesDisplay: false,
        animeDisplay: true,
        animationDisplay: false,
      };
    });
  }*/

  return (
    <>
      <Header
        showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        loader={loader}
        setLoader={setLoader}
        currentPage={currentPage}
        moviesFromDb={moviesFromDb}
        animationFromDb={animationFromDb}
      />
      <main className="text-slate-100 pt-[80px]">
        {loader && <Loader />}
        {/* <Link to="/advertisement">
     <div className="w-[fit-content] p-2 sm:p-3 bg-red-700 rounded-md text-[1rem] font-bold fixed bottom-5 left-5 sm:bottom-10 sm:left-0 z-50 cursor-pointer">
       AD
     </div>
   </Link> */}
        <section className="w-full min-h-screen bg-[url('./images/lorenzo-bg-image.png')] bg-repeat">
          <div className="w-full min-h-screen bg-[#020d18]/95 px-4 py-[100px] md:p-[50px] block md:flex justify-between items-center">
            <div className="w-full md:w-1/2">
              <h1 className="text-[1.5rem] text-red-600 font-[700]">
                LORENZO TV
              </h1>

              <p className="text-[2.3rem] md:text-[3.5rem] font-[700]">
                Unlimited <span className="text-red-600">Movies</span>
                <br />
                TV Series, Animes & lots more.
              </p>
            </div>
            <div className="w-full mt-12 md:mt-0 md:w-[40%] relative">
              {/**vector art */}
              <img
                alt="art"
                src={arcs}
                className="w-[80px] h-[80px] md:w-[200px] md:h-[200px] absolute top-[-10px] left-[-10px] md:top-[-30px] md:left-[-30px]"
              />
              {/**vector art */}
              <img
                alt="hero"
                src={hero}
                className="w-[70%] md:w-full h-auto rounded-full"
              />
            </div>
          </div>
        </section>

        <section className="w-full px-4 bg-gradient-to-b from-[#020d18] to-[#111827] md:px-[50px] pt-[80px] pb-[120px] md:pb-[350px] relative overflow-x-hidden">
          <div className="w-full block md:flex justify-between">
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              className="w-full md:w-[fit-content] relative"
            >
              <h2 className="text-[1.75rem] md:text-[2.2rem] font-[700]">
                Trending {randomDisplay.movieDisplay && "Movies"}{" "}
                {randomDisplay.seriesDisplay && "Series"}{" "}
                {randomDisplay.animeDisplay && "Animes"}{" "}
                {randomDisplay.animationDisplay && "Animations"}
              </h2>
              <img
                alt="three-red"
                src={three}
                className="w-[40px] h-[40px] hidden lg:block absolute top-[-20px] right-[90px] md:right-[-30px]"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              className="text-right mt-8 md:mt-0"
            >
              <h3 className="text-[1.5rem] font-[600]">Categories</h3>
              <div className="w-full md:w-[fit-content] mt-4 md:mt-10 flex justify-end gap-4 md:gap-8 text-[0.75rem] md:text-[1rem]">
                <button
                  onClick={handleDisplayMovies}
                  className={`px-[10px] py-1 h-[fit-content] md:py-2 ${
                    randomDisplay.movieDisplay && "bg-red-700"
                  } rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300`}
                >
                  Movie
                </button>
                <button
                  onClick={handleDisplayAnimation}
                  className={`px-[10px] py-1 h-[fit-content] md:py-2 ${
                    randomDisplay.animationDisplay && "bg-red-700"
                  } rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300`}
                >
                  Animation
                </button>
                <button
                  className={`px-[10px] py-1 h-[fit-content] md:py-2 ${
                    randomDisplay.seriesDisplay && "bg-red-700"
                  } rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300`}
                >
                  Series
                </button>
                <button
                  className={`px-[10px] py-1 h-[fit-content] md:py-2 ${
                    randomDisplay.animeDisplay && "bg-red-700"
                  } rounded-md border-red-700 border-[2px] hover:bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300`}
                >
                  Anime
                </button>
              </div>
            </div>
          </div>
          <div className="mb-[30px]">
            {randomDisplay.movieDisplay && (
              <div>
                <div className="w-full bg-black/30 mt-10 mb-8 p-5 gap-5 rounded-lg grid grid-flow-col place-items-center scroll-auto overflow-y-auto overscroll-x-contain snap-mandatory md:snap-none snap-x no-scrollbar">
                  {homeMovies?.map((item, index) => {
                    return (
                      <Moviecard
                        key={index}
                        item={item}
                        showSearchList={showSearchList}
                        handleCloseSearchList={handleCloseSearchList}
                      />
                    );
                  })}
                </div>
                <Link to="/movies">
                  <button className="px-[40px] py-[15px] mt-2 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                    More movies
                  </button>
                </Link>
              </div>
            )}

            {randomDisplay.animationDisplay && (
              <div>
                <div className="w-full bg-black/30 mt-2 mb-8 p-5 gap-5 rounded-lg grid grid-flow-col place-items-center scroll-auto overflow-y-auto overscroll-x-contain snap-mandatory snap-x no-scrollbar">
                  {homeAnimations?.map((item, index) => {
                    return <Animationcard key={index} item={item} />;
                  })}
                </div>
                <Link to="/animation">
                  <button className="px-[40px] py-[15px] mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
                    More Animations
                  </button>
                </Link>
              </div>
            )}
          </div>
          <svg
            className="w-full absolute bottom-[1px] left-0 block z-[0]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 319"
          >
            <path
              fill="#010911"
              fillOpacity="1"
              d="M0,160L48,181.3C96,203,192,245,288,234.7C384,224,480,160,576,117.3C672,75,768,53,864,85.3C960,117,1056,203,1152,224C1248,245,1344,203,1392,181.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </section>

        <section className="w-full bg-black/30 px-4 md:px-[50px] pb-[80px] text-[2rem] translate-y-[-1px] border border-black/30 overflow-hidden">
          <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between">
            <img
              alt=""
              src={popcorn}
              className="w-[35%] h-[500px] object-cover rounded-full mx-auto hidden md:block"
              data-aos="fade-up"
              data-aos-duration="800"
            />
            <div className="w-full md:w-1/2 text-right text-[1.4rem] mt-8 md:mt-0">
              <div
                data-aos="fade-left"
                data-aos-duration="800"
                className="w-full text-right"
              >
                <h2 className=" text-[2.2rem] font-[700] mb-5">
                  Download Movies,
                  <br /> Watch Offline.
                </h2>
              </div>
              <img
                alt=""
                src={popcorn}
                className="w-full my-6 h-[500px] object-cover rounded-full mx-auto md:hidden block"
                data-aos="fade-up"
                data-aos-duration="800"
              />
              <p data-aos="fade-up" data-aos-duration="800">
                Tons of movies to choose from in all genres! Amazing
                blockbusters all here at LorenzoTV. <br /> Download and watch
                offline in...
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="800"
                className="text-[4rem] text-[#b91c1c] font-bold"
              >
                HD 4K
              </p>
              <Link to="/movies">
                <button
                  data-aos="fade-up"
                  data-aos-duration="800"
                  className="px-[40px] py-[15px] mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300"
                >
                  Explore Movies
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#020d18] bg-home text-[2rem]">
          <div className="overlay w-full h-full bg-[#020d18]/60 px-4 md:px-[50px] py-[80px] block md:flex justify-between items-center text-[1rem]">
            <div className="w-full md:w-[40%] text-center">
              <h2 className="text-[2.5rem] font-bold">Get in Touch</h2>
              <p className="text-[1.4rem]">
                Contact us and we will get back to you soon
              </p>
              <div className="relative">
                <img
                  alt="three-red"
                  src={three}
                  className="w-8 h-auto md:w-[60px] md:h-[60px] absolute top-[20px] right-[30px]"
                />
                <img alt="" src={contact} className="w-[80%] mx-auto" />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Form
                createContactUsDoc={createContactUsDoc}
                submitMessage={submitMessage}
                handleSendAnother={handleSendAnother}
                errorMessage={errorMessage}
                handleContactChange={handleContactChange}
              />
            </div>
          </div>
        </section>
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
};

export default Main;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{html,js}", "./public/index.html"],
//   theme: {
//     extend: {
//       fontFamily: {
//         mont: "'Montserrat', sans-serif",
//       },
//       backgroundImage: {
//         home: "url('./images/bg-intro-desktop.png')",
//       },
//     },
//   },
//   plugins: [],
// };
