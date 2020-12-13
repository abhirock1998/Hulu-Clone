import React from "react";
import "./navbar.css";
import request from "./request";
function Navbar({ modifier }) {
  return (
    <div className="navbar navbar_clikc--active ">
      <h2 onClick={() => modifier(request.fetchTrending)}>Trending</h2>
      <h2 onClick={() => modifier(request.fetchToprated)}>Top Rated</h2>
      <h2 onClick={() => modifier(request.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => modifier(request.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => modifier(request.fetchHorrorMovie)}>Horror</h2>
      <h2 onClick={() => modifier(request.fetchRomanveMovies)}>Romance</h2>
      <h2 onClick={() => modifier(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => modifier(request.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => modifier(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => modifier(request.fetchAnimation)}>Animation</h2>
      <h2 onClick={() => modifier(request.fetchTV)}>Tv Movies</h2>
    </div>
  );
}

export default Navbar;
