import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyNavBar from "./NavBar.jsx";
import {Table} from "flowbite-react";
import MyFooter from "./Footer.jsx";
import {displaySuccessToast} from "./ToastProvider.jsx";

function SideNavbarOrderContent(props) {

    const [searchTerm, setSearchTerm] = useState("");
    const [orderItems, setOrderItems] = useState([]);

    useEffect(() => {
        const fetchOrderItems = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/order/getAllOrders');
                console.log('Order items:', response.data);
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
        item.paintDto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.orderStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.orderFullName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const changeStatus = async (orderId) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/order/markOrderAsDispatched/${orderId}`);
            displaySuccessToast("Order status changed successfully.");
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    }

    return (
        <div className="bg-orange-50 h-full rounded-l-[150px]">
            <div className="main-content -mt-12">
                <div className="overflow-x-auto m-10 pt-9 justify-center content-center items-center c-table rounded-[20px]">
                    <div className="flex justify-end mt-7 ml-8 mr-1 mb-5">
                        <div>
                            <input
                                type="text"
                                placeholder="Filter by name or status .. "
                                value={searchTerm}
                                onChange={handleSearch}
                                className="rounded-full text-center text-sm pr-2 border-blue-600 "
                            />
                        </div>
                    </div>
                    <div className="">
                        {orderItems.length === 0 ? (
                            <div className="text-center text-gray-100 pt-10 pb-[169px]">
                                No orders to review.
                            </div>
                        ) : (
                            <Table className="table-fixed ">
                                <Table.Head>
                                    <Table.HeadCell>Ordered Item</Table.HeadCell>
                                    <Table.HeadCell>Buyer Name</Table.HeadCell>
                                    <Table.HeadCell>Address</Table.HeadCell>
                                    <Table.HeadCell>Contact No</Table.HeadCell>
                                    <Table.HeadCell>Purchased Amount</Table.HeadCell>
                                    <Table.HeadCell>Total Price</Table.HeadCell>
                                    <Table.HeadCell>Status</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {filteredData.map((item, index) => (
                                        <Table.Row key={index}
                                                   className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell>{item.paintDto.name} ({item.paintDto.volume}L) <br/>
                                                ( {item.paintDto.brand} )</Table.Cell>
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
                                                        className="flex justify-center self-center text-center
                                                        text-[10px] bg-amber-200 w-16 lg:mr-32 rounded-full">
                                                        Placed
                                                    </div>
                                                ): (
                                                    <div
                                                        className="flex justify-center self-center text-center
                                                        text-[10px] bg-green-200 w-16 lg:mr-32 rounded-full">
                                                        Dispatched
                                                    </div>
                                                )
                                            }</Table.Cell>
                                            <Table.Cell>
                                                {
                                                    item.orderStatus === "Placed" ?(
                                                        <button
                                                            className="profilebtn pt-0.5 pb-0.5 pl-3 pr-3 rounded-[10px] text-xs self-center"
                                                            onClick={() => changeStatus(item.id)}
                                                        >
                                                            Mark as <br/> Dispatched
                                                        </button>

                                                    ) : (
                                                        <div></div>
                                                    )
                                                }
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SideNavbarOrderContent;