import React from 'react';
import UserTable from "./UserTable.jsx";

function SideNavbarUserContent(props) {
    return (
        <div className='bg-orange-50 h-full rounded-l-[150px] '>
            <div className='flex align-middle pt-24 p-6'>
                <UserTable/>
            </div>
        </div>
    );
}

export default SideNavbarUserContent;