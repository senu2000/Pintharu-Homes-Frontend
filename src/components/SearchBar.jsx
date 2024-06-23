import React, { useState } from "react";
import "../css/SearchBar.css";
import AnimatedTextSearch from "../components/TypingAnimation.jsx";
import { useNavigate } from "react-router-dom";

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/searchResults?search=${searchTerm}`);
    };

    return (
        <div className="editSearchBar">
            <div className="searchabovetext"><AnimatedTextSearch /></div>
            <div className="searchbarline"></div>
            <form className="searchbar-main" onSubmit={handleSubmit}>
                <div className="searchbar-container">
                    <input
                        type="text"
                        placeholder="Explore products..."
                        value={searchTerm}
                        onChange={handleChange}
                        className="searchbar-input"
                    />
                    <button type="submit" className="searchbar-button">Search</button>
                </div>
            </form>
        </div>
    );
}

export default SearchBar;

