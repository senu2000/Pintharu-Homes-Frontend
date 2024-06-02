import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Label, TextInput } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {displayErrorToast, displaySuccessToast} from "../components/ToastProvider.jsx";

function Login(props) {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function saveUser(e) {
        e.preventDefault();

        const userDetails = { username, password };

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
        <div>
            <form>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white flex items-center justify-center">
                        Add New User</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Email (username)" />
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
                            <Label htmlFor="password" value="Password" />
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <div className="w-full flex items-center justify-center pl-8 pr-8">
                        <Button onClick={saveUser}>
                            <span style={{ marginRight: '5px' }}>Done &nbsp;</span>
                            <span style={{ verticalAlign: 'middle' }}>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Login;
