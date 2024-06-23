import { Footer } from "flowbite-react";
import Img2 from "../../public/Images/Logo1.png";
import React from "react";
import '../css/Footer.css'
import {Link} from "react-router-dom";

export default function MyFooter() {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between footeritemsedit">
                    <img src={Img2} className="editlogo1" alt="Logo" />
                    <Footer.LinkGroup className="footerlinksedit">
                        {/*<Link to="/allPaintItems">Products</Link>*/}
                        <Footer.Link href="#"> <Link to="/allPaintItems">Products</Link></Footer.Link>
                        <Footer.Link href="#"><Link to="/allProjects">Projects</Link></Footer.Link>
                        <Footer.Link href="#"><Link to="/">About Us/Contact Us</Link></Footer.Link>
                        {/*<Footer.Link href="#">Contact</Footer.Link>*/}
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Pintharu Homes" year={2024} />
            </div>
        </Footer>
    );
}
