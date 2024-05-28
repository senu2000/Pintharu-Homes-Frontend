import React from 'react';
import { Sidebar } from "flowbite-react";
import "../css/SideNavbar.css";
import {motion} from "framer-motion";
import { Link, useLocation } from 'react-router-dom';
import AddProductBtnModel from "./AddProductBtnModel.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPaintRoller, faArrowDownShortWide, faPercentage, faComments, faUser, faRightFromBracket, faSheetPlastic} from '@fortawesome/free-solid-svg-icons'
import AddUserBtnModel from "./AddUserBtnModel.jsx";

function SideNavbar(props) {

    const location = useLocation();

    let className = 'full-side ';
    let className1 = ' ';
    let className2 = ' ';
    let className3 = ' ';
    let className4 = ' ';
    let className5 = ' ';
    let className6 = ' ';
    switch (location.pathname) {
        case '/admin-product':
            className += 'bg-blue-100';
            className1 += 'bg-blue-100';
            break;
        case '/admin-orders':
            className += 'bg-orange-100';
            className2 += 'bg-orange-100';
            break;
        case '/admin-rates':
            className += 'bg-green-100';
            className3 += 'bg-green-100';
            break;
        case '/admin-chat':
            className += 'bg-gray-200';
            className4 += 'bg-gray-200';
            break;
        case '/admin-users':
            className += 'bg-orange-100';
            className5 += 'bg-orange-100';
            break;
        default:
            className += 'bg-blue-50';
            className6 += 'bg-blue-100';
            break;
    }

    return (
        <motion.div className={className + ' rounded-tr-[150px] rounded-bl-[150px]'}
                    initial={{
                        x: 0,
                        y:-140,
                    }}
                    animate={{
                        x: 0,
                        y:0,

                    }}
                    transition={{
                        delay: 0.1,
                    }}>
            <Sidebar aria-label="Default sidebar example" className='full-snav'>
                <Sidebar.Items className='nav-all-item'>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item className={'nav-item' + className1}>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-product"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faPaintRoller}/>&nbsp; &nbsp;Products
                                    </Link>
                                </div>
                                <div className='div2 flex justify-end'>
                                    <AddProductBtnModel displaySuccessToast={props.displaySuccessToast}/>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className={'nav-item' + className2}>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-orders"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faArrowDownShortWide}/>&nbsp; Orders
                                    </Link>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className={'nav-item' + className3}>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-rates"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faPercentage}/>&nbsp; &nbsp; Rates
                                    </Link>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className={'nav-item' + className4}>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-chat"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faComments}/>&nbsp; Chat
                                    </Link>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className={'nav-item' + className5}>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-users"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faUser}/>&nbsp; Users
                                    </Link>
                                </div>
                                <div className='div2 flex justify-end'>
                                    <AddUserBtnModel displaySuccessUserToast={props.displaySuccessUserToast}
                                                     displayErrorOneUserToast={props.displayErrorOneUserToast}
                                                     displayErrorTwoUserToast={props.displayErrorTwoUserToast}/>
                                </div>
                            </div>
                        </Sidebar.Item>
                        <Sidebar.Item className={'nav-item' + className6}>
                            <div className='grid grid-cols-2 place-content-between'>
                                <div className='div1'>
                                    <Link to="/admin-projects"
                                          className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">
                                        <FontAwesomeIcon icon={faSheetPlastic}/>&nbsp; Projects
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