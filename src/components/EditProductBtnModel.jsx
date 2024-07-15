import React from 'react';
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import {toast} from "sonner";

function EditProductBtnModel(props) {
    const [openModal, setOpenModal] = useState(false);

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [category, setCategory] = useState('');
    const [noDisPrice, setNoDisPrice] = useState('');  //new
    const [price, setPrice] = useState('');
    const [volume, setVolume] = useState('');

    function onCloseModal() {
        setOpenModal(false);
        setName('');
        setBrand('');
        setQuantity('');
        setCategory('');
        setNoDisPrice('');
        setPrice('');
        setVolume('');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/paint/${props.item.id}`);
                // console.log(response.data);
                const paintDetails = response.data;
                setName(paintDetails.name || '');
                setImage(paintDetails.image || '');
                setBrand(paintDetails.brand || '');
                setQuantity(paintDetails.quantity || '');
                setCategory(paintDetails.category || '');
                setNoDisPrice(paintDetails.noDisPrice || '');
                setPrice(paintDetails.price || '');
                setVolume(paintDetails.volume || '');
            } catch (error) {
                console.error(error);
            }
        };
        if (openModal) {
            fetchData();
        }
    }, [props.item.id, openModal]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);
        formData.append('brand', brand);
        formData.append('quantity', quantity);
        formData.append('category', category);
        formData.append('noDisPrice', noDisPrice);
        formData.append('price', price);
        formData.append('volume', volume);

        // console.log(formData);

        try {
            const response = await axios.put(`http://localhost:8080/api/paint/${props.item.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            onCloseModal();
            displayUpdateToast();

        } catch (error) {
            console.error(error);
        }
    };

    const displayUpdateToast = () => {
        toast.success('Paint item Updated successfully !', {
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
            <Button onClick={() => setOpenModal(true)}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header />
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center justify-center">
                                Edit Paint Item</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Paint name"/>
                                </div>
                                <TextInput
                                    id="name"
                                    placeholder="Briliant White"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="brand" value="Brand"/>
                                </div>
                                <select id="brand"
                                        className="w-full rounded"
                                        name="brand"
                                        value={brand}
                                        onChange={(e) => setBrand(e.target.value)}
                                        required>
                                    <option value="Duluxe">Duluxe</option>
                                    <option value="Multilac">Multilac</option>
                                    <option value="Jat">Jat</option>
                                    <option value="Robbialac">Robbialac</option>
                                </select>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="quantity" value="Quantity"/>
                                </div>
                                <TextInput
                                    id="quantity"
                                    type="number"
                                    name="quantity"
                                    placeholder="10"
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="category" value="Category"/>
                                </div>
                                <select id="category"
                                        className="w-full rounded"
                                        name="category"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required>
                                    <option value="Wall Paints">Wall Paints</option>
                                    <option value="Floor Paints">Floor Paints</option>
                                    <option value="Wood and Furniture">Wood and Furniture</option>
                                </select>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="noDisPrice" value="Unit price without discount (Rs.) (optional) "/>
                                </div>
                                <TextInput id="noDisPrice"
                                           type="number"
                                           name="noDisPrice"
                                           placeholder="1000"
                                           value={noDisPrice}
                                           onChange={(e) => setNoDisPrice(e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="price" value="Unit Price (Rs.)"/>
                                </div>
                                <TextInput id="price"
                                           type="number"
                                           name="price"
                                           placeholder="1000"
                                           value={price}
                                           onChange={(e) => setPrice(e.target.value)}
                                           required/>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="volume" value="Volume (L)"/>
                                </div>
                                <TextInput id="volume"
                                           type="text"
                                           name="volume"
                                           placeholder="5"
                                           value={volume}
                                           onChange={(e) => setVolume(e.target.value)}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="image" value="Image"/>
                                </div>
                                <TextInput id="image"
                                           type="file"
                                           name="image"
                                           onChange={(e) => setImage(e.target.files[0])}
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

export default EditProductBtnModel;