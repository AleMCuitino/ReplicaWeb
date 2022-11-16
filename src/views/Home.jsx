import Navbar from '../components/Navbar';
import "../style/Home.css"
import Main from '../components/Main';

function Home() {
    return (
        <>
        <body>           
            <header>
                <Navbar/>
            </header>
            <div>
                <Main/>
            </div>
        </body>     
        </>
    );
}
export default Home;