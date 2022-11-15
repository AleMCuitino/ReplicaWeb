import Navbar from './Navbar';
import "../style/Home.css"
import landing from '../assets/images/landing-page-girl.png'

function Home() {
    return (
        <>
        <body>           
            <header>
                <Navbar/>
            </header>
            <div className="home d-flex">
                <img className="girl" src={landing} alt="girl"/>
                <div className="text-home align-middle">
                    <h1 className="title mt-5">Feel the music</h1>
                    <p className="description">Stream over 20 thousand songs with one click</p>
                    <button type="button" className="btn btn-primary">Join Now</button>
                </div>
                
            </div>
        </body>     
        </>
    );
}
export default Home;