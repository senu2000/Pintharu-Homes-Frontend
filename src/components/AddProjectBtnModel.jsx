import React, {useState} from 'react';
import axios from "axios";
import {Button, Label, Modal, TextInput} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faFileCirclePlus} from "@fortawesome/free-solid-svg-icons";
import {displayErrorToast} from "./ToastProvider.jsx";

function AddProjectBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image1, setImage1] = useState('');
    const [image2, setImage2] = useState('');
    const [image3, setImage3] = useState('');
    const [image4, setImage4] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setName('');
        setDescription('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('image1', image1);
        formData.append('image2', image2);
        formData.append('image3', image3);
        formData.append('image4', image4);

        if (name === '' || description === ''|| image1 === ''|| image2 === ''|| image3 === ''|| image4 === '') {
            props.displayErrorProjectToast();
            return;
        }

        // console.log(formData);

        try {
            const response = await axios.post('http://localhost:8080/api/project/createproject', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            onCloseModal();
            props.displaySuccessProjectToast();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button onClick={() => setOpenModal(true)} className='w-7 h-7 text-center flex justify-center items-center'>
                <FontAwesomeIcon icon={faFileCirclePlus}/>
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header/>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex items-center justify-center">
                                Add New Paint Project</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Project name"/>
                                </div>
                                <TextInput
                                    id="name"
                                    placeholder="Your project title"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="description" value="Description"/>
                                </div>
                                <TextInput id="description"
                                           type="text"
                                           name="description"
                                           placeholder="Description about project"
                                           value={description}
                                           onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image1" value="Main image"/>
                                </div>
                                <TextInput id="image1"
                                           type="file"
                                           name="image1"
                                           onChange={(e) => setImage1(e.target.files[0])}
                                           accept="image/*"
                                           required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image2" value="Second image"/>
                                </div>
                                <TextInput id="image2"
                                           type="file"
                                           name="image2"
                                           onChange={(e) => setImage2(e.target.files[0])}
                                           accept="image/*"
                                           required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image3" value="Third image"/>
                                </div>
                                <TextInput id="image3"
                                           type="file"
                                           name="image3"
                                           onChange={(e) => setImage3(e.target.files[0])}
                                           accept="image/*"
                                           required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image" value="Fourth image"/>
                                </div>
                                <TextInput id="image4"
                                           type="file"
                                           name="image4"
                                           onChange={(e) => setImage4(e.target.files[0])}
                                           accept="image/*"
                                           required/>
                            </div>
                            <div className="w-full flex items-center justify-center pl-8 pr-8">
                                <Button type="submit">
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

export default AddProjectBtnModel;