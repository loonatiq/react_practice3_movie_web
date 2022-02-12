import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import NavBar from "../components/NavBar";
import "./Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState("download_count");
  const [toggle, setToggle] = useState(false);

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

  const toggleSort = () => {
    setToggle((toggle) => !toggle);
  };

  return (
    <>
      <NavBar />
      <>
        {loading ? (
          <h1 className="loading">Loading...</h1>
        ) : (
          <>
            <ul className="sort">
              <li>Sort by {sort}1 ▼</li>
              <li>Sort by {sort} 2▼</li>
              <li>Sort by {sort} 3▼</li>
            </ul>
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
