import {Card} from "flowbite-react";
import '../css/PaintProdcutCard.css';
import Prdct1 from "../../public/Images/Products/13-removebg-preview.png";
import MainBtn from "./MainBtn.jsx";
import React from "react";

export default function PaintProdcutCard(props) {
    const img = props.item.imageData ? `data:image/jpeg;base64,${props.item.imageData}` : null;
    // console.log(props.item)

    return (
        <Card
            className="paintcardimg productcard"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={img}
        >
            {/*<img src={img} alt="" className="w-[500px] h-60 "/>*/}
            <a href="#">
                <h5 className="sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white productcardtext">
                    {props.item.name}
                </h5>
            </a>
            <div className="flex items-center justify-between productcardtext" >
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                    Rs. {props.item.price}.00
                </span>
                <a href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 productcard-button"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    );
}
