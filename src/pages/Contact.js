import Form from "../components/Form";
import Footer from "../Footer";
import Header from "../Header";
import three from "../images/jelly-three-red-lines-2.png";
import contact from "../images/matey-man-and-woman-work-in-support-service.png";
import ScrollToTop from "../ScrollToTop";

const Contact = ({
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
      <div className="w-full text-slate-100 bg-[#020d18] bg-home text-[2rem] pt-[130px]">
        <div className="overlay w-full h-full bg-[#020d18]/70 px-4 md:px-[50px] py-[80px] block md:flex justify-between text-[1rem]">
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
            <Form />
          </div>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
