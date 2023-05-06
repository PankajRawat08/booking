import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieForm from "./MovieForm";

function ShowDetails() {
  const { id } = useParams();
  const [show, setShow] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`)
      .then((response) => response.json())
      .then((data) => setShow(data));
  }, [id]);

  const handleBookTicketClick = () => {
    setShowForm(true);
  };

  return (
    <div className="show-details-container">
      <img
        className="show-details-image"
        src={show.image?.medium}
        alt={show.name}
      />
      <div className="show-details-summary">
        <h2>{show.name}</h2>
        <p>{show.summary}</p>
        <button onClick={handleBookTicketClick}>Book Ticket</button>
      </div>
      {showForm && (
        <MovieForm
          showName={show.name}
          showId={show.id}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}

export default ShowDetails;
