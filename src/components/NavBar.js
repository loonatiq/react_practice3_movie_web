import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="Navbar">
        <Link to={`/`} className="home_title">
          MOVIE_WEB
        </Link>
      </div>
    </>
  );
}

export default NavBar;
