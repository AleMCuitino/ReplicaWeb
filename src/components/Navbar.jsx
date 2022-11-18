import "../style/Navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';

function Navbar() {
return (
    <>
    <nav className="navbar navbar-expand-lg">
        <div className="navbar-collapse container-fluid d-flex nav-sound">
            <Link to="/" className="text-white logo-text">
                <img className="img-fluid logo-img" width="40px"src={logo} alt="soundwave"/>Soundwave 
            </Link>
                <div className="d-flex" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-row sections gap-2">
                        <li className="nav-item">
                            <Link to="/discover" className="nav-link active text-white">Discover</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/join" className="nav-link text-white">Join</Link>
                        </li>        
                    </ul>    
                </div>
        </div>
    </nav>
    </>
);
}

export default Navbar;
