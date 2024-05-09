import {Carousel} from "flowbite-react";
import "../css/Carousel.css";
import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation, color} from "framer-motion";

import crsl1 from "../../public/Images/Carousel1.jpg";
import crsl2 from "../../public/Images/Carousel2.jpg";
import crsl3 from "../../public/Images/Carousel3.jpg";
import crsl4 from "../../public/Images/Carousel4.jpg";

export default function AdsSection() {
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

        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">

            <div className="homecaption">
                <motion.div className="hometitle1"
                            variants={{
                                hidden: {opacity: 0, y: 20},
                                visible: {opacity: 1, y: 0},
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration: 0.5, delay: 0.5}}
                            ref={ref1}
                >BRINGING
                </motion.div>
                <div className="hometitlespace"></div>
                <div className="hometitle2">LIFE</div>
                <div className="hometitlespace"></div>
                <motion.div className="hometitle3"
                            variants={{
                                hidden: {opacity: 0, y: -20},
                                visible: {opacity: 1, y: 0},
                            }}
                            initial="hidden"
                            animate={mainControls}
                            transition={{duration: 0.5, delay: 0.5}}
                            ref={ref1}
                >TO YOUR WALLS
                </motion.div>

            </div>
            <motion.div
                className="textanim1"
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={slideControls}
                transition={{ duration: 0.8, ease: "easeIn" }}
                ref={ref2}
            />
<div>
            <Carousel>
                <img src={crsl1} className="/" alt="Logo"/>
                <img src={crsl2} className="/" alt="Logo"/>
                <img src={crsl3} className="/" alt="Logo"/>
                <img src={crsl4} className="/" alt="Logo"/>
            </Carousel>
</div>
        </div>

    );
}
