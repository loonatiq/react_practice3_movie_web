import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?sort_by=download_count"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <>
      <NavBar />
      <div className="movielists">
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>
    </>
  );
}
export default Home;
