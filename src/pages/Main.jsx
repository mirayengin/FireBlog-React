import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Cards from "../components/Cards";

const Main = () => {
  const [films, setFilms] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const getFilms = async () => {
    const API_KEY = "a318205b96c5cab382135c4e884a9a1f";
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${pageNumber}`;
    const { data } = await axios(url);
    setFilms(data.results);
  };
  useEffect(() => {
    getFilms();
  }, [pageNumber]);

  return (
    <>
      <div className="films-div">
        {films?.map((item) => {
          return <Cards key={item.id} {...item} />;
        })}
      </div>
      <div onClick={(e) => setPageNumber(e.target.name)}>
        <button name="1">1</button>
        <button name="2">2</button>
        <button name="3">3</button>
        <button name="4">4</button>
      </div>
    </>
  );
};

export default Main;
