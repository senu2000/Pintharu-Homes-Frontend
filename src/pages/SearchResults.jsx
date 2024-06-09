import React from 'react';
import "../css/SearchResults.css";
import MyNavBar from "../components/NavBar.jsx";
import MyFooter from "../components/Footer.jsx";
import PaintProdcutCard from "../components/PaintProdcutCard.jsx";
import SearchGif from "../../public/Images/search.gif"; // Import the GIF

function SearchResults(props) {
    return (
        <div className="searchresultspageback">
            <div className="searchresultsback">
                <div className="editnavbar">
                    <MyNavBar/>
                </div>
                <div>
                    <img src={SearchGif} alt="search animation" className="searchgif" />
                    <h1 className="searchresultsheading">Showing Results for</h1>
                    <h2 className="searchresultsheading2">"Brilliant White"</h2>
                </div>
            </div>
            <div className="shopline"></div>
            <div className="xl:grid-cols-4 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 xs:flex-col productcards searchresultsproducts">
                <PaintProdcutCard />
                <PaintProdcutCard />
                <PaintProdcutCard />
                <PaintProdcutCard />
                <PaintProdcutCard />
                <PaintProdcutCard />
            </div>
            <div><MyFooter/></div>
        </div>
    );
}

export default SearchResults;
