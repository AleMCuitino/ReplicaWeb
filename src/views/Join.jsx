import Navbar from '../components/Navbar';
import MainJoin from '../components/MainJoin';
import Footer from '../components/Footer';
import "../style/Home.css"

function Discover() {
    return (
    <>
        <header>
            <Navbar />
        </header>
        <div>
            <MainJoin />
        </div>
        <div>
            <Footer />
        </div>
    </>
    )
}

export default Discover;