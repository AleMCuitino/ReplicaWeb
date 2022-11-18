import Navbar from '../components/Navbar';
import MainJoin from '../components/MainJoin';
import Footer from '../components/Footer';
import "../style/Join.css"

function Join() {
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

export default Join;