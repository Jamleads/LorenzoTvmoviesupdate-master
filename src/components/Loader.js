const Loader = () => {
  return (
    <div className="w-full h-[100vh] fixed top-0 left-0 bg-[#020d18] flex justify-center items-center z-[100]">
      <div className="md:w-1/3 w-[80%] text-[1.2rem] md:text-[2rem] font-bold p-[25px] md:py-[20px] rounded-2xl flex flex-col gap-4 justify-center items-center">
        <div className="w-[60px] md:w-[100px] h-[60px] md:h-[100px] bg-gradient-to-b from-red-600 to-white rounded-full relative rotate">
          {/* <div className="w-1/3 h-full bg-white"></div> */}
          <div className="w-1/2 h-1/2 bg-[#020d18] rounded-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"></div>
        </div>
        <h1 className="sm:text-[1.4rem] text-white">Loading...</h1>
      </div>
    </div>
  );
};

export default Loader;
