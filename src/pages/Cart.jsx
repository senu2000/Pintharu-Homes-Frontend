import React from 'react';
import ImageUploader from "../components/ImageUploader.jsx";
import PaintList from "../components/PaintList.jsx";

function Cart(props) {
    return (
        <div>
            <ImageUploader/>
            <PaintList/>
        </div>
    );
}

export default Cart;