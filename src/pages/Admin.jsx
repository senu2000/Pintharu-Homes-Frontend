import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import SideNavbarProductConent from "../components/SideNavbarProductConent.jsx";
import "../css/Admin.css";
import { Toaster, toast } from 'sonner'

function Admin(props) {

    const displaySuccessToast = () => {
        toast.success('Paint item added successfully !', {
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
        <div className='flex'>
            <div className='basis-[5%] sidenavbar-side'>
                <SideNavbar displaySuccessToast={displaySuccessToast}/>
            </div>
            <div className='basis-[95%]'>
                <SideNavbarProductConent/>
            </div>
        </div>
    );
}

export default Admin;