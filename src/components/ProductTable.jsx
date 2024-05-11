import React from 'react';
import { Table } from "flowbite-react";
import Img from "../../public/Images/Carousel3.jpg";
// import {FaEdit} from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom';
import DeleteBtnModel from "./DeleteBtnModel.jsx";
import EditProductBtnModel from "./EditProductBtnModel.jsx";
import "../css/Admin.css";

function ProductTable(props) {
    return (
        <div>
            <div className="overflow-x-auto product-table">
                <Table hoverable>
                    <Table.Head>
                        <Table.HeadCell>Paint name</Table.HeadCell>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Brand</Table.HeadCell>
                        <Table.HeadCell>Quantity</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Volume</Table.HeadCell>
                        <Table.HeadCell>
                            <span className="sr-only">Edit</span>
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>
                                <img src={Img} alt="" className='rounded-full w-10 h-10' />
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>25</Table.Cell>
                            <Table.Cell>Interiror</Table.Cell>
                            <Table.Cell>Rs. 2100</Table.Cell>
                            <Table.Cell>5L</Table.Cell>
                            <Table.Cell>
                                {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
                                {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
                                {/*</Link>*/}
                                <EditProductBtnModel/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>
                                <img src={Img} alt="" className='rounded-full w-10 h-10' />
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>25</Table.Cell>
                            <Table.Cell>Interiror</Table.Cell>
                            <Table.Cell>Rs. 2100</Table.Cell>
                            <Table.Cell>5L</Table.Cell>
                            <Table.Cell>
                                {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
                                {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
                                {/*</Link>*/}
                                <EditProductBtnModel/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>
                                <img src={Img} alt="" className='rounded-full w-10 h-10' />
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>25</Table.Cell>
                            <Table.Cell>Interiror</Table.Cell>
                            <Table.Cell>Rs. 2100</Table.Cell>
                            <Table.Cell>5L</Table.Cell>
                            <Table.Cell>
                                {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
                                {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
                                {/*</Link>*/}
                                <EditProductBtnModel/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>
                                <img src={Img} alt="" className='rounded-full w-10 h-10' />
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>25</Table.Cell>
                            <Table.Cell>Interiror</Table.Cell>
                            <Table.Cell>Rs. 2100</Table.Cell>
                            <Table.Cell>5L</Table.Cell>
                            <Table.Cell>
                                {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
                                {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
                                {/*</Link>*/}
                                <EditProductBtnModel/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>
                                <img src={Img} alt="" className='rounded-full w-10 h-10' />
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>25</Table.Cell>
                            <Table.Cell>Interiror</Table.Cell>
                            <Table.Cell>Rs. 2100</Table.Cell>
                            <Table.Cell>5L</Table.Cell>
                            <Table.Cell>
                                {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
                                {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
                                {/*</Link>*/}
                                <EditProductBtnModel/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>
                                <img src={Img} alt="" className='rounded-full w-10 h-10' />
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>25</Table.Cell>
                            <Table.Cell>Interiror</Table.Cell>
                            <Table.Cell>Rs. 2100</Table.Cell>
                            <Table.Cell>5L</Table.Cell>
                            <Table.Cell>
                                {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
                                {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
                                {/*</Link>*/}
                                <EditProductBtnModel/>
                            </Table.Cell>
                            <Table.Cell>
                                <DeleteBtnModel/>
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default ProductTable;