import { Link } from "react-router-dom";
import "./MovieList.css";
import Rating from "./Rating";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((value) => (
        <div key={value.id} className="movielist">
          <Link to={`/movie/${value.id}`}>
            <div key={value.id}>
              <img src={value.medium_cover_image} alt={value.title}></img>
              <div className="movielist_info">
                <h1>{value.title_long}</h1>
                <span className="star">
                  <Rating rating={value.rating} />
                </span>
                <p>{value.summary.slice(0, 180)}...</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default MovieList;
