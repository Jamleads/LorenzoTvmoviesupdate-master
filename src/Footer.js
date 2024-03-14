import logo from "./images/logo-lorenzo.jpg";
import twitter from "./images/icons8-twitter-squared-48.png";
import whatsapp from "./images/icons8-whatsapp-48.png";
import facebook from "./images/icons8-facebook-48.png";
import instagram from "./images/icons8-instagram-48.png";
import youtube from "./images/icons8-youtube-logo-48.png";
import telegram from "./images/icons8-telegram-app-48.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 pt-[50px] text-[1rem] text-slate-300">
      <div className="w-full mb-[60px] px-4 sm:px-[30px] lg:px-[80px] flex flex-col-reverse md:flex-row gap-4 md:gap-8 justify-between">
        <ul className="w-[fit-content] mb-0">
          <li className="mb-4">
            <div className="flex items-center">
              <img
                alt="logo"
                src={logo}
                className="w-[20px] h-[20px] rounded-lg"
              />
              <p className="font-[700] tracking-wider text-[1.2rem] ml-2">
                LORENZO TV
              </p>
            </div>
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            <Link to="/about">About Us</Link>
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            <a href="http://Lorenzotvblog.netlify.app">Blog</a>
          </li>
          <li className="w-[fit-content] p-2 bg-red-700 rounded-lg hover:bg-[inherit] border-red-700 border-2 mb-2 cursor-pointer hover:text-red-500">
            <Link to="/advertisement">Advertise</Link>
          </li>
        </ul>

        <ul className="mb-10 md:mb-0">
          <li className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Terms of use
          </li>
          <li className="w-[fit-content] mb-2 cursor-pointer hover:text-red-500">
            <Link to="/privacy-policy">Privacy policy</Link>
          </li>
        </ul>

        <div className="text-start md:text-center mb-10 md:mb-0">
          <h3 className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Follow us
          </h3>
          <div className="flex gap-3">
            <a href="https://twitter.com/Lorenzo_TvHQ?t=wK5w1Ge7YZXxxbrP0YKGkQ&s=09">
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
            <a href="https://instagram.com/lorenzo_tvhq?igshid=YmMyMTA2M2Y=">
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
            <a href="https://www.youtube.com/@only_lorenzotv">
              <img
                alt=""
                src={youtube}
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
            <a href="https://t.me/lorenzo_TVHQ">
              <img
                alt=""
                src={telegram}
                className="w-[30px] h-[30px] cursor-pointer hover:translate-y-[6px] transition-all duration-300"
              />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-[300px] lg:w-[500px] mb-10 md:mb-0">
          <h3 className="font-[700] tracking-wider text-[1.2rem] mb-4">
            Newsletter
          </h3>
          <p>
            Subscribe to our newsletter system now to get the latest news from
            us.
          </p>
          <form>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-[300px] h-[60px] px-5 text-[0.85rem] mr-5 bg-inherit border border-red-600 rounded-lg outline-none"
              required
            />
            <button className="h-[60px] px-[40px] py-[15px] mt-4 rounded-md bg-[#b91c1c] hover:translate-y-[6px] transition-all duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* <p className="w-full text-left sm:text-right text-[0.75rem] px-4 sm:px-[30px] lg:px-[80px] mb-2">
        Designed and built by{" "}
        <a
          href="https://khalteck.netlify.app"
          className="text-red-400 underline"
        >
          Khalid Oyeneye
        </a>
      </p> */}
      <div className="w-full h-[80px] flex justify-center items-center text-[0.75rem] border-t border-slate-700">
        Copyright © 2022 All Rights Reserved By LORENZOTV
      </div>
    </footer>
  );
};

export default Footer;
