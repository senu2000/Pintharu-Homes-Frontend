import { Button, Navbar } from "flowbite-react";
import React from "react";
import "../css/NavBar.css";
import Img1 from "../../public/Images/Logo.png";
import { Link, useLocation } from "react-router-dom";

export default function MyNavBar({ scrollToSection, contactUsRef }) {
    const location = useLocation();

    const isLinkActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
    };

    const handleScroll = (sectionRef) => {
        scrollToSection(sectionRef);
    };

    return (
        <>
            <div>
                <Navbar fluid rounded className="custom_sty">
                    <div>
                        <img src={Img1} className="editlogo" alt="Logo" />
                    </div>
                    <div className="elementedit justify-center content-center">
                        <Navbar.Collapse className="toggleelmntedt">

                            <Link to="/" className={`navitem smnavitem ${isLinkActive('/')}`}>Home</Link>
                            <Link to="/allPaintItems" className={`navitem smnavitem ${isLinkActive('/allPaintItems')}`}>Products</Link>
                            <Link to="/allProjects" className={`navitem smnavitem ${isLinkActive('/allProjects')}`}>Projects</Link>
                            {/*<Link to="/aboutus" className={`navitem smnavitem ${isLinkActive('/aboutus')}`}>About Us</Link>*/}
                            <Link to="" className={`navitem smnavitem ${isLinkActive('/contactus')}`} onClick={() => handleScroll(contactUsRef)}>Get in Touch</Link>
                            <div className="profileBtnContainer2">
                                <Link to="/userProfile">
                                    <Button className="profilebtn">Profile</Button>
                                </Link>
                            </div>

                        </Navbar.Collapse>
                    </div>
                    <div className="rightside">
                        <Navbar.Toggle className="togglebtnedt" />
                        <div className="profileBtnContainer1">
                            <Link to="/userProfile">
                                <Button className="profilebtn">Profile</Button>
                            </Link>
                        </div>
                    </div>
                </Navbar>
            </div>
        </>
    );
}
