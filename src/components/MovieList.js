import { Link } from "react-router-dom";

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((value) => (
        <div key={value.id}>
          <img src={value.medium_cover_image} alt={value.title}></img>
          <h1>
            <Link to={`/movie/${value.id}`}>{value.title_long}</Link>
          </h1>
          <p>{value.summary}</p>
        </div>
      ))}
    </ul>
  );
}

export default MovieList;
