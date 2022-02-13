import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState("download_count");

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=${selected}`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    console.log("실행");
    getMovies();
  }, [selected]);
  console.log(movies);

  const handleSelect = (e) => {
    setSelected(e.target.value);
    setMovies([]);
    console.log(e.target.value);
  };

  return (
    <>
      <NavBar />
      <>
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <>
            <div className="sort">
              <select onChange={handleSelect}>
                <option value="download_count">Sort by download</option>
                <option value="rating">Sort by rating</option>
                <option value="like_count">Sort by like_count</option>
              </select>
            </div>
            <div className="movielists">
              <MovieList movies={movies} />
            </div>
          </>
        )}
      </>
    </>
  );
}
export default Home;
