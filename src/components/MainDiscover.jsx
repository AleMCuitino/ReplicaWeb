import "../style/Discover.css"
import covers from '../assets/images/covers.jpg'
import micro from '../assets/images/microphone.svg';
import albums from '../assets/images/albums.svg';
import more from '../assets/images/more.svg'

function MainDiscover() {
    return (
        <>
            <div className="discover">
                <div className="text-discover">
                    <h1 className="title-discover mt-5">Discover new music</h1>
                    <div className="icons d-flex justify-content-between">
                        <div className="icon img-fluid">
                            <img className="microphone img-fluid  mt-2" src={micro} alt="microphone"/>
                            <p className="icon-text mb-0 mt-1">Charts</p>
                        </div>
                        <div className="icon img-fluid">
                            <img className="albums img-fluid  mt-2" src={albums} alt="albums"/>
                            <p className="icon-text mb-0 mt-1">Charts</p>
                        </div>
                        <div className="icon img-fluid">
                            <img className="more img-fluid  mt-2" src={more} alt="more"/>
                            <p className="icon-text mb-0 mt-1">Charts</p>
                        </div>
                    </div>
                    <p className="description">Be joining you can benefit by listening to the latest albums released</p>                    
                </div>
                <img className="covers" src={covers} alt="muisc covers"/>
            </div>
        </>    
    );
}
export default MainDiscover;