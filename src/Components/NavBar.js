import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Budget Helper</h1>

      <Link to="/" id="home">
        Home
      </Link>
      <Link to="/transactions" id="items">
        Items
      </Link>
      <Link to="/transactions/new">New</Link>
    </nav>
  );
};

export default NavBar;
