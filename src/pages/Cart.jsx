import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "flowbite-react";
import DeleteBtnModel from "../components/DeleteBtnModel.jsx";
import "../css/Cart.css";
import MyNavBar from "../components/NavBar.jsx";
import MyFooter from "../components/Footer.jsx";
import {Link} from "react-router-dom";

function Cart(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/cart/allCartDetails');
                // console.log('Cart items:', response.data);
                setCartItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchCartItems();
        const intervalId = setInterval(fetchCartItems, 1000);
        return () => clearInterval(intervalId);
    }, []);


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = cartItems.filter((item) =>
        item.paintDto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="f-bg">
            <MyNavBar/>
            <div className="main-content">
                <div className="overflow-x-auto m-10 justify-center content-center items-center c-table rounded-[20px]">
                    <div className="flex justify-between mt-7 ml-8 mr-8 ">
                        <div className="mr-5 self-center">
                            <input
                                type="text"
                                placeholder="Filter by name ..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="rounded-full text-center pr-2 border-blue-600 "
                            />
                        </div>
                        <div>
                            <Link to="/checkout">
                                <button className="noselect2 animatedbtn3 text-white">Checkout<span> >>> </span></button>
                            </Link>

                        </div>
                    </div>
                    <div className="justify-center content-center items-center p-8">
                        {cartItems.length === 0 ? (
                            <div className="text-center text-gray-100 pt-10 pb-[169px]">
                                No items added to the cart.
                            </div>
                        ) : (
                            <Table className="table-fixed text-center">
                                <Table.Head>
                                    <Table.HeadCell>Item Name</Table.HeadCell>
                                    <Table.HeadCell>Brand</Table.HeadCell>
                                    <Table.HeadCell>Volume</Table.HeadCell>
                                    <Table.HeadCell>Price</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {filteredData.map((item, index) => (
                                        <Table.Row key={index}
                                                   className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell>{item.paintDto.name}</Table.Cell>
                                            <Table.Cell>
                                                {item.paintDto.brand}
                                            </Table.Cell>
                                            <Table.Cell>{item.paintDto.volume} L</Table.Cell>
                                            <Table.Cell>Rs. {item.paintDto.price}.00</Table.Cell>
                                            <Table.Cell className="flex justify-center items-center">
                                                <DeleteBtnModel item={item} endpoint={"http://localhost:8080/api/cart"}
                                                                alert={"Cart Item"}/>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        )}
                    </div>
                </div>
            </div>
            <MyFooter className="footer"/>
        </div>
    );
}

export default Cart;
