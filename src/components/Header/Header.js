import { Link } from "react-router-dom";
import "./Header.css";
import { useUserContext } from "../../App";
function Header() {
  const { isLogin, setIsLogin, role, setIsRole } = useUserContext();
  return (
    <div className="header_components">
      <div className="logo">
        <Link to="/">
          <h1>Resoo</h1>
        </Link>
      </div>
      <div className="header_links">
        <div className="header_left-links">
          <Link to="/rfqack">Acknowledge</Link>
          <Link to="/supplier">Supplier</Link>
          {isLogin && (
            <>
              <Link to="/rfqsubmit">Submit</Link>
              {role === "admin" ? <><Link to="/rfqtable">Query</Link><Link to="/supplier-table">Supplier Table</Link></> : null}
            </>
          )}
        </div>
        <div className="header_right-links">
          {isLogin ? (
            <Link
              to="/login"
              onClick={() => {
                setIsLogin(false);
                setIsRole(null);
              }}
            >
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
