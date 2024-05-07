import { Carousel } from "flowbite-react";
import "./css files/Carousel.css";
import React from "react";

import crsl1 from "../../public/Images/Carousel1.jpg";
import crsl2 from "../../public/Images/Carousel2.jpg";
import crsl3 from "../../public/Images/Carousel3.jpg";
import crsl4 from "../../public/Images/Carousel4.jpg";

export default  function AdsSection() {
    return (
        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
            <div>
                <table>
                    <tr className="homecaption1">Paint</tr>
                    <tr className="homecaption2">Your Dream Home</tr>
                </table>
            </div>

            <Carousel>
                <img src={crsl1} className="/" alt="Logo" />
                <img src={crsl2} className="/" alt="Logo" />
                <img src={crsl3} className="/" alt="Logo" />
                <img src={crsl4} className="/" alt="Logo" />
            </Carousel>
        </div>
    );
}
