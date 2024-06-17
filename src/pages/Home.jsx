import "../css/Home.css";
import MyFooter from "../components/Footer";
import MyNavBar from "../components/NavBar.jsx";
import AdsSection from "../components/Carousel.jsx";
import SearchBar from "../components/SearchBar.jsx";
import PaintProdcutCard from "../components/PaintProdcutCard.jsx";

import React, {useEffect, useRef} from "react";
import ProjectCountSection from "../components/ProjectCountSection.jsx";
import MainBtn from "../components/MainBtn.jsx";
import BrandsLogo from "../../public/Images/brandsLogos.png";
import ContactUs from "../components/ContactUs.jsx";
import Img1 from "../../public/Images/Logo.png";
import {useAnimation, useInView, motion} from "framer-motion";




export default function Home() {
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
            <div className="homeback">
                <div className="editnavbar">
                    <MyNavBar/>
                </div>
                <div className="middlecontent">
                    <div className="editadssection">
                        <AdsSection/>
                    </div>
                </div>
                <div className="editsearchbar">

                    <SearchBar/></div>
            </div>
            <div className="homeproductssection">
                <p className="homeproducttitle">FEATURED PRODUCTS</p>
                <p className="homeproductsubtitle">Explore Our Selection of Featured Products</p>
                {/*<div className="productssectionline"></div>*/}
                <div className="paintproductcards">
                    <tr>
                        <td className="paintcard1"><PaintProdcutCard/></td>
                        <td className="paintcard2"><PaintProdcutCard/></td>
                        <td className="paintcard3"><PaintProdcutCard/></td>
                        <td className="paintcard4"><PaintProdcutCard/></td>
                    </tr>
                </div>
                <div className="container">
                    {/*<button className="noselect animatedbtn1">Show More<span className="animatedbtn"> >>></span>*/}
                    {/*</button>*/}
                    <MainBtn>Show More</MainBtn>
                </div>
            </div>
            <div>
                <div>
                    <ProjectCountSection/>
                </div>
                <div className="projectshomesection">
                    <div className="projectssectiontop"></div>
                    <tr>
                        <td className="td"></td>
                        <td className="td"></td>
                        <td className="td">
                            <div
                                className="projectssection"
                            >
                                <div className="projectsectiontitle1">DISCOVER</div>
                                <div className="projectsectiontitle2"> Painted Masterpieces</div>
                                <p className="text-black">Explore our painted wonders in this showcase of vibrant
                                    transformations.
                                    Witness how we bring imagination to life with each stroke. Our projects stand
                                    as testaments to our dedication to excellence and client satisfaction.</p>
                                <div className="/">
                                    {/*<button className="noselect animatedbtn2">View Projects<span*/}
                                    {/*    className="animatedbtn"> >>></span></button>*/}
                                    <MainBtn>View Projects</MainBtn>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <div className="quotationhomesection">
                        <div className="quotationsectiontitle">Calculate Your Paint Project Cost</div>
                        <div className="quotationgeneratorline"></div>
                        <div className="quotationsectiontext">Discover precision in painting costs with our Quotation
                            Generator! Quickly input wall dimensions and receive accurate estimates, empowering
                            confident project planning. Start now to transform your space with certainty.
                        </div>
                        <div className="container2">
                            {/*<button className="noselect animatedbtn2">Calculate<span className="animatedbtn"> >>></span>*/}
                            {/*</button>*/}
                            <MainBtn>Calculate</MainBtn>
                        </div>
                    </div>
                    {/*<CalendlyWidget/>*/}
                    {/*<Test2/>*/}
                </div>
            </div>

            <div className="aboutuscontactus">
                        <div className="aboutus">
                            <h1 className="aboutusheading">ABOUT US</h1>
                            <div className="aboutusline"></div>
                            <p className="aboutuspara">Welcome to Pintharu Homes, a trusted name in the paint industry with a legacy of excellence. With five branches across <b>Kiribathgoda, Gampaha, Thalaahena, Udugampola, Mulleriyawa </b>, we proudly offer a diverse range of premium paints, ensuring the perfect solution for every need. Our expertise extends beyond supplying top-quality paints; we also specialize in comprehensive painting projects for homes, delivering exceptional craftsmanship and stunning results. Our commitment to quality, customer satisfaction, and innovative solutions makes us the preferred choice for all your painting needs. Join us in adding color to your world!</p>
                                <div className="BrandsLogoEdit">
                                    <img src={BrandsLogo} alt="Logo" />
                                </div>
                        </div>
                        <div className="contactus">
                            <h1 className="contactusheading">STAY CONNECT</h1>
                            <div className="edithomeContactUs">
                            <ContactUs/>
                            </div>
                        </div>
            </div>


            <div><MyFooter/></div>
        </>
    );
}
