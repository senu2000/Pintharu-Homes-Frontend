import React from 'react';
import SideNavbar from "../components/SideNavbar.jsx";
import SideNavbarChatContent from "../components/SideNavbarChatContent.jsx";

function AdminChat(props) {
    return (
        <div>
            <div>
                <div className='flex'>
                    <div className='basis-[5%] sidenavbar-side'>
                        <SideNavbar/>
                    </div>
                    <div className='basis-[95%]'>
                        <SideNavbarChatContent/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminChat;