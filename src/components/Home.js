import Navbar from './Navbar';

function Home() {
    return (
        <div className="home">            
            <header>
                <Navbar/>
            </header>
            <main>
                <h1 className="mt-5">Feel the music</h1>
            </main>
        </div>
    );
}
export default Home;