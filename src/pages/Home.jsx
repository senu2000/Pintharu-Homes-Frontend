import "../css/Home.css";
import MyFooter from "../components/Footer";
import MyNavBar from "../components/NavBar.jsx";
import AdsSection from "../components/Carousel.jsx";


export default function Home() {
    return (
        <>
            <div className="homeback">
                <div className="editnavbar">
                    <MyNavBar/>
                </div>
                <div className="middlecontent">
                    <div className="editadssection">
                        <AdsSection/>
                    </div>
                </div>
            </div>
            <div><MyFooter/></div>

        </>
    );
}
