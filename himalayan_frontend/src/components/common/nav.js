import { NavLink } from "react-router-dom";
export const Nav=()=>{
    return(
    <div className="nav">
        <div className="nav-items">
            <button className="nav-item">Home</button>
            <button className="nav-item">Forum</button>
            <button className="nav-item">Announcements</button>
            <button className="nav-item">Contacts</button>
        </div>
        <button className="login-button">Login</button>
    </div>
    )
}