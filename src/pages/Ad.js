import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import logo from "../images/logo-lorenzo.jpg";
import Header from "../Header";
import Footer from "../Footer";
// import { useEffect } from "react";
// import ReactGa from "react-ga";

const Ad = ({
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
      <div className="w-full lg:w-[80%] bg-[#020d18] text-slate-100 pt-[130px] pb-12 px-4 md:px-[50px]">
        <h1 className="w-[fit-content] mb-4 sm:w-full text-[1.75rem] md:text-[2.2rem] font-[700] mx-auto">
          ADVERTISE WITH US
        </h1>
        <img
          alt=""
          src={logo}
          className="w-[250px] h-auto my-8 rounded-3xl mx-auto sm:mx-0"
        />
        <div>
          LorenzoTv.com generates over 1million page views daily from over
          500,000 unique visitors from all around the world. LorenzoTV is
          targeted at entertainment, mainly BLOCKBUSTER MOVIES, ANIMATION,
          SERIES, ANIME and so much more.
          <br />
          <br />
          We provide the largest Engagement on your Campaigns and Advertisements
          with our professional Campaign, Professionalism in Digital Marketing
          and Advert Strategy.
          <br />
          <br />
          We are your best bet to scale up your business/brand/events/music
          using internet Marketing.
          <br />
          <br />
          LorenzoTv has over 5,500 users and subscribers who receive
          notifications of new published articles on our website
          <br />
          <br />
          <strong>Supported Banners</strong>
          <br />
          <br />
          We support the following banners.
          <br />
          Animations without flash.
          <br />
          <br />
          <ul>
            <li>
              - 728 x 90 (with 320x100 for mobile) Visible on all pages of the
              website just below the header before the content.
            </li>
            <li>
              - 300 x 250 / 335 x 280 (rectangles) Visible on all pages of the
              website on the sidebar for desktop/tablet visitors and below the
              content of the page for mobile visitors.
            </li>
            <li>
              - 320 x 100 Visible on all pages, on the sidebar for
              desktop/tablet visitors and below the content of the page for
              mobile visitors. Appears before the rectangles
            </li>
          </ul>
          <br />
          <br />
          Other advertisements opportunities
          <br />
          <br />
          <ul>
            <li>- Sponsored Articles</li>
          </ul>
          <br />
          LorenzoTv also supports publishing articles to reach our esteemed
          readers. These articles are shared to all our followers across our
          social media platforms and to our newsletter as well as notifications
          to subscribers.
          <br />
          <br />
          <Link to="/contact" className="text-red-500 underline">
            Contact us
          </Link>{" "}
          or CLICK any of the link below to Place your ADVERTS NOW you’ll be
          attended to as soon as possible.
          <br />
          <br />
          <strong>
            SKYROCKET YOUR BUSINESS/PRODUCTS/SERVICES TODAY with us and smile
            later!!
          </strong>
          <br />
          <br />
          <ul>
            <li>
              <a
                className="text-red-500"
                href="https://wa.me/message/2MVJUHWZBG6DM1"
              >
                Whatsapp
              </a>
            </li>
            <li>
              <a
                className="text-red-500"
                href="https://twitter.com/only_lorenzotv?t=EA5tDqgTaohSzHsJa0_2qQ&s=09"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="text-red-500"
                href="https://instagram.com/lorenzo_tv1?igshid=YmMyMTA2M2Y="
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                className="text-red-500"
                href="https://www.facebook.com/lorenzarts12"
              >
                Facebook
              </a>
            </li>
          </ul>
          <br />
          <br />
          <strong>LorenzoTv your number 1 entertainment tv</strong>
          <br />
          <br />
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Ad;
