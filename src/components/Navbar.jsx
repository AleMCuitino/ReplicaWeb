import "../style/Navbar.css";
import logo from "../assets/images/logo.png";

function Navbar() {
return (
    <>
    <nav class="navbar navbar-expand-lg justify-content-center">
        <div class="container-fluid">
            <a class="navbar-brand text-white" href="#">
                <img className="img-fluid" width="30px"src={logo} alt="soundwave"/>Soundwave 
            </a>
                <div class="navbar-collapse d-flex" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="#">Discover</a>
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
