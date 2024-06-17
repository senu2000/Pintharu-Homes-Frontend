import React, {useState} from "react";
import {Button, Card, Checkbox, Label, TextInput} from "flowbite-react";
import "../css/Login.css";
import Img from "../../public/Images/Logo.png";
import {Link, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {displayErrorToast, displaySuccessToast} from "./ToastProvider.jsx";
import axios from "axios";
import {black, white} from "next/dist/lib/picocolors.js";


export default function Loginform(props) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function saveUser(e) {
        e.preventDefault();

        const userDetails = {username, password};

        if (username === '' || password === '') {
            displayErrorToast("All field are required");
            return;
        }

        axios.post(`http://localhost:8080/login`, userDetails)
            .then((response) => {
                if (response.data && response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    sessionStorage.setItem('token', response.data.token);
                    props.onLoginSuccess();

                    // Check if user is an admin
                    axios.get('http://localhost:8080/admin_only', {
                        headers: {
                            Authorization: `Bearer ${response.data.token}`
                        }
                    })
                        .then(() => {
                            // User is an ADMIN
                            navigate("/admin-product");
                            displaySuccessToast("Sign in successfully");
                        })
                        .catch(() => {
                            // User is not an ADMIN, check if user is a USER
                            axios.get('http://localhost:8080/user_only', {
                                headers: {
                                    Authorization: `Bearer ${response.data.token}`
                                }
                            })
                                .then(() => {
                                    // User is a USER
                                    console.log(sessionStorage.getItem('token'));
                                    navigate("/userProfile");
                                    displaySuccessToast("Sign in successfully");
                                })
                                .catch(() => {
                                    // Unable to determine user role
                                    displayErrorToast("Invalid username or password");
                                });
                        });
                } else {
                    displayErrorToast("Invalid username or password");
                }
            })
            .catch((error) => {
                console.error('Error checking user existence:', error);
                displayErrorToast("Invalid username or password");
            });
    }

    return (
        <div className="login-container">
            <div>
                <Card className="loginform">
                    <h1 className="signinupheading">Login</h1>
                    <form className="flex flex-col gap-4">
                        <div >
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Email" style={{color:"#333333", fontSize: "18px"}}/>
                            </div>
                            <TextInput id="username"
                                       placeholder="user@gmail.com"
                                       name="username"
                                       type="text"
                                       value={username}
                                       onChange={(e) => setUsername(e.target.value)}
                                       required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Password" style={{color:"#333333",fontSize: "18px"}}/>
                            </div>
                            <TextInput id="password"
                                       type="password"
                                       name="password"
                                       placeholder="password"
                                       onChange={(e) => setPassword(e.target.value)}
                                       required/>
                        </div>
                        <Button className="loginbtn" onClick={saveUser}>Login</Button>
                    </form>
                    <div className="signup-link">
                        Don't have an account yet?
                        <Link to="/register"><br/><p className="linksignup">Create an Account</p></Link>
                    </div>
                </Card>
            </div>
            {/*<div>*/}
            {/*    <div className="welcome-message">*/}
            {/*        WELCOME TO*/}
            {/*        <motion.img*/}
            {/*            src={Img}*/}
            {/*            className="homelogo"*/}
            {/*            alt="logo"*/}
            {/*            animate={{y: [0, -20, 20, 0], alignTracks: [0, 10, -10, 0]}}*/}
            {/*            transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}
