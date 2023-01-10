import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Budget App</h1>
      <Link to="/">Home</Link>
      <Link to="/transactions">Transactions</Link>
      <Link to="/transactions/new">New</Link>
    </nav>
  );
};

export default NavBar;
