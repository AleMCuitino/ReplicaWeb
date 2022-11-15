import Navbar from './Navbar';
import "../style/Home.css"

function Home() {
    return (
        <>
        <body>           
            <header>
                <Navbar/>
            </header>
            <main>
                <h1 className="mt-5">Feel the music</h1>
            </main>
        </body>     
        </>
    );
}
export default Home;