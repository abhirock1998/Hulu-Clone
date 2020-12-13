import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Result from "./Result";
import request from "./request";
import Footer from "./Footer";

function App() {
  const [option, setOption] = useState(request.fetchTrending);

  return (
    <div className="app">
      <Header />
      <Navbar modifier={setOption} />
      <Result selectedGenere={option} />
     <Footer/>
    </div>
  );
}

export default App;
