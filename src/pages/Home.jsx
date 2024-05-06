import React from 'react';
// import { Button } from "flowbite-react";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import MainBtn from "../components/MainBtn.jsx";


function Home(props) {
    return (
        <>
            <div className='text-2xl font-bold text-red-500 text-center underline'>
                home page
            </div>
            <MainBtn>main button</MainBtn>
            {/*<Button>Click me</Button>*/}
            <Flowbite>
                <DarkThemeToggle />
            </Flowbite>
        </>
    );
}

export default Home;