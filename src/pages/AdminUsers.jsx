import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";

function AdminUsers(props) {
    return (
        <div>
            <div className='flex'>
                <div className='basis-[5%] sidenavbar-side'>
                    <SideNavbar/>
                </div>
                <div className='basis-[95%]'>
                    User
                </div>
            </div>
        </div>
    );
}

export default AdminUsers;