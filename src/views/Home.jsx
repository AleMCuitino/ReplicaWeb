import Navbar from '../components/Navbar';
import "../style/Home.css"
import Main from '../components/Main';

function Home() {
    return (
        <>          
            <header>
                <Navbar/>
            </header>
            <div>
                <Main/>
            </div>
        </>
    );
}
export default Home;