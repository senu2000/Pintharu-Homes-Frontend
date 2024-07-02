import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyNavBar from "../components/NavBar.jsx";
import {Table} from "flowbite-react";
import MyFooter from "../components/Footer.jsx";
import "../css/Orders.css";

function Orders(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const fetchOrderItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/order/byId',{
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                });
                // console.log('Order items:', response.data);
                setOrderItems(response.data);
            } catch (error) {
                console.error('Error fetching cart items:', error);
            }
        };

        fetchOrderItems();
        const intervalId = setInterval(fetchOrderItems, 1000);
        return () => clearInterval(intervalId);
    }, []);


    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = orderItems.filter((item) =>
        item.paintDto.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="fo-bg">
            <MyNavBar/>
            <div className="main-content">
                <div className="overflow-x-auto m-10 justify-center content-center items-center c-table rounded-[20px]">
                    <div className="flex justify-between mt-7 ml-8 mr-8 ">
                        <div className="ml-0.5 self-center">
                            <h1 className="text-gray-300 font-light text-2xl">My Orders &nbsp; >>></h1>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Filter by name ..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="rounded-full text-center pr-2 border-blue-600 "
                            />
                        </div>
                    </div>
                    <div className="justify-center content-center items-center p-8">
                        {orderItems.length === 0 ? (
                            <div className="text-center text-gray-100 pt-10 pb-[169px]">
                                No orders you have made.
                            </div>
                        ) : (
                            <Table className="table-fixed text-center">
                                <Table.Head>
                                    <Table.HeadCell>Ordered Item</Table.HeadCell>
                                    <Table.HeadCell>Buyer Name</Table.HeadCell>
                                    <Table.HeadCell>Address</Table.HeadCell>
                                    <Table.HeadCell>Contact No</Table.HeadCell>
                                    <Table.HeadCell>Purchased <br/> Amount</Table.HeadCell>
                                    <Table.HeadCell>Total Price</Table.HeadCell>
                                    <Table.HeadCell>Status</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {filteredData.map((item, index) => (
                                        <Table.Row key={index}
                                                   className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell>{item.paintDto.name} ({item.paintDto.volume}L) <br/>
                                                ({item.paintDto.brand})</Table.Cell>
                                            <Table.Cell>
                                                {item.orderFullName}
                                            </Table.Cell>
                                            <Table.Cell>{item.orderFullAddress}</Table.Cell>
                                            <Table.Cell>{item.orderContactNo}</Table.Cell>
                                            <Table.Cell>{item.orderAmount / item.paintDto.price}</Table.Cell>
                                            <Table.Cell>Rs. {item.orderAmount}.00</Table.Cell>
                                            <Table.Cell>{
                                                item.orderStatus === "Placed" ? (
                                                    <div
                                                        className="flex justify-center self-center text-center text-[10px] bg-amber-200 w-16 lg:ml-12 ml-5 rounded-full">
                                                        Placed
                                                    </div>
                                                ): (
                                                    <div
                                                        className="flex justify-center self-center text-center text-[10px] bg-green-200 w-16 lg:ml-12 ml-5 rounded-full">
                                                        Dispatched
                                                    </div>
                                                )
                                            }</Table.Cell>
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

export default Orders;