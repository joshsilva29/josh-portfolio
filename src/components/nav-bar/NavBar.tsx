import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
    return (
        <div className="nav-bar flex-row space-between">
            <Link to="/" className="nav-bar-item sawarabi">josh</Link>
            <div className="flex-row space-around">
                <Link to="/about" className="nav-bar-right-item nav-bar-item sawarabi">about me</Link>
                <Link to="/contact" className="nav-bar-item sawarabi">contact</Link>
            </div>
        </div>
    )
}

export default NavBar;