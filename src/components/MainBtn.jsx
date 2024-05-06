import React from 'react';
import { Button } from "flowbite-react";

function MainBtn(props) {
    return (
        <div>
            {/* eslint-disable-next-line react/prop-types */}
            <Button>{props.children}</Button>
        </div>
    );
}

export default MainBtn;