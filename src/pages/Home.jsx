import "../css/Home.css";
import MyFooter from "../components/Footer";
import MyNavBar from "../components/NavBar.jsx";
import AdsSection from "../components/Carousel.jsx";
import {motion} from "framer-motion";

export default function Home() {
    return (
        <>
            <div className="homeback">
                <div className="editnavbar">
                    <MyNavBar/>
                </div>
                <motion.div
                    className="w-32 h-32 bg-blue-700"
                    initial={{
                        x: 300,
                    }}
                    animate={{
                        x: 0,
                    }}
                    transition={{
                        delay:0.5,
                    }}
                >
                    Hello
                </motion.div>
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
