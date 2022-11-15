import "../components/Navbar.css";
import logo from '../assets/images/logo.png'

function Navbar() {
    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="container">
                        <a class="navbar-brand" href="#">
                            <img src={logo} alt="Soundwave" width="30" height="24"/>
                        </a>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Discover</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Join</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
