import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import SideNavbarProjectContent from "../components/SideNavbarProjectContent.jsx";
import {displaySuccessToast, displayErrorToast} from "../components/ToastProvider.jsx";

function AdminProjects(props) {
    const displaySuccessProjectToast = () => {
        displaySuccessToast("Paint project added successfully");
    };
    const displayErrorProjectToast = () => {
        displayErrorToast("All fields are required !");
    };
    return (
        <div>
            <div className='flex'>
                <div className='basis-[5%] sidenavbar-side'>
                    <SideNavbar displaySuccessProjectToast={displaySuccessProjectToast}
                                displayErrorProjectToast={displayErrorProjectToast}/>
                </div>
                <div className='basis-[95%]'>
                    <SideNavbarProjectContent/>
                </div>
            </div>
        </div>
    );
}

export default AdminProjects;