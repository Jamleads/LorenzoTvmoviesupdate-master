import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
// import "./output.css";
import { lazy, Suspense, useState } from "react";
import { useEffect } from "react";
import ReactGa from "react-ga";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import Loader from "./components/Loader";
import { auth, db, storage } from "./firebase/firebase-config";
import {
  getDocs,
  collection,
  setDoc,
  doc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StreamingPage from "./pages/StreamingPage";
import PaymentForm from "./pages/PaymentForm";

const Main = lazy(() => import("./Main"));
const About = lazy(() => import("./pages/About"));
const Movies = lazy(() => import("./pages/Movies"));
const Series = lazy(() => import("./pages/Series"));
const Anime = lazy(() => import("./pages/Anime"));
const Animation = lazy(() => import("./pages/Animation"));
const Details = lazy(() => import("./pages/Details"));
const AnimationDetails = lazy(() => import("./pages/AnimationDetails"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Ad = lazy(() => import("./pages/Ad"));
const AdminLogin = lazy(() => import("./admin/AdminLogin"));
const AdminDashboard = lazy(() => import("./admin/AdminDashboard"));

ReactGa.initialize(process.env.REACT_APP_TRACKING_ID);

function App() {
  const location = useLocation();
  let currentPage = location.pathname;

  useEffect(() => {
    //to track page views
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const [showSearchList, setShowSearchList] = useState(false);

  function handleSearchSubmit(event) {
    event.preventDefault();
    // setLoader(true);
    setShowSearchList(true);
    // setTimeout(setLoader(false), 5000);
  }
  function handleCloseSearchList() {
    setShowSearchList(false);
    // setLoader(false);
  }

  const [loader, setLoader] = useState(false);

  //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query
  //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query
  //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query
  //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query   //Data query

  const [addMovieSuccess, setAddMovieSuccess] = useState(false);
  const [addAnimationSuccess, setAddAnimationSuccess] = useState(false);
  const [added, setAdded] = useState(false);

  //to get moviesfrom db
  const [moviesFromDb, setMoviesFromDb] = useState(
    JSON.parse(localStorage.getItem("movies")) || []
  );

  //to get noon booking timesaved in db
  useEffect(() => {
    const getMovies = async () => {
      setLoader(true);

      try {
        const querySnapshot = await getDocs(collection(db, "movies"));
        let movies = [];
        querySnapshot.forEach((doc) => {
          movies.push(doc.data());
        });
        let arranged = movies?.sort(function (a, b) {
          return b.id - a.id;
        });
        movies.length > 0 &&
          localStorage.setItem("movies", JSON.stringify(arranged));
        movies.length > 0 && setMoviesFromDb(arranged);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getMovies();
  }, [added]);

  //to get moviesfrom db
  const [animationFromDb, setAnimationFromDb] = useState(
    JSON.parse(localStorage.getItem("animations")) || []
  );

  //to get noon booking timesaved in db
  useEffect(() => {
    const getAnimations = async () => {
      setLoader(true);

      try {
        const querySnapshot = await getDocs(collection(db, "animations"));
        let animations = [];
        querySnapshot.forEach((doc) => {
          animations.push(doc.data());
        });
        let arranged = animations?.sort(function (a, b) {
          return b.id - a.id;
        });
        animations.length > 0 &&
          localStorage.setItem("animations", JSON.stringify(arranged));
        animations.length > 0 && setAnimationFromDb(arranged);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getAnimations();
  }, [added]);

  // //movies from json file
  // const [moviesFromJson, setMoviesFromJson] = useState([]);
  // useEffect(() => {
  //   const getMovies = async () => {
  //     setLoader(true);

  //     fetch("/movieData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log("movies fetched successfully!!");
  //         setMoviesFromJson(data);
  //         setLoader(false);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         setLoader(false);
  //       });
  //   };
  //   getMovies();
  // }, []);

  // //manimations from json file
  // const [animationsFromJson, setAnimationsFromJson] = useState([]);
  // useEffect(() => {
  //   const getAnimations = async () => {
  //     setLoader(true);

  //     fetch("/animationData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log("animations fetched successfully!!");
  //         setAnimationsFromJson(data);
  //         setLoader(false);
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //         setLoader(false);
  //       });
  //   };
  //   getAnimations();
  // }, []);

  const [homeMovies, setHomeMovies] = useState([]);
  //to shuffle the movie array
  useEffect(() => {
    const sortMovies = async () => {
      setLoader(true);
      try {
        let moviesCopy = [...moviesFromDb];
        const randomMovies = moviesCopy.sort(() => 0.5 - Math.random());
        let firstTwentyMovies = randomMovies.slice(0, 12);
        setHomeMovies(firstTwentyMovies);
        setLoader(false);
      } catch (err) {
        console.log(err.message);
        setLoader(false);
      }
    };
    sortMovies();
  }, [moviesFromDb]);

  const [homeAnimations, setHomeAnimations] = useState([]);
  //to shuffle the movie array
  useEffect(() => {
    const sortAnimations = async () => {
      setLoader(true);
      try {
        let animationCopy = [...animationFromDb];
        const randomAnimations = animationCopy.sort(() => 0.5 - Math.random());
        let firstTwentyAnimations = randomAnimations.slice(0, 12);
        setHomeAnimations(firstTwentyAnimations);
        setLoader(false);
      } catch (err) {
        console.log(err.message);
        setLoader(false);
      }
    };
    sortAnimations();
  }, [animationFromDb]);
  // console.log("rendered");

  //to gradually increase movies displayed
  let firstTwenty = moviesFromDb.slice(0, 20);
  let nextThirty = moviesFromDb.slice(20, 30);
  let nextForty = moviesFromDb.slice(30, 40);
  let nextFifty = moviesFromDb.slice(40, 50);
  let nextSixty = moviesFromDb.slice(50, 60);

  const [display30, setDisplay30] = useState(false);
  function show30() {
    setDisplay30(true);
  }

  const [display40, setDisplay40] = useState(false);
  function show40() {
    setDisplay40(true);
  }

  const [display50, setDisplay50] = useState(false);
  function show50() {
    setDisplay50(true);
  }

  const [display60, setDisplay60] = useState(false);
  function show60() {
    setDisplay60(true);
  }

  //to gradually increase manimation displayed
  let firstTwentyA = animationFromDb.slice(0, 20);
  let nextThirtyA = animationFromDb.slice(20, 30);
  let nextFortyA = animationFromDb.slice(30, 40);
  let nextFiftyA = animationFromDb.slice(40, 50);
  let nextSixtyA = animationFromDb.slice(50, 60);

  const [displayA30, setDisplayA30] = useState(false);
  function showA30() {
    setDisplayA30(true);
  }

  const [displayA40, setDisplayA40] = useState(false);
  function showA40() {
    setDisplayA40(true);
  }

  const [displayA50, setDisplayA50] = useState(false);
  function showA50() {
    setDisplayA50(true);
  }

  const [displayA60, setDisplayA60] = useState(false);
  function showA60() {
    setDisplayA60(true);
  }

  //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section
  //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section
  //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section
  //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section   //admin section
  // mRDN9r@37PT0
  const navigate = useNavigate();

  //to save current user from auth in state
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || {}
  );
  useEffect(() => {
    onAuthStateChanged(auth, (currentadmin) => {
      localStorage.setItem("admin", JSON.stringify(currentadmin));
      setAdmin(currentadmin);
    });
  }, []);

  const [errorMessage, setErrorMessage] = useState();
  //to save login form input
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //to handle form input change chnage
  function handleLoginChange(event) {
    setErrorMessage("");
    const { id, value } = event.target;
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //to log in admin
  const login = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      if (loginForm.email && loginForm.password) {
        await signInWithEmailAndPassword(
          auth,
          loginForm.email,
          loginForm.password
        );
        navigate("/admin");
        window.location.reload();
      } else {
        setErrorMessage("Fill all fields!");
      }
    } catch (error) {
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        setErrorMessage("Wrong admin email");
      } else if (error.message === "Firebase: Error (auth/wrong-password).") {
        setErrorMessage("Invalid login credentials");
      } else if (
        error.message === "Firebase: Error (auth/network-request-failed)."
      ) {
        setErrorMessage("Bad network connection");
      }
    } finally {
      setLoader(false);
    }
  };

  //to log out admin
  const logout = async () => {
    setLoader(true);
    try {
      signOut(auth).then(() => {
        navigate("/");
      });
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  //to save message from db
  const [messageFromDb, setMessageFromDb] = useState(
    JSON.parse(localStorage.getItem("contactUs")) || []
  );

  //to get contact us messages saved in db
  useEffect(() => {
    const getMessage = async () => {
      setLoader(true);

      try {
        const querySnapshot = await getDocs(collection(db, "contactUs"));
        let message = [];
        querySnapshot.forEach((doc) => {
          message.push(doc.data());
        });
        let arranged = message?.sort(function (a, b) {
          return b.id.slice(-3) - a.id.slice(-3);
        });

        message.length > 0 &&
          localStorage.setItem("message", JSON.stringify(arranged));
        message.length > 0 && setMessageFromDb(arranged);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoader(false);
      }
    };
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [added]);

  //to formate date
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  const [contactForm, setContactForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  //to handle form input change chnage
  function handleContactChange(event) {
    setErrorMessage("");
    const { id, value } = event.target;
    setContactForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima
  //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima
  //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima
  //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima   //add movies/anima
  const [movieDeleted, setMovieDeleted] = useState(false);

  const handleReset = () => {
    setMovieDeleted(false);
  };

  //to delete movie from db
  const deleteMovieDoc = async (title) => {
    setLoader(true);
    try {
      const movieQuery = query(
        collection(db, "movies"),
        where("title", "==", title)
      );
      const querySnapshot = await getDocs(movieQuery);

      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref); // and not doc.data()
      });
      // await deleteDoc(movieQuery);
      localStorage.removeItem("movies");
      setAdded((prev) => !prev);
      setMovieDeleted(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  //to delete animation from db
  const deleteAnimationDoc = async (title) => {
    setLoader(true);
    try {
      const movieQuery = query(
        collection(db, "animations"),
        where("title", "==", title)
      );
      const querySnapshot = await getDocs(movieQuery);

      querySnapshot.forEach((doc) => {
        deleteDoc(doc.ref); // and not doc.data()
      });
      // await deleteDoc(movieQuery);
      localStorage.removeItem("animations");
      setAdded((prev) => !prev);
      setMovieDeleted(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  //to upload movie image
  const [movieImage, setMovieImage] = useState([]);
  function handleAddImage(e) {
    setMovieImage([
      {
        image: `${URL.createObjectURL(e.target.files[0])}`,
        imageFile: e.target.files[0],
        hover: false,
      },
    ]);
    // setMovieForm((prevState) => {
    //   return {
    //     ...prevState,
    //     image_link: [
    //       {
    //         image: `${URL.createObjectURL(e.target.files[0])}`,
    //         hover: false,
    //       },
    //     ],
    //   };
    // });
  }
  function handleRemovePhoto(index) {
    let photos = [...movieImage];
    photos.splice(index, 1);
    setMovieImage(photos);
    // setMovieForm((prevState) => {
    //   return {
    //     ...prevState,
    //     image_link: "",
    //   };
    // });
  }

  function handlePhotoHover(index) {
    let photos = [...movieImage];
    photos[index].hover = true;
    setMovieImage(photos);
  }

  function handlePhotoMouseout(index) {
    let photos = [...movieImage];
    photos[index].hover = false;
    setMovieImage(photos);
  }

  //to upload movie image
  async function uploadImage() {
    setLoader(true);
    try {
      if (movieImage[0].imageFile !== null) {
        const imageRef = ref(
          storage,
          `movieImages/${movieForm?.title.replace(/ /g, "-")}`
        );
        uploadBytes(imageRef, movieImage[0].imageFile).then(() => {
          return;
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  }

  function handleClearField() {
    setMovieForm({
      title: "",
      category: "",
      genre: "",
      storyline: "",
      download_link: "",
      subtitle_link: "",
      trailer_link: "",
      stream_link: "",
    });

    setAnimationForm({
      title: "",
      category: "",
      genre: "",
      storyline: "",
      download_link: "",
      subtitle_link: "",
      trailer_link: "",
    });
  }

  //to save movie form input
  const [movieForm, setMovieForm] = useState({
    // image_link: "",
    title: "",
    category: "",
    genre: "",
    storyline: "",
    download_link: "",
    subtitle_link: "",
    trailer_link: "",
    stream_link: "",
  });

  // console.log(movieForm);

  //to handle form input chnage
  function handleMovieChange(event) {
    setErrorMssg("");
    const { id, value } = event.target;
    setMovieForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  const [errorMssg, setErrorMssg] = useState("");
  //function to submit movie to db
  const submitMovie = async () => {
    if (
      movieForm.title &&
      movieForm.category &&
      movieForm.genre &&
      movieForm.storyline &&
      movieForm.download_link &&
      movieForm.subtitle_link
    ) {
      setLoader(true);
      try {
        await setDoc(
          doc(
            db,
            "movies",
            `${movieForm?.title.replace(/ /g, "-")}_000${
              moviesFromDb.length + 1
            }`
          ),
          {
            id: moviesFromDb?.length + 1,
            // image_link: movieForm?.image_link,
            title: movieForm?.title,
            category: movieForm?.category,
            genre: movieForm?.genre,
            storyline: movieForm?.storyline,
            download_link: movieForm?.download_link,
            subtitle_link: movieForm?.subtitle_link,
            trailer_link: movieForm?.trailer_link,
            stream_link: movieForm?.stream_link,
            createdAT: formattedDate,
          }
        );
        await uploadImage();
        setAddMovieSuccess(true);
        setAdded((prev) => !prev);
      } catch (err) {
        console.error("Error adding document: ", err);
        setErrorMssg(err.message);
      } finally {
        setLoader(false);
      }
    } else {
      setErrorMssg("Fill all fields!!");
    }
  };

  //to upload animation image
  const [animationImage, setAnimationImage] = useState([]);
  function handleAddAnimationImage(e) {
    setAnimationImage([
      {
        image: `${URL.createObjectURL(e.target.files[0])}`,
        imageFile: e.target.files[0],
        hover: false,
      },
    ]);
    // setAnimationForm((prevState) => {
    //   return {
    //     ...prevState,
    //     image_link: [
    //       {
    //         image: `${URL.createObjectURL(e.target.files[0])}`,
    //         hover: false,
    //       },
    //     ],
    //   };
    // });
  }
  function handleAnimationRemovePhoto(index) {
    let photos = [...animationImage];
    photos.splice(index, 1);
    setAnimationImage(photos);
    // setMovieForm((prevState) => {
    //   return {
    //     ...prevState,
    //     image_link: "",
    //   };
    // });
  }

  function handleAnimationPhotoHover(index) {
    let photos = [...animationImage];
    photos[index].hover = true;
    setAnimationImage(photos);
  }

  function handleAnimationPhotoMouseout(index) {
    let photos = [...animationImage];
    photos[index].hover = false;
    setAnimationImage(photos);
  }

  //to upload movie image
  async function uploadAnimationImage() {
    setLoader(true);
    try {
      if (animationImage[0].imageFile !== null) {
        const imageRef = ref(
          storage,
          `animationImages/${animationForm?.title.replace(/ /g, "-")}`
        );
        uploadBytes(imageRef, animationImage[0].imageFile).then(() => {
          return;
        });
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  }

  //to save movie form input
  const [animationForm, setAnimationForm] = useState({
    // image_link: "",
    title: "",
    category: "",
    genre: "",
    storyline: "",
    download_link: "",
    subtitle_link: "",
    trailer_link: "",
  });

  // console.log(animationForm);

  //to handle form input chnage
  function handleAnimationChange(event) {
    setErrorMssg("");
    const { id, value } = event.target;
    setAnimationForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //function to submit animation to db
  const submitAnimation = async () => {
    if (
      animationForm.title &&
      animationForm.category &&
      animationForm.genre &&
      animationForm.storyline &&
      animationForm.download_link
    ) {
      setLoader(true);
      try {
        await setDoc(
          doc(
            db,
            "animations",
            `${animationForm?.title.replace(/ /g, "-")}_000${
              animationFromDb?.length + 1
            }`
          ),
          {
            id: animationFromDb?.length + 1,
            title: animationForm?.title,
            category: animationForm?.category,
            genre: animationForm?.genre,
            storyline: animationForm?.storyline,
            download_link: animationForm?.download_link,
            subtitle_link: animationForm?.subtitle_link,
            trailer_link: animationForm?.trailer_link,
            createdAT: formattedDate,
          }
        );
        await uploadAnimationImage();
        setAddAnimationSuccess(true);
        setAdded((prev) => !prev);
      } catch (err) {
        console.error("Error adding document: ", err);
        setErrorMssg(err.message);
      } finally {
        setLoader(false);
      }
    } else {
      setErrorMssg("Fill all fields!!");
    }
  };

  const [submitMessage, setSubmitMessage] = useState(false);

  const createContactUsDoc = async () => {
    setLoader(true);
    try {
      await setDoc(
        doc(
          db,
          "contactUs",
          `${contactForm.email}_${formattedDate}_00${messageFromDb?.length + 1}`
        ),
        {
          id: `${contactForm.email}_${formattedDate}_00${
            messageFromDb?.length + 1
          }`,
          fname: contactForm.fname,
          lname: contactForm.lname,
          email: contactForm.email,
          phone: contactForm.phone,
          message: contactForm.message,
          createdAt: formattedDate,
        }
      );
      setSubmitMessage("Message sent successfully!");
    } catch (err) {
      setErrorMessage("Bad network connection");
      console.log(err.message);
    } finally {
      setLoader(false);
    }
  };

  const handleSendAnother = () => {
    window.location.reload();
    setSubmitMessage("");
  };

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {/* admin */}
        <Route
          path="/login"
          element={
            <AdminLogin
              loader={loader}
              errorMessage={errorMessage}
              handleLoginChange={handleLoginChange}
              login={login}
            />
          }
        />
        <Route
          path="/admin"
          element={
            admin ? (
              <AdminDashboard
                logout={logout}
                loader={loader}
                setLoader={setLoader}
                moviesFromDb={moviesFromDb}
                animationFromDb={animationFromDb}
                messageFromDb={messageFromDb}
                setAddMovieSuccess={setAddMovieSuccess}
                addMovieSuccess={addMovieSuccess}
                handleMovieChange={handleMovieChange}
                movieForm={movieForm}
                submitMovie={submitMovie}
                errorMssg={errorMssg}
                setAddAnimationSuccess={setAddAnimationSuccess}
                addAnimationSuccess={addAnimationSuccess}
                handleAnimationChange={handleAnimationChange}
                animationForm={animationForm}
                submitAnimation={submitAnimation}
                handleAddImage={handleAddImage}
                movieImage={movieImage}
                handleRemovePhoto={handleRemovePhoto}
                handlePhotoHover={handlePhotoHover}
                handlePhotoMouseout={handlePhotoMouseout}
                handleAddAnimationImage={handleAddAnimationImage}
                animationImage={animationImage}
                handleAnimationRemovePhoto={handleAnimationRemovePhoto}
                handleAnimationPhotoHover={handleAnimationPhotoHover}
                handleAnimationPhotoMouseout={handleAnimationPhotoMouseout}
                deleteMovieDoc={deleteMovieDoc}
                movieDeleted={movieDeleted}
                handleReset={handleReset}
                deleteAnimationDoc={deleteAnimationDoc}
                handleClearField={handleClearField}
              />
            ) : (
              <AdminLogin
                loader={loader}
                errorMessage={errorMessage}
                handleLoginChange={handleLoginChange}
                login={login}
              />
            )
          }
        />

        {/* admin */}

        <Route
          path="/"
          element={
            <Main
              // showSearchList={showSearchList}
              // handleSearchSubmit={handleSearchSubmit}
              // handleCloseSearchList={handleCloseSearchList}
              // loader={loader}
              // setLoader={setLoader}
              // currentPage={currentPage}
              // moviesFromDb={moviesFromDb}
              // animationFromDb={animationFromDb}
              // homeMovies={homeMovies}
              // homeAnimations={homeAnimations}
              // createContactUsDoc={createContactUsDoc}
              // submitMessage={submitMessage}
              // handleSendAnother={handleSendAnother}
              // errorMessage={errorMessage}
              handleContactChange={handleContactChange}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              currentPage={currentPage}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        <Route
          path="/movies"
          element={
            <Movies
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              loader={loader}
              setLoader={setLoader}
              currentPage={currentPage}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
              firstTwenty={firstTwenty}
              nextThirty={nextThirty}
              nextForty={nextForty}
              nextFifty={nextFifty}
              nextSixty={nextSixty}
              display30={display30}
              display40={display40}
              display50={display50}
              display60={display60}
              show30={show30}
              show40={show40}
              show50={show50}
              show60={show60}
            />
          }
        />
        <Route
          path="/series"
          element={
            <Series
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        <Route
          path="/anime"
          element={
            <Anime
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        <Route
          path="/animation"
          element={
            <Animation
              currentPage={currentPage}
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              loader={loader}
              setLoader={setLoader}
              animationFromDb={animationFromDb}
              moviesFromDb={moviesFromDb}
              firstTwentyA={firstTwentyA}
              nextThirtyA={nextThirtyA}
              nextFortyA={nextFortyA}
              nextFiftyA={nextFiftyA}
              nextSixtyA={nextSixtyA}
              displayA30={displayA30}
              displayA40={displayA40}
              displayA50={displayA50}
              displayA60={displayA60}
              showA30={showA30}
              showA40={showA40}
              showA50={showA50}
              showA60={showA60}
            />
          }
        />
        <Route
          path="/movie/:title"
          element={
            <Details
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        <Route
          path="/animations/:title"
          element={
            <AnimationDetails
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Privacy
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        <Route
          path="/advertisement"
          element={
            <Ad
              showSearchList={showSearchList}
              handleSearchSubmit={handleSearchSubmit}
              handleCloseSearchList={handleCloseSearchList}
              moviesFromDb={moviesFromDb}
              animationFromDb={animationFromDb}
            />
          }
        />
        {/* <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
        {/* <Route path="/streaming" element={<StreamingPage />} /> */}
        {/* <Route path="/pay" element={<PaymentForm />} /> */}
      </Routes>
    </Suspense>
  );
}

export default App;
