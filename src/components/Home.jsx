import React from "react";
import { Link } from "react-router-dom";
function Home({shows}) {
//   const { shows } = props;

  return (
    <div>
      <h1>Show List</h1>
      <div className="cards">
      {shows.map((show) => (
        <div key={show.id} className="card">
            <Link style={{textDecoration:"none",color: "black"}} to={`/show-details/${show.show.id}`}>
          <h2>{show.show.name}</h2>
          {show.show.image && (
            <img src={show.show.image.medium} alt={show.show.name} />
          )}
          </Link>
        </div>
      ))}
      </div>
      
    </div>
  );
}

export default Home;
