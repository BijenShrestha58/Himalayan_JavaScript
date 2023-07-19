import { NavLink } from "react-router-dom";
export const Nav=(props)=>{
    return(
    <div className="nav">
        <div className="nav-items">
        <NavLink to="/home" className="nav-item-link"><button className="nav-item">Home</button></NavLink>
        <NavLink to="/forums" className="nav-item-link"> <button className="nav-item">Forums</button></NavLink>
        <NavLink to="/announcements" className="nav-item-link"><button className="nav-item">Announcements</button></NavLink>
        <NavLink to="/contacts" className="nav-item-link"><button className="nav-item">Contacts</button></NavLink>
        </div>
        <button className="login-button" onClick={props.open}>Login</button>
    </div>
    )
}