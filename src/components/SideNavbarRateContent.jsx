import React from 'react';
import RatesTable from "./RatesTable.jsx";


function SideNavbarRateContent(props) {
    return (
        <div className='bg-green-50 h-full rounded-l-[150px]'>
            <div className='flex align-middle pt-24 p-6'>
                <RatesTable/>
            </div>
        </div>
    );
}

export default SideNavbarRateContent;