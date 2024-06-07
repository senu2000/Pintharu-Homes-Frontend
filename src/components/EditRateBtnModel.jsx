import React, {useState} from 'react';
import axios from "axios";
import {Button, Label, Modal, TextInput} from "flowbite-react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faEdit} from "@fortawesome/free-solid-svg-icons";
import {displayErrorToast, displaySuccessToast} from "./ToastProvider.jsx";

function EditRateBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);

    const [name, setName] = useState(props.item.name);
    const [unit_price, setUnitPrice] = useState(props.item.unit_price);


    function onCloseModal() {
        setOpenModal(false);
    }

    function saveQuotation(e) {
        e.preventDefault();

        const data = { name, unit_price };
        console.log(data);

        if (name === '' || unit_price === '') {
            displayErrorToast("All fields are required")
            return;
        }

        axios.put(`http://localhost:8080/api/quotation/${props.item.id}`, data)
            .then((response) => {
                console.log(response.data);
                onCloseModal();
                displaySuccessToast("Quotation updated successfully")
            })
            .catch((error) => {
                console.error('Error updating quotation:', error);
            });
    }


    return (
        <div>
            <Button onClick={() => setOpenModal(true)} className='w-7 h-7 text-center flex justify-center items-center'>
                <FontAwesomeIcon icon={faEdit}/>
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header/>
                <Modal.Body>
                    <form>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex items-center justify-center">
                                Update Quotation</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Work"/>
                                </div>
                                <TextInput
                                    id="name"
                                    placeholder=""
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="unit_price" value="Price for 1 ft²"/>
                                </div>
                                <TextInput
                                    id="unit_price"
                                    type="text"
                                    name="unit_price"
                                    placeholder=""
                                    value={unit_price}
                                    onChange={(e) => setUnitPrice(e.target.value)}
                                    required/>
                            </div>
                            <div className="w-full flex items-center justify-center pl-8 pr-8">
                                <Button onClick={saveQuotation}>
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

export default EditRateBtnModel;