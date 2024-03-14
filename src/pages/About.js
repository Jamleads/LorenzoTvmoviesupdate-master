import ScrollToTop from "../ScrollToTop";
import ren1 from "../images/ren1.jpeg";
import ren2 from "../images/ren2.jpeg";
import ren3 from "../images/ren3.jpeg";
import popcorn from "../images/linus-mimietz-uWjBqbCHY7g-unsplash.jpg";
import twitter from "../images/icons8-twitter-squared-48.png";
import whatsapp from "../images/icons8-whatsapp-48.png";
import facebook from "../images/icons8-facebook-48.png";
import instagram from "../images/icons8-instagram-48.png";
import youtube from "../images/icons8-youtube-logo-48.png";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
// import ReactGa from "react-ga";
// import { useEffect } from "react";

const About = ({
  currentPage,
  animationFromDb,
  moviesFromDb,
  showSearchList,
  handleCloseSearchList,
  handleSearchSubmit,
}) => {
  // useEffect(() => {
  //   //to track page vie
  //   ReactGa.pageview(window.location.pathname + window.location.search);
  // }, [currentPage]);
  return (
    <>
      <Header
        showSearchList={showSearchList}
        handleSearchSubmit={handleSearchSubmit}
        handleCloseSearchList={handleCloseSearchList}
        currentPage={currentPage}
        moviesFromDb={moviesFromDb}
        animationFromDb={animationFromDb}
      />
      <div className="bg-[#020d18] text-slate-100 py-8 px-4 md:px-[50px] pt-[130px]">
        <h1 className="w-[fit-content] mb-4 sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          About Us
        </h1>
        <div className="w-full lg:w-[70%]">
          <p>
            Lorenzo TV is a Media and Entertainment Company, We provide our
            viewers and subscribers with the following services
          </p>
          <img
            alt=""
            src={ren1}
            className="w-[250px] lg:w-[350px] h-auto my-8 rounded-3xl mx-auto sm:mx-0"
          />
          <div>
            1) Business/Brand promotion We help businesses and brands like yours
            generate more profits by building awareness, driving web traffic,
            connecting with customers, and growing overall sales.{" "}
            <Link to="/contact" className="text-red-500 underline">
              Send us a message
            </Link>
            .
            <br />
            <br />
            *We provide the largest engagement on your campaigns and
            advertisements with ourprofessional campaign and advert strategy *We
            are your best bet to scale up your business/brand/events using
            internet Marketing
            <br />
            <br />
            <br />
            2)MOVIE BLOCKBUSTERS
            <br />
            <img
              alt=""
              src={popcorn}
              className="w-[250px] lg:w-[350px] h-[300px] my-8 rounded-3xl mx-auto sm:mx-0 object-cover object-center"
            />
            <br />
            We provide you with Unlimited and Recent Movie updates of your
            choice fully ready for Download, which includes. <br />
            <br />
            *MOVIES
            <br /> *CARTOON
            <br /> *SERIES
            <br />
            *ANIME <br />
            <br />
            <br />
            3)WEB APPLICATION DESIGN/MAINTENANCE
            <br />
            <img
              alt=""
              src={ren2}
              className="w-[250px] lg:w-[350px] h-auto my-8 rounded-3xl mx-auto sm:mx-0"
            />
            <br />
            Are you just starting a Business or company? and you need a
            professional website to promote your business and give it the
            recognition it needs? search no more we've got you covered with our
            professional team working tiredlessly to get the job done we are
            your best bet!!
            <br />
            <br />
            *Professional website development
            <br />
            *Website maintenace
            <br />
            *SEO (Serch Engine Optimization)
            <br />
            *CODING TUTORIALS
            <br />
            <br />
            <br />
            4)CONDUCIVE WORKSPACE
            <br />
            <img
              alt=""
              src={ren3}
              className="w-[250px] lg:w-[350px] h-auto my-8 rounded-3xl mx-auto sm:mx-0"
            />
            <br />
            Take your productivity to another level. We offer the best and
            unique WORKSPACE
            <br />
            <br />
            *Stable Power Supply
            <br />
            *Front Desk Services
            <br />
            *Credible & Accessible location
            <br />
            *Super fast WiFi
            <br />
            <br />
            Contact us now for more enquiry
            <br />
            <br />
            <div className="text-start md:text-center mb-10 md:mb-0">
              <div className="flex gap-3">
                <a href="https://twitter.com/only_lorenzotv?t=EA5tDqgTaohSzHsJa0_2qQ&s=09">
                  <img
                    alt=""
                    src={twitter}
                    className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
                  />
                </a>
                <a href="https://wa.me/message/2MVJUHWZBG6DM1">
                  <img
                    alt=""
                    src={whatsapp}
                    className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
                  />
                </a>
                <a href="https://instagram.com/lorenzo_tv1?igshid=YmMyMTA2M2Y=">
                  <img
                    alt=""
                    src={instagram}
                    className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
                  />
                </a>
                <a href="https://www.facebook.com/lorenzarts12">
                  <img
                    alt=""
                    src={facebook}
                    className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
                  />
                </a>
                <a href="https://youtu.be/mU6anWqZJcc">
                  <img
                    alt=""
                    src={youtube}
                    className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default About;
