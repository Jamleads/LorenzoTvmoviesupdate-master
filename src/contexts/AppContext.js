import { getDownloadURL, listAll, ref } from "firebase/storage";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { storage } from "../firebase/firebase-config";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const location = useLocation();
  let currentPage = location.pathname;

  //to get moviesfrom db
  const [movieImagesFromDb, setmovieImagesFromDb] = useState(
    JSON.parse(localStorage.getItem("movieImages")) || []
  );

  //to get noon booking timesaved in db
  useEffect(() => {
    const getMovieImages = async () => {
      try {
        const imageRef = ref(storage, "movieImages/");
        listAll(imageRef).then((res) => {
          let list = [];
          res.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              if (res.items.length > 0) {
                list.push(url);
                setmovieImagesFromDb([...list]);
                localStorage.setItem("movieImages", JSON.stringify(list));
              }
            });
          });
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    getMovieImages();
  }, []);
  // console.log(movieImagesFromDb);

  //to get moviesfrom db
  const [animationImagesFromDb, setAnimationImagesFromDb] = useState(
    JSON.parse(localStorage.getItem("animationImages")) || []
  );

  //to get noon booking timesaved in db
  useEffect(() => {
    const getAnimationImages = async () => {
      try {
        const imageRef = ref(storage, "animationImages/");
        listAll(imageRef).then((res) => {
          let list = [];
          res.items.forEach((item) => {
            getDownloadURL(item).then((url) => {
              if (res.items.length > 0) {
                list.push(url);
                setAnimationImagesFromDb([...list]);
                localStorage.setItem("animationImages", JSON.stringify(list));
              }
            });
          });
        });
      } catch (err) {
        console.log(err.message);
      }
    };
    getAnimationImages();
  }, []);

  return (
    <AppContext.Provider
      value={{ currentPage, movieImagesFromDb, animationImagesFromDb }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export default AppContextProvider;
