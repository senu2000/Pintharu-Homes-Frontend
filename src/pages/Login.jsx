import React, {useEffect, useRef} from 'react';
import Loginform from "../components/Loginform";
import MyNavBar from "../components/NavBar.jsx";
import MyFooter from "../components/Footer.jsx";
import Img1 from "../../public/Images/Logo.png";
import {motion, useInView, useAnimation} from "framer-motion";
import LoginGif from "../../public/Images/login.gif";

function Login(props) {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const isInView1 = useInView(ref1);
    const isInView2 = useInView(ref2);
    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if (isInView1) {
            mainControls.start("visible");
        } else {
            mainControls.start("hidden");
        }
    }, [isInView1, mainControls]);

    useEffect(() => {
        if (isInView2) {
            slideControls.start("visible");
        } else {
            slideControls.start("hidden");
        }
    }, [isInView2, slideControls]);

    return (

        <div className="loginpageback">
            <div className="loginback">
                <div className="editnavbar">
                    <MyNavBar/>
                </div>
                <div>
                    <motion.div
                        className="loginheading"
                        variants={{
                            hidden: {opacity: 0, y: 20},
                            visible: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.5}}
                        ref={ref1}
                    >
                        Welcome to
                    </motion.div>
                    <motion.div
                        variants={{
                            hidden: {opacity: 0, y: -20},
                            visible: {opacity: 1, y: 0},
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{duration: 0.5, delay: 0.5}}
                        ref={ref1}
                    >
                        <img src={Img1} className="loginheadinglogo"/>
                    </motion.div>
                </div>
            </div>
            <div className="shopline"></div>
            <div className="logingifandform">
                <div className="editlogingif"><img src={LoginGif} alt="login animation" className="logingif"/></div>
                <div className="editloginformdiv"><Loginform onLoginSuccess={props.onLoginSuccess}/></div>
            </div>
            <div><MyFooter/></div>
        </div>
    );
}

export default Login;
