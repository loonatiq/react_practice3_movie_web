import { Link } from "react-router-dom";
import "./MovieList.css";

function MovieList({ movies }) {
  return (
    <>
      {movies.map((value) => (
        <div key={value.id} className="movielist">
          <div key={value.id}>
            <img src={value.medium_cover_image} alt={value.title}></img>
            <h1>
              <Link to={`/movie/${value.id}`}>{value.title_long}</Link>
            </h1>
          </div>
        </div>
      ))}
    </>
  );
}

export default MovieList;
