// import { Link } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";
import Loader from "../components/Loader";

const Login = ({ login, handleLoginChange, loader, errorMessage }) => {
  return (
    <>
      {loader && <Loader />}
      <div className="w-full min-h-screen px-4 py-16 text-white flex items-center justify-center relative">
        {/* <Link to="/" className="absolute top-10 left-2 block sm:hidden">
          <button className="bg-rose-500/80 font-bold text-[0.90rem] mb-8 px-5 py-1 rounded-md hover:bg-red-700 hover:translate-y-[6px] transition-all duration-300">
            Back to home
          </button>
        </Link> */}
        <div className="w-full sm:w-[550px] p-5 sm:p-10 rounded-2xl border-2 border-red-700">
          <h1 className="font-bold text-[1.75rem] text-center">Admin login</h1>
          <form>
            <input
              type="email"
              id="email"
              onChange={handleLoginChange}
              placeholder="Email"
              className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
            />
            <div className="w-full relative">
              <input
                type="password"
                id="password"
                onChange={handleLoginChange}
                placeholder="password"
                className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
              />
            </div>
            <button
              onClick={login}
              className="w-full bg-red-700/60 my-4 p-3 outline-none rounded-lg"
            >
              Login
            </button>
          </form>
          {errorMessage && (
            <div className="w-full flex gap-4 items-center py-3 px-10 my-2 bg-red-400/20 text-[0.85rem] rounded-lg border border-red-400">
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
      <ScrollToTop />
    </>
  );
};

export default Login;
