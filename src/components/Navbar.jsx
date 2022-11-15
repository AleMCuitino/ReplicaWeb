import "../style/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
return (
    <>
    <nav class="navbar navbar-expand-lg">
        <div class="navbar-collapse container-fluid d-flex nav-sound">
            <a class="text-white logo-text" href="#">
                <img className="img-fluid logo-img" width="40px"src={logo} alt="soundwave"/>Soundwave 
            </a>
                <div class="d-flex" id="navbarNav">
                    <ul class="navbar-nav d-flex flex-row sections gap-2">
                        <li class="nav-item">
                            <a class="nav-link active text-white"  href="#">Discover</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">Join</a>
                        </li>        
                    </ul>    
                </div>
        </div>
    </nav>
    </>
);
}

export default Navbar;
