import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="Navbar">
        <Link to={`/`} className="home_title">
          <span className="title_red">MOVIE</span>LEX
        </Link>
        {/* <div className="navbar_menu">
          <span>Search</span>
          <span>Search</span>
          <span>Search</span>
        </div> */}
      </div>
    </>
  );
}

export default NavBar;
