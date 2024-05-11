import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import SideNavbarProductConent from "../components/SideNavbarProductConent.jsx";
import "../css/Admin.css";

function Admin(props) {
    return (
        <div className='flex'>
            <div className='basis-[5%] sidenavbar-side'>
                <SideNavbar/>
            </div>
            <div className='basis-[95%]'>
                <SideNavbarProductConent/>
            </div>
        </div>
    );
}

export default Admin;