import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <div className="header_components">
      <div className="logo">
        <h1>Resoo</h1>
      </div>
      <div className="header_links">
        <Link to="/rfqack">Acknowledge</Link>
        <Link to="/rfqsubmit">Submit</Link>
        <Link to="/rfqtable">Query</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
