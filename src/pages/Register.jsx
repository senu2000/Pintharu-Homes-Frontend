import React, {useEffect, useRef, useState} from 'react';
import SignupForm from '../components/Signup';
import MyNavBar from "../components/NavBar.jsx";
import {motion, useInView, useAnimation} from "framer-motion";
import Img1 from "../../public/Images/Logo.png";
import RegisterGif from "../../public/Images/register.png";
import MyFooter from "../components/Footer.jsx";

function Register(props) {

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
        <>
            {/*<div className="SignupBack">*/}
            {/*    <SignupForm/>*/}
            {/*</div>*/}
            <div className="registerpageback">
                <div className="loginback">
                    <div className="editnavbar">
                        <MyNavBar/>
                    </div>
                    {/*<div className="shopline"></div>*/}
                    <div className="logingifandform">
                        {/*<div className="editregistergif"><img src={RegisterGif} alt="register animation" className="registergif"/></div>*/}
                        <div className="welcomeandlogosection">
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

                        <div className="editloginformdiv"><SignupForm/></div>
                    </div>
                </div>

                <div><MyFooter/></div>
            </div>
        </>
    );
}

export default Register;