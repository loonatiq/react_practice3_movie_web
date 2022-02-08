import { Link } from "react-router-dom";
import "./Suggestion.css";

function Suggestion({ suggestion }) {
  return (
    <div className="suggest">
      <h1>Suggestions</h1>
      <div className="suggestion">
        {suggestion.map((value) => (
          <div key={value.id} className="suggestionlist">
            <div key={value.id}>
              <img src={value.medium_cover_image} alt={value.title}></img>
              <h1>
                <Link to={`/movie/${value.id}`}>{value.title_long}</Link>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Suggestion;
