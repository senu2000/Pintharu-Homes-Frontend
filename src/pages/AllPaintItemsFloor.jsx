import React from 'react';
import "../css/AllPaintItems.css";
import MyNavBar from "../components/NavBar.jsx";
import Buttongroup from "../components/ButtonGroup.jsx";
import Icon5 from "../../public/Images/Icons/paintbrush.png";
import Categorysidebar from "../components/SideBar.jsx";
import MyFooter from "../components/Footer.jsx";
import PaintProdcutCard from "../components/PaintProdcutCard.jsx";
import Filteredpath from "../components/FilteredPath.jsx";

function AllPaintItemsFloor(props) {
    return (
        <div className="shoppageback">
            <div className="shopback">
                <div className="editnavbar">
                    <MyNavBar />
                </div>
                <div>
                    <h1 className="shopheading">SHOP<img src={Icon5} className="editicon" /></h1>
                </div>
                <div className="EditBtnGroup">
                    <Buttongroup />
                </div>
            </div>
            <div className="shopline"></div>
            <div id="content" className="shopItemsSection">
                <div className="blurproducts">
                    <Categorysidebar />
                </div>
                <div >
                    {/*<div className="editFilteredPath">*/}
                    {/*    <Filteredpath />*/}
                    {/*</div>*/}
                    <h1 className="shopProductsHeading">Floor Paints</h1>
                    <div className="xl:grid-cols-4 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 xs:flex-col productcards">
                        <PaintProdcutCard />
                        <PaintProdcutCard />
                        <PaintProdcutCard />
                        <PaintProdcutCard />
                        <PaintProdcutCard />
                        <PaintProdcutCard />
                    </div>
                </div>
            </div>
            <div><MyFooter /></div>
        </div>
    );
}

export default AllPaintItemsFloor;
