import React, {useState} from 'react';
import SignupForm from '../components/Signup';

function Register(props) {

    return (
        <>
            <div className="SignupBack">
                <SignupForm/>
            </div>
        </>
    );
}

export default Register;