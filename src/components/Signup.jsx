import {Button, Card, Checkbox, Label, TextInput} from "flowbite-react";
import "../css/Signup.css";
import React, {useState} from "react";
import Img from "../../public/Images/Logo.png";
import {Link, useNavigate} from "react-router-dom";
import {displayErrorToast, displaySuccessToast} from "./ToastProvider.jsx";
import axios from "axios";
import {bold} from "next/dist/lib/picocolors.js";


export default function SignupForm() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('USER');
    const [confirmpassword, setConfirmpassword] = useState('');

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const validatePhoneNumber = (phone) => {
        const phonePattern = /^[0-9]{10}$/;
        return phonePattern.test(phone);
    };

    function saveUser(e) {
        e.preventDefault();

        const employee = {username, password, phone_number, address, role};
        console.log(employee);

        if (!validateEmail(username)) {
            displayErrorToast("Invalid email");
            return;
        }

        if (!validatePhoneNumber(phone_number)) {
            displayErrorToast("Invalid phone number");
            return;
        }

        if (username === '' || password === '' || phone_number === '' || address === '' || confirmpassword === '') {
            displayErrorToast("All field are required");
            return;
        }

        if (password !== confirmpassword) {
            displayErrorToast("Passwords are mismatched. Check again");
        }else {

        axios.get(`http://localhost:8080/api/user/${username}`)
            .then((response) => {
                console.log(response.data);

                if (response.data && Object.keys(response.data).length > 0) {
                    displayErrorToast("User already exist");
                } else {
                    // User doesn't exist, register the user
                    axios.post('http://localhost:8080/register', employee)
                        .then((response) => {
                            console.log(response.data);
                            navigate("/login");
                            displaySuccessToast("Successfully sign up. Welcome to Pintharu Homes");
                        })
                        .catch((error) => {
                            console.error('Error registering user:', error);
                        });
                }
            })
            .catch((error) => {
                console.error('Error checking user existence:', error);
            });
        }
    }

    return (
        <form>
            <div className="signup-container">
                        <Card className="signupform">
                            <h1 className="signinupheading">Register</h1>
                            <form className="flex flex-col gap-4">
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="email1"
                                            value="Email"
                                            style={{fontSize: "18px"}}
                                        />
                                    </div>
                                    <TextInput
                                        id="username"
                                        placeholder="user@gmail.com"
                                        name="username"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="address"
                                            value="Address"
                                            style={{fontSize: "18px"}}
                                        />
                                    </div>
                                    <TextInput
                                        id="address"
                                        type="text"
                                        name="address"
                                        placeholder="5/14, Ganga Addarawatta, Galle"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="Tel"
                                            value="Phone Number"
                                            style={{fontSize: "18px"}}
                                        />
                                    </div>
                                    <TextInput
                                        id="phone_number"
                                        type="text"
                                        name="phone_number"
                                        placeholder="07xxxxxxxx"
                                        value={phone_number}
                                        onChange={(e) => setPhoneNo(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="password1"
                                            value="Password"
                                            style={{fontSize: "18px"}}
                                        />
                                    </div>
                                    <TextInput
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="RepeatPassword"
                                            value="Repeat Password"
                                            style={{fontSize: "18px"}}
                                        />
                                    </div>
                                    <TextInput
                                        id="RepeatPassword"
                                        type="password"
                                        placeholder="Confirm password"
                                        onChange={(e) => setConfirmpassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <Button className="loginbtn" onClick={saveUser}>
                                    Sign Up
                                </Button>
                            </form>
                            <div className="signup-link flex justify-center">
                                Have an account ? &nbsp;
                                <Link to="/login"><p className="linksignup">Sign In</p></Link>
                            </div>
                        </Card>
            </div>
        </form>
    );
}
