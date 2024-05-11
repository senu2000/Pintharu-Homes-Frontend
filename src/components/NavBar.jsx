import { Button, Navbar } from "flowbite-react";
import React from "react";
import "../css/NavBar.css";
import Img1 from "../../public/Images/Logo.png";

export default function MyNavBar() {
    return (
        <>
            <div>
                <Navbar fluid rounded className="custom_sty">
                    <div>
                        <img src={Img1} className="editlogo" alt="Logo" />
                    </div>
                    <div className="elementedit">
                        <Navbar.Collapse className="toggleelmntedt">
                            <Navbar.Link href="#"  className="navitem active" >
                                Home
                            </Navbar.Link>
                            <Navbar.Link href="#" className="navitem">Products</Navbar.Link>
                            <Navbar.Link href="#" className="navitem">Projects</Navbar.Link>
                            <Navbar.Link href="#" className="navitem">About Us</Navbar.Link>
                            <Navbar.Link href="#" className="navitem">Contact Us</Navbar.Link>

                        </Navbar.Collapse>
                    </div>

                    <div>
                        <Button className="profilebtn">Profile</Button>
                        <Navbar.Toggle className="togglebtnedt"/>

                    </div>

                </Navbar>
            </div>
        </>
    );
}
