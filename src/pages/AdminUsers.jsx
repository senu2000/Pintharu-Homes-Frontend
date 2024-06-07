import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import SideNavbarUserContent from "../components/SideNavbarUserContent.jsx";
import {toast} from "sonner";

function AdminUsers(props) {
    const displaySuccessUserToast = () => {
        toast.success('New user added successfully !', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const displayErrorOneUserToast = () => {
        toast.error('All fields are required !', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const displayErrorTwoUserToast = () => {
        toast.error('User Already exist', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div>
            <div className='flex'>
                <div className='basis-[5%] sidenavbar-side'>
                    <SideNavbar displaySuccessUserToast={displaySuccessUserToast}
                                displayErrorOneUserToast={displayErrorOneUserToast}
                                displayErrorTwoUserToast={displayErrorTwoUserToast}/>
                </div>
                <div className='basis-[95%]'>
                    <SideNavbarUserContent/>
                </div>
            </div>
        </div>
    );
}

export default AdminUsers;