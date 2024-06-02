import React, { useState } from 'react';
import Loginform from "../components/Loginform";
import MyNavBar from "../components/NavBar.jsx";

function Login(props) {

    return (
        <div>
            <div className="LoginBack">
                <MyNavBar/>
                <Loginform onLoginSuccess={props.onLoginSuccess}/>
            </div>
        </div>
    );
}

export default Login;
