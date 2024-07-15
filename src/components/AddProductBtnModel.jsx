import React from 'react';
import {Button, Label, Modal, TextInput} from "flowbite-react";
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFolderPlus, faCheck} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function AddProductBtnModel(props) {
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
            const response = await axios.post('http://localhost:8080/api/paint/createpaint', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            onCloseModal();
            props.displaySuccessToast();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <Button onClick={() => setOpenModal(true)} className='w-7 h-7 text-center flex justify-center items-center'>
                <FontAwesomeIcon icon={faFolderPlus}/>
            </Button>
            <Modal show={openModal} size="md" onClose={onCloseModal} popup>
                <Modal.Header/>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-6">
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white flex items-center justify-center">
                                Add New Paint Item</h3>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Paint / Accessory name"/>
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
                                    <option value="Other">Other</option>
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
                                    <option value="Accessories">Accessories</option>
                                    <option value="Other">Other</option>
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
                                           placeholder="990"
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

export default AddProductBtnModel;