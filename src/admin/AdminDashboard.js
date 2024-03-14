import Sidebar from "./Sidebar";
import ScrollToTop from "../ScrollToTop";
import { useState } from "react";
import Loader from "../components/Loader";
import ContactMessage from "./ContactMessage";

const AdminDashboard = ({
  logout,
  loader,
  moviesFromDb,
  animationFromDb,
  messageFromDb,
  setAddMovieSuccess,
  addMovieSuccess,
  handleMovieChange,
  movieForm,
  submitMovie,
  errorMssg,
  setAddAnimationSuccess,
  addAnimationSuccess,
  handleAnimationChange,
  animationForm,
  submitAnimation,
  handleAddImage,
  movieImage,
  handleRemovePhoto,
  handlePhotoHover,
  handlePhotoMouseout,
  handleAddAnimationImage,
  animationImage,
  handleAnimationRemovePhoto,
  handleAnimationPhotoHover,
  handleAnimationPhotoMouseout,
  deleteMovieDoc,
  movieDeleted,
  handleReset,
  deleteAnimationDoc,
  handleClearField,
}) => {
  let searchData = [...animationFromDb, ...moviesFromDb];
  //   console.log(searchData);
  const [searchField, setSearchField] = useState("");

  const filteredItems = searchData.filter((item) => {
    return item.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const [openAddMovie, setOpenAddMovie] = useState(false);
  const [openAddAnimation, setOpenAddAnimation] = useState(false);
  const [deleteAsset, setDeleteAsset] = useState(false);

  function toggleAddMovie() {
    setOpenAddMovie((prev) => !prev);
  }

  function toggleAddAnimation() {
    setOpenAddAnimation((prev) => !prev);
  }

  function toggleDeleteAsset() {
    setDeleteAsset((prev) => !prev);
  }

  return (
    <div className="w-full">
      {loader && <Loader />}
      <Sidebar logout={logout} />
      <div
        className={`w-full md:w-[80%] min-h-screen float-right bg-[#111827] py-[80px] md:pt-[60px] px-3 md:px-12 transition-all duration-500 text-white`}
      >
        <h1 className="w-full font-bold text-[1.75rem] mt-5 sm:mt-0">
          Admin dashboard
        </h1>
        <div className="w-full flex gap-4">
          <div className="w-1/2 bg-[#020d18] py-5 px-3 my-5 rounded-lg text-center font-medium text-[.75rem] hover:border-red-600/50 border border-red-600/50">
            Total movies: {moviesFromDb?.length}
          </div>
          <div className="w-1/2 bg-[#020d18] py-5 px-3 my-5 rounded-lg text-center font-medium text-[.75rem] hover:border-red-600/50 border border-red-600/50">
            Total Animations: {animationFromDb?.length}
          </div>
        </div>
        {!openAddMovie && (
          <div
            onClick={toggleAddMovie}
            className="w-full bg-[#020d18] py-5 px-3 my-5 rounded-lg text-center cursor-pointer hover:border-red-600/50 border border-[#020d18]"
          >
            Add movie
          </div>
        )}
        {openAddMovie && (
          <div className="slide min-h-[250px] flex items-center justify-center border border-red-600 rounded-lg my-10 p-5 sm:p-10 relative">
            <img
              onClick={() => {
                setAddMovieSuccess(false);
                toggleAddMovie();
                handleClearField();
              }}
              alt=""
              src="/images/icons8-close-window-50.png"
              className="w-10 h-10 absolute top-5 right-3 cursor-pointer"
            />
            {!addMovieSuccess && (
              <div>
                <h1 className="w-full font-bold text-[1.75rem] text-center">
                  Add movie
                </h1>
                <form>
                  {/* <input
                    onChange={handleMovieChange}
                    value={movieForm.image_link}
                    type="text"
                    id="image_link"
                    placeholder="Image link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  /> */}
                  <div className="w-full my-4">
                    {movieImage.length > 0 ? (
                      movieImage.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="relative w-full bg-red-700/20 p-3 outline-none rounded-lg"
                            onMouseOver={() => handlePhotoHover(index)}
                            onMouseOut={() => handlePhotoMouseout(index)}
                          >
                            <div className="w-fit relative">
                              {item.hover && (
                                <div
                                  onClick={() => handleRemovePhoto(index)}
                                  className="bg-red-700 absolute top-[-10px] right-[-10px] p-2 rounded-full cursor-pointer"
                                >
                                  <img
                                    alt=""
                                    src="/images/icons8-close-window-50.png"
                                    className="w-5 h-5"
                                  />
                                </div>
                              )}
                              <img
                                src={Object.values(item)[0]}
                                alt="tour"
                                className="w-[100px] h-[100px] rounded-md object-cover object-center"
                              />
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <input
                        type="file"
                        onChange={handleAddImage}
                        className="custom-file-input w-full bg-red-700/20 p-3 outline-none rounded-lg cursor-pointer"
                      />
                    )}
                  </div>
                  <input
                    onChange={handleMovieChange}
                    value={movieForm.title}
                    type="text"
                    id="title"
                    placeholder="Title"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleMovieChange}
                    value={movieForm.category}
                    type="text"
                    id="category"
                    placeholder="Category"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleMovieChange}
                    value={movieForm.genre}
                    type="text"
                    id="genre"
                    placeholder="Genre"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <textarea
                    onChange={handleMovieChange}
                    value={movieForm.storyline}
                    id="storyline"
                    placeholder="Story line"
                    className="w-full h-[150px] pt-5 px-5 my-4 bg-red-700/20 rounded-lg outline-none"
                    required
                  ></textarea>
                  <input
                    onChange={handleMovieChange}
                    value={movieForm.download_link}
                    type="text"
                    id="download_link"
                    placeholder="Download link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleMovieChange}
                    value={movieForm.subtitle_link}
                    type="text"
                    id="subtitle_link"
                    placeholder="Subtitle link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleMovieChange}
                    value={movieForm.trailer_link}
                    type="text"
                    id="trailer_link"
                    placeholder="Trailer embed link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleMovieChange}
                    value={movieForm.stream_link}
                    type="text"
                    id="stream_link"
                    placeholder="Stream embed link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault(e);
                      submitMovie();
                    }}
                    className="w-full bg-red-700/60 my-4 p-3 outline-none rounded-lg"
                  >
                    Add movie
                  </button>
                  {errorMssg && (
                    <div className="w-full flex gap-4 items-center py-3 px-10 my-2 bg-red-400/20 text-[0.85rem] rounded-lg border border-red-400">
                      <p>{errorMssg}</p>
                    </div>
                  )}
                </form>
              </div>
            )}
            {addMovieSuccess && (
              <h1 className="text-[1.5rem]">Movie successfully added!!</h1>
            )}
          </div>
        )}

        {!openAddAnimation && (
          <div
            onClick={toggleAddAnimation}
            className="w-full bg-[#020d18] py-5 px-3 my-5 rounded-lg text-center cursor-pointer hover:border-red-600/50 border border-[#020d18]"
          >
            Add animation
          </div>
        )}
        {openAddAnimation && (
          <div className="slide min-h-[250px] flex items-center justify-center  border border-red-600 rounded-lg mt-20 mb-10 p-5 sm:p-10 relative">
            <img
              onClick={() => {
                setAddAnimationSuccess(false);
                toggleAddAnimation();
              }}
              alt=""
              src="/images/icons8-close-window-50.png"
              className="w-10 h-10 absolute top-5 right-3 cursor-pointer"
            />
            {!addAnimationSuccess && (
              <div>
                <h1 className="w-full font-bold text-[1.75rem] text-center">
                  Add animation
                </h1>
                <form>
                  {/* <input
                    onChange={handleAnimationChange}
                    value={animationForm.image_link}
                    type="text"
                    id="image_link"
                    placeholder="Image link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  /> */}
                  <div className="w-full my-4">
                    {animationImage.length > 0 ? (
                      animationImage.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="relative w-full bg-red-700/20 p-3 outline-none rounded-lg"
                            onMouseOver={() => handleAnimationPhotoHover(index)}
                            onMouseOut={() =>
                              handleAnimationPhotoMouseout(index)
                            }
                          >
                            <div className="w-fit relative">
                              {item.hover && (
                                <div
                                  onClick={() =>
                                    handleAnimationRemovePhoto(index)
                                  }
                                  className="bg-red-700 absolute top-[-10px] right-[-10px] p-2 rounded-full cursor-pointer"
                                >
                                  <img
                                    alt=""
                                    src="/images/icons8-close-window-50.png"
                                    className="w-5 h-5"
                                  />
                                </div>
                              )}
                              <img
                                src={Object.values(item)[0]}
                                alt="tour"
                                className="w-[100px] h-[100px] rounded-md object-cover object-center"
                              />
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <input
                        type="file"
                        onChange={handleAddAnimationImage}
                        className="custom-file-input w-full bg-red-700/20 p-3 outline-none rounded-lg cursor-pointer"
                      />
                    )}
                  </div>
                  <input
                    onChange={handleAnimationChange}
                    value={animationForm.title}
                    type="text"
                    id="title"
                    placeholder="Title"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleAnimationChange}
                    value={animationForm.category}
                    type="text"
                    id="category"
                    placeholder="Category"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleAnimationChange}
                    value={animationForm.genre}
                    type="text"
                    id="genre"
                    placeholder="Genre"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <textarea
                    onChange={handleAnimationChange}
                    value={animationForm.storyline}
                    id="storyline"
                    placeholder="Story line"
                    className="w-full h-[150px] pt-5 px-5 my-4 bg-red-700/20 rounded-lg outline-none"
                    required
                  ></textarea>
                  <input
                    onChange={handleAnimationChange}
                    value={animationForm.download_link}
                    type="text"
                    id="download_link"
                    placeholder="Download link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleAnimationChange}
                    value={animationForm.subtitle_link}
                    type="text"
                    id="subtitle_link"
                    placeholder="Subtitle link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <input
                    onChange={handleAnimationChange}
                    value={animationForm.trailer_link}
                    type="text"
                    id="trailer_link"
                    placeholder="Trailer embed link"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                  />
                  <button
                    onClick={(e) => {
                      e.preventDefault(e);
                      submitAnimation();
                    }}
                    className="w-full bg-red-700/60 my-4 p-3 outline-none rounded-lg"
                  >
                    Add animation
                  </button>
                </form>
                {addAnimationSuccess && (
                  <h2 className="text-[.9rem] sm:text-[1.5rem]">
                    Animation successfully added!
                  </h2>
                )}
              </div>
            )}
          </div>
        )}

        {!deleteAsset ? (
          <div
            onClick={toggleDeleteAsset}
            className="w-full bg-[#020d18] py-8 px-3 mt-16 rounded-lg text-center cursor-pointer text-red-700 font-bold hover:border-red-600/50 border border-[#020d18]"
          >
            Delete movie & animation
          </div>
        ) : (
          <div className="slide min-h-[250px] border border-red-600 rounded-lg mt-20 mb-10 p-5 sm:p-10 relative flex items-center justify-center">
            <img
              onClick={() => {
                toggleDeleteAsset();
                handleReset();
              }}
              alt=""
              src="/images/icons8-close-window-50.png"
              className="w-10 h-10 absolute top-5 right-3 cursor-pointer"
            />
            {!movieDeleted ? (
              <div className="w-full">
                <h3 className="text-[1.1rem] sm:text-[1.3rem] font-medium pb-2 mb-4 text-center">
                  Delete
                </h3>
                <form className="w-full flex gap-[20px] items-center my-5">
                  <input
                    type="text"
                    className="w-full bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                    placeholder="Enter movie or animation title"
                    onChange={handleChange}
                    value={searchField}
                  />
                </form>
                <div className="w-full">
                  {searchField !== "" &&
                    filteredItems.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="w-full flex justify-between items-center gap-3 bg-red-700/20 my-4 p-3 outline-none rounded-lg"
                        >
                          <h3>{item?.title}</h3>
                          <img
                            alt=""
                            src="/images/icons8-delete-trash-50.png"
                            className="w-10 h-10 cursor-pointer"
                            onClick={() =>
                              item.category === "movie"
                                ? deleteMovieDoc(item?.title)
                                : deleteAnimationDoc(item?.title)
                            }
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <h1 className="text-[.9rem] sm:text-[1.5rem] text-center">
                Deleted successfully!
              </h1>
            )}
          </div>
        )}

        <div className="w-full bg-[#020d18] py-5 px-3 mt-20 rounded-lg text-center border border-[#020d18]">
          <h3 className="text-[1.1rem] sm:text-[1.3rem] font-medium pb-2 mb-4 border-b border-red-600/50 text-center">
            Contact Us messages
          </h3>

          {messageFromDb.length > 0 ? (
            messageFromDb?.map((item, index) => {
              return <ContactMessage key={index} item={item} />;
            })
          ) : (
            <div className="w-full py-12 bg-[#111827] flex flex-col items-center">
              <p className="text-slate-400">No contact us messages yet...</p>
            </div>
          )}
          <div className="w-full text-center">
            <button
              className="px-10 py-2 bg-red-400 hover:bg-blue-400/70 border border-red-400 text-white rounded-md my-3 disabled:opacity-75"
              disabled
            >
              Load nore
            </button>
          </div>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default AdminDashboard;
