import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../services/api";

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId)
      .then((data) => {
        console.log("Fetched cast:", data);
        if (data && data.cast) {
          setCast(data.cast);
        }
      })
      .catch((error) => {
        console.error("Error fetching cast:", error);
      });
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                width="100"
              />
            ) : (
              <img
                src="https://via.placeholder.com/100"
                alt={actor.name}
                width="100"
              />
            )}
            <p>
              {actor.name} as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;