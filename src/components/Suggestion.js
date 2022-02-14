import { Link } from "react-router-dom";
import "./Suggestion.css";

function Suggestion({ suggestion }) {
  return (
    <div className="suggest">
      <h1>Suggestions</h1>
      <div className="suggestion">
        {suggestion.map((value) => (
          <Link to={`/movie/${value.id}`}>
            <div key={value.id} className="suggestionlist">
              <img src={value.medium_cover_image} alt={value.title}></img>
              <h1>{value.title_long}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Suggestion;
