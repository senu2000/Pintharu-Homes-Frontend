import React from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolderPlus, faCheck } from '@fortawesome/free-solid-svg-icons'

function AddProductBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);
    // const [email, setEmail] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        // setEmail('');
    }
    return (
        <div>
            <Button onClick={() => setOpenModal(true)} className='w-7 h-7 text-center flex justify-center items-center'>
                <FontAwesomeIcon icon={faFolderPlus} />
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add New Paint</h3>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="name" value="Paint name"/>
                            </div>
                            <TextInput
                                id="name"
                                placeholder="Briliant White"
                                name="name"
                                type="text"
                                // value={email}
                                // onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="brand" value="Brand"/>
                            </div>
                            <select id="brand" className="w-full rounded" name="brand"
                                    required>
                                <option value="Nipolac">Nipolac</option>
                                <option value="Multilac">Multilac</option>
                                <option value="Robialc">Robialc</option>
                            </select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="quantity" value="Quantity"/>
                            </div>
                            <TextInput id="quantity" type="number" name="quantity" placeholder="10" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="category" value="Category"/>
                            </div>
                            <select id="category" className="w-full rounded" name="category"
                                    required>
                                <option value="Interior">Interior</option>
                                <option value="Exterir">Exterir</option>
                            </select>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="price" value="Unit Price (Rs.)"/>
                            </div>
                            <TextInput id="price" type="number" name="price" placeholder="1000" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="volume" value="Volume (L)"/>
                            </div>
                            <TextInput id="volume" type="number" name="volume" placeholder="5" required/>
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="image" value="Image"/>
                            </div>
                            <TextInput id="image" type="file" name="image" required/>
                        </div>
                        <div className="w-full grid place-content-center pl-8 pr-8">
                            <Button>
                                <FontAwesomeIcon icon={faCheck} />
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default AddProductBtnModel;