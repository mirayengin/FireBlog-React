import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const MovieDetail = () => {
  const [film, setFilm] = useState(null);
  const { id } = useParams();
  const getFilm = async () => {
    const API_KEY = "a318205b96c5cab382135c4e884a9a1f";
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
    const { data } = await axios(url);
    setFilm(data);
  };
  useEffect(() => {
    getFilm();
  }, []);

  return (
    <div>
      <h1>{film?.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w1280${film?.poster_path}`}
        alt=""
      />
      <p>{film?.overview}</p>
      <p>
        <span>{film?.vote_average.toFixed(1)}</span>{" "}
        <span>{film?.vote_count}</span>
      </p>
    </div>
  );
};

export default MovieDetail;
