import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ShowDetails from "./components/ShowDetails";
import './App.css'

function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const response = await fetch("https://api.tvmaze.com/search/shows?q=all");
      const data = await response.json();
      setShows(data);
    };
    fetchShows();
  }, []);

  return (
    // <><Home shows={shows}/></>
    // <>
    
    // <Home shows={shows}/>
    //   {/* <Routes>
    //     <Route exact path="/">
    //       <Home shows={shows} />
    //     </Route>
    //     <Route path="/show-details/:id">
    //       <ShowDetails />
    //     </Route>
    //   </Routes> */}

    // </>
    <Router>
      <Routes>
        <Route path="/" element = {<Home shows={shows}/>}/>
        <Route path="/show-details/:id" element = {<ShowDetails/>}/>
      </Routes>
    </Router>
  );
}

export default App;
