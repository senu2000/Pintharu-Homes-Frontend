import React from 'react';
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../css/Admin.css";
import axios from "axios";
import { toast } from 'sonner'

function DeleteBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);
    const deletePaint = async (e) => {
        e.preventDefault();

        try {
            await axios.delete(`${props.endpoint}/${props.item.id}`);
        } catch (e) {
            console.error(e);
        } finally {
            setOpenModal(false);
            displayDeleteToast();
        }
    };

    const displayDeleteToast = () => {
        toast.success(`${props.alert} deleted successfully !`, {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div>
            <Button onClick={() => setOpenModal(true)} className='bg-red-500 delete-mdl-btn'>
                <FontAwesomeIcon icon={faTrash} />
            </Button>
            <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                            Are you sure you want to delete this product?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="failure" onClick={deletePaint}>
                                {"Yes, I'm sure"}
                            </Button>
                            <Button color="gray" onClick={() => setOpenModal(false)}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default DeleteBtnModel;