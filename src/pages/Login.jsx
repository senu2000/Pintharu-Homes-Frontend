import React from "react";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom
import Loginform from "../components/Loginform";

function Login(props) {
  return (
    <>
    <div className="LoginBack">
      
        <Loginform/>
    </div>
    </>
  );
}

export default Login;
