import "../style/Home.css"
import girl from '../assets/images/landing-page-girl.png';
import { Link } from 'react-router-dom';

function MainHome() {
    return (
        <>
            
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
            
            <div className="home d-flex justify-content-center">
                <img className="girl" src={girl} alt="girl listening muisc"/>
                <div className="text-home">
                    <h1 className="title mt-5">Feel the music</h1>
                    <p className="description">Stream over 20 thousand songs with one click</p>
                    <Link to="/join" className="nav-link text-white"><button type="button" className="btn btn-primary">Join now</button></Link>
                </div>
            </div>
        </>    
    );
}
export default MainHome;