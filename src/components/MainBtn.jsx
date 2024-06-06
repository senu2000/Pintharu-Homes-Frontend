import React from 'react';
import "../css/Home.css";
import { Button } from "flowbite-react";

function MainBtn(props) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <button className="noselect animatedbtn2">{props.children}<span className="animatedbtn"> >>></span> </button>
        </div>
    );
}

export default MainBtn;