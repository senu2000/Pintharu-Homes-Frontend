import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'flowbite-react';
import "../css/EditButtonGroup.css";
import {useLocation, Link} from "react-router-dom";

export default function Buttongroup() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const location = useLocation();

    const isLinkActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
    };

    return (
        <div>
            {isMobile ? (
                <div>
                    <Button
                        color="none"
                        className="modal-button"
                        onClick={openModal}
                    >
                        SELECT BRAND
                    </Button>
                    <div className="editmodal">
                        <Modal show={isModalOpen} onClose={closeModal}>
                            <Modal.Header>SELECT BRAND</Modal.Header>
                            <Modal.Body className="modal-body">
                                <div className="modal-content">
                                    <Link to="/allPaintItemsDuluxe"><Button
                                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsDuluxe')}`}>Duluxe</Button></Link>
                                    <Link to="/allPaintItemsMultilac"><Button
                                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsMultilac')}`}>Multilac</Button></Link>
                                    <Link to="/allPaintItemsJat"><Button
                                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsJat')}`}>Jat</Button></Link>
                                    <Link to="/allPaintItemsRobbialac"><Button
                                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsRobbialac')}`}>Robbialac</Button></Link>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            ) : (
                <Button.Group className="button-group">
                    <Button color="none" className="editbtntopic">SELECT BRAND</Button>
                    <Link to="/allPaintItemsDuluxe"><Button
                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsDuluxe')}`}>Duluxe</Button></Link>
                    <Link to="/allPaintItemsMultilac"><Button
                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsMultilac')}`}>Multilac</Button></Link>
                    <Link to="/allPaintItemsJat"><Button
                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsJat')}`}>Jat</Button></Link>
                    <Link to="/allPaintItemsRobbialac"><Button
                        color="none" className={`editbtnitem ${isLinkActive('/allPaintItemsRobbialac')}`}>Robbialac</Button></Link>
                </Button.Group>
            )}
        </div>
    );
}
