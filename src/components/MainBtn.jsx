import React from 'react';
import "../css/MainBtn.css";
function MainBtn(props) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <button className="noselect animatedbtn2">{props.children}<span
                className="animatedbtn"> >>></span></button>
        </div>
    );
}

export default MainBtn;