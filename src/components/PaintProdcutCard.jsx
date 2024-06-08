import {Card} from "flowbite-react";
import '../css/PaintProdcutCard.css';
import React from "react";

export default function PaintProdcutCard(props) {
    const img = props.item.imageData ? `data:image/jpeg;base64,${props.item.imageData}` : null;

    const quantity = props.item.quantity;

    const stockStatus = () => {
        if (quantity === 0) {
            return (
                <div className="flex justify-center text-center text-[10px] -mt-3 bg-red-300 w-16 lg:ml-16 ml-3 rounded-full">
                    Out of Stock
                </div>
            );
        } else if (quantity <= 15) {
            return (
                <div className="flex justify-center text-center text-[10px] -mt-3 bg-amber-200 w-16 lg:ml-16 ml-5 rounded-full">
                    Low Stock
                </div>
            );
        } else {
            return (
                <div className="flex justify-center text-center text-[10px] -mt-3 bg-green-200 w-16 lg:ml-16 ml-3 rounded-full">
                    In Stock
                </div>
            );
        }
    };

    return (
        <Card
            className="paintcardimg productcard"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={img}
        >
            <h5 className="sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white productcardtext">
                {props.item.name} <span className="text-[15px]">( {props.item.volume} ltr )</span>
            </h5>
            {stockStatus()}
            <div className="flex items-center justify-between productcardtext">
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
