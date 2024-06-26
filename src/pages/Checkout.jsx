import React, {useEffect, useState} from 'react';
import "../css/Checkout.css";
import MyFooter from "../components/Footer.jsx";
import {Label, Table, TextInput} from "flowbite-react";
import axios from "axios";
import MyNavBar from "../components/NavBar.jsx";

function Checkout(props) {
    const [username, setUsername] = useState('');
    const [phone_number, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');

    const [paint, setPaints] = useState([]);
    // const [orderdQuantity, setOrderedQuantity] = useState('1');
    const [quantities, setQuantities] = useState({});
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        fetchUserDetails();
        fetchCartPaints();
    }, []);

    useEffect(() => {
        calculateTotalCost()
    }, [quantities, paint]);

    const fetchUserDetails = async () => {
        const userId = localStorage.getItem("userId");
        const response = await axios.get(`http://localhost:8080/api/user/byId/${userId}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        setUsername(response.data.username);
        setPhoneNo(response.data.phone_number);
        setAddress(response.data.address);
    }

    const fetchCartPaints = async () => {
        try {
            const response2 = await axios.get('http://localhost:8080/api/cart/checkoutDetails/false/0', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            // console.log(response2.data)
            setPaints(response2.data);


            const initialQuantities = response2.data.reduce((acc, item) => {
                acc[item.id] = 1;
                return acc;
            }, {});
            setQuantities(initialQuantities);
        } catch (error) {
            console.error('Error fetching paints:', error);
        }
    };

    const handleQuantityChange = (itemId, newQuantity) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [itemId]: newQuantity
        }));
    };

    const calculateTotalCost = () => {
        const total = paint.reduce((sum, item) => {
            const quantity = quantities[item.id] || 1;
            return sum + (quantity * item.price);
        }, 0);
        setTotalCost(total);
    };

    return (
        <div className="checkout-bg">
            <MyNavBar/>
            <div className="checkout-content flex-col lg:grid lg:grid-cols-2">
                <div className="checkout-content-l m-5 p-8 rounded-[20px]">
                    <form>
                        <div className="space-y-6">
                            <h3 className="text-2xl font-light text-gray-300 dark:text-white flex items-center justify-center">
                                Delivery Details</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="username" value="Email" className="font-light text-gray-300"/>
                                </div>
                                <TextInput
                                    id="username"
                                    placeholder="user@gmail.com"
                                    name="username"
                                    type="text"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="phone_number" value="Phone No"
                                           className="font-light text-gray-300"/>
                                </div>
                                <TextInput id="phone_number"
                                           type="text"
                                           name="phone_number"
                                           placeholder="07xxxxxxxx"
                                           value={phone_number}
                                           onChange={(e) => setPhoneNo(e.target.value)}
                                           required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="address" value="Delivery Address"
                                           className="font-light text-gray-300"/>
                                </div>
                                <TextInput id="address"
                                           type="text"
                                           name="address"
                                           placeholder="5/14, Ganga Addarawatta, Galle"
                                           value={address}
                                           onChange={(e) => setAddress(e.target.value)}
                                           required/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="checkout-content-l m-5 p-8 rounded-[20px]  justify-center items-center">
                    <h3 className="text-2xl font-light text-gray-300 dark:text-white flex items-center justify-center mb-5">
                        Order Details</h3>
                    <Table className="table-fixed">
                        <Table.Head>
                            <Table.HeadCell>Item</Table.HeadCell>
                            <Table.HeadCell>Brand</Table.HeadCell>
                            <Table.HeadCell>Volume (L)</Table.HeadCell>
                            <Table.HeadCell>Quantity</Table.HeadCell>
                            <Table.HeadCell>Price (LKR)</Table.HeadCell>
                        </Table.Head>
                        <Table.Body className="divide-y">
                            {paint.map((item, index) => (
                                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="">{item.name}</Table.Cell>
                                    <Table.Cell>{item.brand}</Table.Cell>
                                    <Table.Cell>{item.volume}</Table.Cell>
                                    <Table.Cell>
                                        {/*<select id="orderdQuantity"*/}
                                        {/*        className="w-full rounded"*/}
                                        {/*        name="orderdQuantity"*/}
                                        {/*        value={orderdQuantity}*/}
                                        {/*        onChange={(e) => setOrderedQuantity(e.target.value)}*/}
                                        {/*        required>*/}
                                        {/*    <option value="1">1</option>*/}
                                        {/*    <option value="2">2</option>*/}
                                        {/*    <option value="3">3</option>*/}
                                        {/*    <option value="4">4</option>*/}
                                        {/*    <option value="5">5</option>*/}
                                        {/*</select>*/}


                                        <select
                                            id={`quantity-${item.id}`}
                                            className="w-full rounded h-9 self-center"
                                            name="quantity"
                                            value={quantities[item.id]}
                                            onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                                            required
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Table.Cell>
                                    <Table.Cell>
                                        {/*{orderdQuantity * item.price}*/}
                                        {quantities[item.id] * item.price}
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <div className="checkout-content-l justify-center text-center mt-4 mb-8 lg:ml-44 lg:mr-44 rounded-[15px] m-5 p-4">
                <div className="inline-flex items-baseline text-gray-300 ">
                    <p className="self-center font-light">Total Cost :&nbsp;&nbsp;&nbsp; </p>
                    <span className="text-3xl self-center font-bold"> Rs. {totalCost.toFixed(2)}/= </span>
                </div>
                <p className="text-red-200 text-sm font-light">( Note : Check again your delivery details and cart items before placing the order. )</p>
            </div>
            <MyFooter className="footer-checkout"/>
        </div>
    );
}

export default Checkout;