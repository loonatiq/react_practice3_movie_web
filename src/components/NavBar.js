import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div className="Navbar">
        <Link to={`/`} className="home_title">
          MOVIELEX
        </Link>
      </div>
    </>
  );
}

export default NavBar;
