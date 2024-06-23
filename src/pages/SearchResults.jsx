import React, {useEffect, useState} from 'react';
import "../css/SearchResults.css";
import MyNavBar from "../components/NavBar.jsx";
import MyFooter from "../components/Footer.jsx";
import PaintProdcutCard from "../components/PaintProdcutCard.jsx";
import SearchGif from "../../public/Images/search.gif";
import {useLocation} from "react-router-dom";
import axios from "axios";

function SearchResults(props) {
    const [paints, setPaints] = useState([]);
    const query = useQuery();
    const searchTerm = query.get("search");

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/paint/name/${searchTerm}`);
                // console.log(response.data)
                setPaints(response.data);
            } catch (error) {
                console.error('Error fetching paints:', error);
            }
        };

        fetchPaints();
        const intervalId = setInterval(fetchPaints, 1000);
        return () => clearInterval(intervalId);
    },[searchTerm]);


    return (
        <div className="searchresultspageback">
            <div className="searchresultsback">
                <div className="editnavbar">
                    <MyNavBar/>
                </div>
                <div>
                    <img src={SearchGif} alt="search animation" className="searchgif" />
                    <h1 className="searchresultsheading">Showing Results for</h1>
                    <h2 className="searchresultsheading2">"{searchTerm}"</h2>
                    {/*{noResult()}*/}
                </div>
            </div>
            <div className="shopline mt-9 mb-[70px]"></div>

            <div className="xl:grid-cols-4 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 xs:flex-col productcards searchresultsproducts">
                {paints.map((item, index) => (
                    <div key={index}>
                        <PaintProdcutCard item={item}/>
                    </div>
                ))}
            </div>
            <div><MyFooter/></div>
        </div>
    );
}

export default SearchResults;
