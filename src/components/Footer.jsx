import "../style/Footer.css";
import Twitter from "../assets/images/twitter.svg";
import Facebook from "../assets/images/facebook.svg";


function Footer() {
    return (
        <>
        <footer className="">
            <div className="footer-cont d-flex justify-content-around align-items-center">
                <p className="text-footer about">About us</p>
                <p className="text-footer contact">Contact</p>
                <p className="text-footer twitter"><img className="img-fluid pe-2" width="20px"src={Twitter} alt="twitter logo"/>Twitter</p>
                <p className="text-footer face"><img className="img-fluid pe-2" width="20px"src={Facebook} alt="facebook logo"/>Facebook</p>
            </div>
        </footer>
        </>    
    );
}
export default Footer;