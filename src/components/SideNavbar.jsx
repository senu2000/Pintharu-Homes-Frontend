import React from 'react';
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import "../css/SideNavbar.css";
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import AddProductBtnModel from "./AddProductBtnModel.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaintRoller, faArrowDownShortWide, faPercentage, faComments, faUser, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'

function SideNavbar(props) {
    return (
        <motion.div className='full-side bg-blue-50 rounded-tr-[150px] rounded-bl-[150px]'
                    initial={{
                        x: 100,
                        y:-20,
                    }}
                    animate={{
                        x: 0,
                        y:20,

                    }}
                    transition={{
                        delay: 0.5,
                    }}>
            <Sidebar aria-label="Default sidebar example" className='full-snav'>
                <Sidebar.Items className='nav-all-item'>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item className='nav-item'>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-product"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faPaintRoller}/>&nbsp; &nbsp;Products
                                    </Link>
                                </div>
                                <div className='div2 flex justify-end'>
                                    <AddProductBtnModel/>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className='nav-item'>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-orders"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faArrowDownShortWide}/>&nbsp; Orders
                                    </Link>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className='nav-item'>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-rates"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faPercentage}/>&nbsp; &nbsp; Rates
                                    </Link>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item href="#" className='nav-item'>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-chat"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faComments}/>&nbsp; Chat
                                    </Link>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className='nav-item'>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-users"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faUser}/>&nbsp; Users
                                    </Link>
                                </div>
                                <div className='div2 flex justify-end'>
                                    <AddProductBtnModel/>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className='nav-item'>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faRightFromBracket}/>&nbsp; Logout
                                    </Link>
                                </div>
                            </div>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </motion.div>
    );
}

export default SideNavbar;