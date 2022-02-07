import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [details, setDetails] = useState();

  const getMovie = async () => {
    const detail = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setDetails(detail.data.movie);
    setLoading(false);
    console.log(detail);
  };

  useEffect(() => {
    getMovie();
  }, []);
  console.log(id);
  return (
    <>
      <NavBar />
      <div>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <div>
            <h1>{details.title_long}</h1>
            <img src={details.large_cover_image} />
            <p>{details.description_full}</p>
            {details.genres.map((value) => (
              <ul key={value}>{value}</ul>
            ))}
            <h2>Rating : {details.rating}</h2>
            <h3>Runtime : {details.runtime} minutes</h3>
          </div>
        )}
      </div>
    </>
  );
}
export default Detail;
