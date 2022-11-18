import Navbar from '../components/Navbar';
import "../style/Home.css"
import MainHome from '../components/MainHome';

function Home() {
    return (
        <>          
            <header>
                <Navbar/>
            </header>
            <div>
                <MainHome/>
            </div>
        </>
    );
}
export default Home;