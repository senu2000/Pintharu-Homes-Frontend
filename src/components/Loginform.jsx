import React from "react";
import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import "../css/Login.css";
import Img from "../../public/Images/Logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Loginform() {
 
  return (
    <div className="login-container">
      <Card className="loginform">
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Email" style={{ fontSize: "20px" }} />
            </div>
            <TextInput id="email1" type="email" placeholder="Enter your email" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Password" style={{ fontSize: "20px" }} />
            </div>
            <TextInput id="password1" type="password" placeholder="Enter your password" required />
          </div>
          <Button gradientDuoTone="purpleToBlue">Login</Button>
        </form>
        <div className="signup-link">
          Don't have an account yet?
          <Link to="/register"><br /><p className="linksignup">Create an Account</p></Link>
        </div>
      </Card>

      <div className="welcome-message">
        WELCOME TO
        <motion.img
          src={Img}
          className="homelogo"
          alt="logo"
          animate={{ y: [0, -20, 20, 0], rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}
