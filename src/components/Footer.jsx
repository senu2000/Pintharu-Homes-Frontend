import { Footer } from "flowbite-react";
import Img2 from "../../public/Images/Logo1.png";
import React from "react";
import '../css/Footer.css'

export default function MyFooter() {
    return (
        <Footer container>
            <div className="w-full text-center">
                <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                    <img src={Img2} className="editlogo1" alt="Logo" />
                    <Footer.LinkGroup className="footerlinksedit">
                        <Footer.Link href="#">About</Footer.Link>
                        <Footer.Link href="#">Privacy Policy</Footer.Link>
                        <Footer.Link href="#">Licensing</Footer.Link>
                        <Footer.Link href="#">Contact</Footer.Link>
                    </Footer.LinkGroup>
                </div>
                <Footer.Divider />
                <Footer.Copyright href="#" by="Flowbite™" year={2022} />
            </div>
        </Footer>
    );
}
