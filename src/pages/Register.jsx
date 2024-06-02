import React, {useState} from 'react';
import {Button, Label, TextInput} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {displayErrorToast, displaySuccessToast} from "../components/ToastProvider.jsx";
import {useNavigate} from "react-router-dom";

function Register(props) {

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('USER');

    function saveUser(e) {
        e.preventDefault();

        const employee = { username, password, phone_number, address, role };
        console.log(employee);

        if (username === '' || password === '' || phone_number === '' || address === '') {
            displayErrorToast("All field are required");
            return;
        }

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

    return (
        <div>
            <form>
                <div className="space-y-6">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white flex items-center justify-center">
                        Add New User</h3>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username" value="Email (username)"/>
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
                            <Label htmlFor="password" value="Password"/>
                        </div>
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)}
                            required/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="phone_number" value="Phone No"/>
                        </div>
                        <TextInput id="phone_number"
                                   type="text"
                                   name="phone_number"
                                   placeholder="07xxxxxxxx"
                                   value={phone_number}
                                   onChange={(e) => setPhoneNo(e.target.value)}
                                   required/>
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="address" value="Address"/>
                        </div>
                        <TextInput id="address"
                                   type="text"
                                   name="address"
                                   placeholder="5/14, Ganga Addarawatta, Galle"
                                   value={address}
                                   onChange={(e) => setAddress(e.target.value)}
                                   required
                        />
                    </div>
                    <div className="w-full flex items-center justify-center pl-8 pr-8">
                        <Button onClick={saveUser}>
                            <span style={{marginRight: '5px'}}>Done &nbsp;</span>
                            <span style={{verticalAlign: 'middle'}}>
                                        <FontAwesomeIcon icon={faCheck}/>
                                    </span>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Register;