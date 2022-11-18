import React from "react";
import { useNavigate } from "react-router-dom";
import "./cards.css";
const Cards = ({ id, title, overview, poster_path }) => {
  const navigate = useNavigate();
  const handleDetail = () => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="card-div">
      <img
        src={`https://image.tmdb.org/t/p/w1280${poster_path}`}
        alt=""
        className="film-img"
      />
      <h3>{title}</h3>
      <p>{overview}</p>
      <button onClick={handleDetail}>Go Detail</button>
    </div>
  );
};

export default Cards;
