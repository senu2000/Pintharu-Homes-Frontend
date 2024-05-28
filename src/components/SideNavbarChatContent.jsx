import React from 'react';
import ChatComponent from "./ChatComponent.jsx";

function SideNavbarChatContent(props) {
    return (
        <div className='bg-gray-100 h-full rounded-l-[150px] '>
            <div className=''>
                <ChatComponent/>
            </div>
        </div>
    );
}

export default SideNavbarChatContent;