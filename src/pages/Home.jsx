import "../css/Home.css";
import MyFooter from "../components/Footer";
import MyNavBar from "../components/NavBar.jsx";
import AdsSection from "../components/Carousel.jsx";
import SearchBar from "../components/SearchBar.jsx";
import PaintProdcutCard from "../components/PaintProdcutCard.jsx";
import React from "react";
import {Button} from "flowbite-react";
import OutlinedButtons from "../components/MainBtn.jsx";


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
                <div className="editsearchbar">

                    <SearchBar/></div>
            </div>
            <div className="homeproductssection">
                <p className="homeproducttitle">FEATURED PRODUCTS</p>
                <p className="homeproductsubtitle">Explore Our Selection of Featured Products</p>
                <div className="paintproductcards">
                    <tr>
                        <td className="paintcard1"><PaintProdcutCard/></td>
                        <td className="paintcard2"><PaintProdcutCard/></td>
                        <td className="paintcard3"><PaintProdcutCard/></td>
                        <td className="paintcard4"><PaintProdcutCard/></td>
                    </tr>
                </div>
                <div className="">
                <button type="submit" className="exploremorebtn">Explore More</button>
                </div>
                </div>

            <div><MyFooter/></div>

        </>
    );
}
