import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import SideNavbarOrderContent from "../components/SideNavbarOrderContent.jsx";

function AdminOrders(props) {
    return (
        <div>
            <div className='flex'>
                <div className='basis-[5%] sidenavbar-side'>
                    <SideNavbar/>
                </div>
                <div className='basis-[95%]'>
                    <SideNavbarOrderContent/>
                </div>
            </div>
        </div>
    );
}

export default AdminOrders;