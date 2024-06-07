import React from 'react';
import ProjectTable from "./ProjectTable.jsx";

function SideNavbarProjectContent(props) {
    return (
        <div className='bg-blue-50 h-full rounded-l-[150px]'>
            <div className='flex align-middle pt-24 p-6'>
                <ProjectTable/>
            </div>
        </div>
    );
}

export default SideNavbarProjectContent;