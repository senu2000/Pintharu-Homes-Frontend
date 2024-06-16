import {Button, Card, Carousel, Modal} from "flowbite-react";
import '../css/PaintProdcutCard.css';
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import {displayErrorToast, displaySuccessToast, displayWarningToast} from "./ToastProvider.jsx";
import axios from "axios";

export default function PaintProdcutCard(props) {
    const img = props.item.imageData ? `data:image/jpeg;base64,${props.item.imageData}` : null;

    const quantity = props.item.quantity;

    const [openModal, setOpenModal] = useState(false);

    async function addToCart() {
        const token = sessionStorage.getItem('token');
        if (!token) {
            displayErrorToast("Please login to system first");
            return;
        }

        try {
            const response = await axios.get(
                `http://localhost:8080/api/cart/addToCart/${props.item.id}`,
                {},
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log(response.data);

            if (response.data === null) {
                displaySuccessToast("Paint item already added to cart");
            }else if (response.data) {
                displaySuccessToast("Paint item added to cart successfully");
            } else {
                displayWarningToast("Paint item already added to cart");
                // console.error('Failed to add product to cart');
            }
        } catch (error) {
            console.error('problem with the request:', error);
        }
    }

    const stockStatus = () => {
        if (quantity === 0) {
            return (
                <div
                    className="flex justify-center text-center text-[10px] -mt-3 bg-red-300 w-16 lg:ml-16 ml-3 rounded-full">
                    Out of Stock
                </div>
            );
        } else if (quantity <= 15) {
            return (
                <div
                    className="flex justify-center text-center text-[10px] -mt-3 bg-amber-200 w-16 lg:ml-16 ml-5 rounded-full">
                    Low Stock
                </div>
            );
        } else {
            return (
                <div
                    className="flex justify-center text-center text-[10px] -mt-3 bg-green-200 w-16 lg:ml-16 ml-3 rounded-full">
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
                <button
                    onClick={() => setOpenModal(true)}
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white
                    hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600
                    dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 productcard-button">
                    View Product &nbsp; <FontAwesomeIcon icon={faEye}/>
                </button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header className="flex justify-center items-center text-center">
                        <div className="w-full flex justify-center items-center text-center font-bold text-3xl">
                            {props.item.name}
                        </div>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="grid grid-cols-2">
                            <div className="flex justify-center">
                                {/*space-y-6*/}
                                <div className="">
                                    <div className="">
                                        {/*h-56 sm:h-64 xl:h-80 2xl:h-96*/}
                                        <img src={img} alt="" className="rounded-[20px]  h-52 lg:h-44 sm:mt-12 lg:mt-0 shadow-md"/>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <div className=" relative overflow-x-auto shadow-md sm:rounded-lg p-6">
                                    <table className="table-auto">
                                        <tbody>
                                        <tr className="m-12">
                                            <td>Brand </td>
                                            <td>: <span className="font-bold">{props.item.brand}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Available in stoke </td>
                                            <td>: <span className="font-bold">{props.item.quantity}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Category </td>
                                            <td>: <span className="font-bold">{props.item.category}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Volume </td>
                                            <td>: <span className="font-bold">{props.item.volume ? `${props.item.volume} L` : '-'}</span></td>
                                        </tr>
                                        <tr>
                                            <td>Price </td>
                                            <td>: Rs. <span className="font-bold">{props.item.price}.00</span></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    {/*Brand : <span className="font-bold">{props.item.brand}</span> <br/>*/}
                                    {/*Available stoke : <span className="font-bold">{props.item.quantity}</span> <br/>*/}
                                    {/*Category : <span className="font-bold">{props.item.category}</span> <br/>*/}
                                    {/*Volume: <span className="font-bold">*/}
                                    {/*{props.item.volume ? `${props.item.volume} L` : '-'}</span> <br/>*/}
                                    {/*Price : Rs. <span className="font-bold">{props.item.price}.00</span>*/}
                                </div>
                                {/*{props.item.description}*/}
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className="justify-center">
                        <button className="w-44 productcard-button p-2 rounded-[10px]" onClick={addToCart}>
                            Add To Cart &nbsp; <FontAwesomeIcon icon={faCartPlus}/>
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        </Card>
    );
}
