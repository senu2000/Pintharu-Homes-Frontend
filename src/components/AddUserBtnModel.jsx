import React from 'react';
import {Button, Label, Modal, TextInput} from "flowbite-react";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus, faCheck} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function AddUserBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phone_number, setPhoneNo] = useState('');
    const [address, setAddress] = useState('');
    const [role, setRole] = useState('USER');
    const [isPresent, setIsPresent] = useState(false);

    function onCloseModal() {
        setOpenModal(false);
        setUsername('');
        setPassword('');
        setPhoneNo('');
        setAddress('');
    }

    // function saveUser(e) {
    //     e.preventDefault();
    //
    //
    //     const employee = {username, password, phone_number, address, role};
    //     console.log(employee)
    //
    //     axios.get(`http://localhost:8080/api/user/${username}`).then((response) => {
    //         console.log(response.data);
    //     })
    //
    //     axios.post('http://localhost:8080/register', employee).then((response) => {
    //         console.log(response.data);
    //         onCloseModal();
    //         props.displaySuccessUserToast();
    //     })
    //
    // }


    function saveUser(e) {
        e.preventDefault();

        const employee = { username, password, phone_number, address, role };
        console.log(employee);

        if (username === '' || password === '' || phone_number === '' || address === '') {
            props.displayErrorOneUserToast();
            return;
        }

        axios.get(`http://localhost:8080/api/user/${username}`)
            .then((response) => {
                console.log(response.data);

                if (response.data && Object.keys(response.data).length > 0) {
                    props.displayErrorTwoUserToast();
                } else {
                    // User doesn't exist, register the user
                    axios.post('http://localhost:8080/register', employee)
                        .then((response) => {
                            console.log(response.data);
                            onCloseModal();
                            props.displaySuccessUserToast();
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
            <Button onClick={() => setOpenModal(true)} className='w-7 h-7 text-center flex justify-center items-center'>
                <FontAwesomeIcon icon={faUserPlus}/>
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header/>
                <Modal.Body>
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
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddUserBtnModel;