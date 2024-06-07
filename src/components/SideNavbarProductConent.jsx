import React from 'react';
import Logo from "../../public/Images/Logo.png";
import ProductTable from "./ProductTable.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamation} from '@fortawesome/free-solid-svg-icons'

function SideNavbarProductConent(props) {
    return (
        <div className='bg-blue-50 h-full rounded-l-[150px]'>
            <div className=''>
                <div
                    className='logo-with-title flex justify-end text-2xl p-2 md:p-4 font-extrabold font-sans text-blue-400'>
                    <div className='backdrop-blur bg-blue-950 p-2 rounded-tl-[150px] rounded-br-[150px] mr-2'>
                        <img src={Logo} alt="" className='w-24 h-10'/>
                    </div>
                    <div className='mt-3'>
                        Welcome Admin <FontAwesomeIcon icon={faExclamation} flip />
                    </div>
                </div>
                <div className="blue-line h-1 bg-blue-950 w-1/2 float-end"></div>
                <div className=''>
                </div>
                <div className='ptable m-5 justify-center '>
                    <ProductTable/>
                </div>
            </div>
        </div>
    );
}

export default SideNavbarProductConent;
