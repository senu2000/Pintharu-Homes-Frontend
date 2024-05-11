import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";

function AdminRates(props) {
    return (
        <div>
            <div className='flex'>
                <div className='basis-[5%] sidenavbar-side'>
                    <SideNavbar/>
                </div>
                <div className='basis-[95%]'>
                    Rates
                </div>
            </div>
        </div>
    );
}

export default AdminRates;