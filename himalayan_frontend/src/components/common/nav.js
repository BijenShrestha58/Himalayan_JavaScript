import { NavLink, useLocation } from "react-router-dom";

export const Nav = (props) => {
  const location = useLocation();
  const isHome = location.pathname === "/home";

  return (
    <div className={`nav ${isHome ? "fixed" : "sticky"}`}>
      <div className="nav-items">
        <NavLink to="/home" className="nav-item-link">
          <button className="nav-item">Home</button>
        </NavLink>
        <NavLink to="/forums" className="nav-item-link">
          <button className="nav-item">Forums</button>
        </NavLink>
        <NavLink to="/announcements" className="nav-item-link">
          <button className="nav-item">Announcements</button>
        </NavLink>
        <NavLink to="/contacts" className="nav-item-link">
          <button className="nav-item">Contacts</button>
        </NavLink>
      </div>
      <button className="login-button" onClick={props.open}>Login</button>
      {/* set loginIsVisible to true  */}
    </div>
  );
}
