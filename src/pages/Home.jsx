import "../css/Home.css";
import MyFooter from "../components/Footer";
import MyNavBar from "../components/NavBar.jsx";
import AdsSection from "../components/Carousel.jsx";
import SearchBar from "../components/SearchBar.jsx";
import PaintProdcutCard from "../components/PaintProdcutCard.jsx";
import React, {useEffect, useRef} from "react";
import ProjectCountSection from "../components/ProjectCountSection.jsx";
import {Button} from "flowbite-react";


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
                        delay: 0.5,
                    }}
                >
                    Hello
                </motion.div>



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
                    <button className="noselect animatedbtn1">Show More<span className="animatedbtn"> >>></span>
                    </button>
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
                            <div className="projectssection">
                                <div className="projectsectiontitle1">DISCOVER</div>
                                <div className="projectsectiontitle2"> Painted Masterpieces</div>
                                <p className="text-black">Explore our painted wonders in this showcase of vibrant
                                    transformations.
                                    Witness how we bring imagination to life with each stroke. Our projects stand
                                    as testaments to our dedication to excellence and client satisfaction.</p>
                                <div className="/">
                                    <button className="noselect animatedbtn2">View Projects<span
                                        className="animatedbtn"> >>></span></button>
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
                            <button className="noselect animatedbtn2">Calculate<span className="animatedbtn"> >>></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div>hdbbweb</div>*/}


            <div><MyFooter/></div>

        </>
    );
}
