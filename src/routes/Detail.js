import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Suggestion from "../components/Suggestion";
import "./Detail.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [suggestions, setSuggestions] = useState([]);
  const [currentId, setCurrentId] = useState();

  const getMovie = async () => {
    const detail = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    const suggestion = await (
      await fetch(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`)
    ).json();
    setDetails(detail.data.movie);
    setSuggestions(suggestion.data.movies);
    setCurrentId(id);
    setLoading(false);
    // console.log(detail);
    // console.log(suggestion);
  };

  useEffect(() => {
    getMovie();
  }, [id !== currentId]);

  // console.log(id);
  // console.log(currentId);
  return (
    <>
      <NavBar />
      {loading ? (
        <h1 className="loading">Loading...</h1>
      ) : (
        <>
          <div className="moviedetail">
            <img src={details.large_cover_image} alt={details.title_long} />
            <div className="informations">
              <h1>{details.title_long}</h1>
              <div>
                {details.genres.map((value) => (
                  <ul key={value}>{value}</ul>
                ))}
              </div>
              <h2>Rating : {details.rating}</h2>
              <h3>Runtime : {details.runtime} minutes</h3>
              <p>{details.description_full}</p>
            </div>
          </div>
          <Suggestion suggestion={suggestions} />
        </>
      )}
    </>
  );
}
export default Detail;
