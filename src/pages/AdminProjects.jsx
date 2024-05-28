import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import SideNavbarProjectContent from "../components/SideNavbarProjectContent.jsx";

function AdminProjects(props) {
    return (
        <div>
            <div className='flex'>
                <div className='basis-[5%] sidenavbar-side'>
                    <SideNavbar/>
                </div>
                <div className='basis-[95%]'>
                    <SideNavbarProjectContent/>
                </div>
            </div>
        </div>
    );
}

export default AdminProjects;