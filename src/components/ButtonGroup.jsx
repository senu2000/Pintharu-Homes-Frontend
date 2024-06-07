import React, {useState, useEffect} from 'react';
import {Button, Modal} from 'flowbite-react';
import "../css/EditButtonGroup.css";
import {useLocation,Link} from "react-router-dom";

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

    const location =useLocation();

    const isLinkActive = (pathname)  => {
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
                                    <Button color="none" className="editbtnitem">Duluxe</Button>
                                    <Button color="none" className="editbtnitem">Multilac</Button>
                                    <Button color="none" className="editbtnitem">Jat</Button>
                                    <Button color="none" className="editbtnitem">Robbilac</Button>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </div>
                </div>
            ) : (
                <Button.Group className="button-group">
                    <Button color="none" className="editbtntopic">SELECT BRAND</Button>
                    <Link to="/AllPaintItemsDuluxe" className={`${isLinkActive('/AllPaintItemsDuluxe')}`}><Button color="none" className="editbtnitem">Duluxe</Button></Link>
                    <Button color="none" className="editbtnitem">Multilac</Button>
                    <Button color="none" className="editbtnitem">Jat</Button>
                    <Button color="none" className="editbtnitem">Robbilac</Button>
                </Button.Group>
            )}
        </div>
    );
}
