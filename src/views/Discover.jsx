import Navbar from '../components/Navbar';
import MainDiscover from '../components/MainDiscover';
import Footer from '../components/Footer';
import "../style/Home.css"

function Discover() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>
        <MainDiscover />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Discover;