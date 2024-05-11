import React, {useState} from "react";
import "../css/SearchBar.css";
import AnimatedTextSearch from "../components/TypingAnimation.jsx";


function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };


    return (
        <div className="editSearchBar">
            <div className="searchabovetext"><AnimatedTextSearch/></div>
            <div className="searchbarline"></div>
            <form onSubmit={handleSubmit} className="searchbar-main">

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
