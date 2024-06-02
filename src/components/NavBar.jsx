// import { Button, Navbar } from "flowbite-react";
// import React from "react";
// import "../css/NavBar.css";
// import Img1 from "../../public/Images/Logo.png";
// import {Link, useLocation} from "react-router-dom";
//
// export default function MyNavBar() {
//
//     const location = useLocation();
//     let className = '';
//     switch (location.pathname) {
//         case '/':
//             className += 'active';
//             break;
//         case '/home':
//             className += 'active';
//             break;
//         case '/allPaintItems':
//             className += 'active';
//             break;
//         case '/allProjects':
//             className += 'active';
//             break;
//         case '/aboutus':
//             className += 'active';
//             break;
//         case '/contactus':
//             className += 'active';
//             break;
//     }
//
//     return (
//         <>
//             <div>
//                 <Navbar fluid rounded className="custom_sty">
//                     <div>
//                         <img src={Img1} className="editlogo" alt="Logo" />
//                     </div>
//                     <div className="elementedit">
//                         <Navbar.Collapse className="toggleelmntedt">
//                             {/*<Navbar.Link to="/"  className="navitem active" >*/}
//                             {/*    Home*/}
//                             {/*</Navbar.Link>*/}
//                             {/*<Navbar.Link href="#" className="navitem">Products</Navbar.Link>*/}
//                             {/*<Navbar.Link href="#" className="navitem">Projects</Navbar.Link>*/}
//                             {/*<Navbar.Link href="#" className="navitem">About Us</Navbar.Link>*/}
//                             {/*<Navbar.Link href="#" className="navitem">Contact Us</Navbar.Link>*/}
//
//                             <Link to="/" className={"navitem active" + className}>Home</Link>
//                             <Link to="/allPaintItems" className={className + 'navitem'}>Products</Link>
//                             <Link to="/allProjects" className={className + 'navitem'}>Projects</Link>
//                             <Link to="/" className={className + 'navitem'}>About Us</Link>
//                             <Link to="/" className={className + 'navitem'}>Contact Us</Link>
//
//                         </Navbar.Collapse>
//                     </div>
//
//                     <div>
//                         <Link to="/userProfile"><Button className="profilebtn">Profile</Button></Link>
//                         <Navbar.Toggle className="togglebtnedt"/>
//                     </div>
//
//                 </Navbar>
//             </div>
//         </>
//     );
// }



// import { Button, Navbar } from "flowbite-react";
// import React from "react";
// import "../css/NavBar.css";
// import Img1 from "../../public/Images/Logo.png";
// import { Link, useLocation } from "react-router-dom";
//
// export default function MyNavBar() {
//     const location = useLocation();
//
//     const isLinkActive = (pathname) => {
//         return location.pathname === pathname ? 'active' : '';
//     };
//
//     return (
//         <>
//             <div>
//                 <Navbar fluid rounded className="custom_sty">
//                     <div>
//                         <img src={Img1} className="editlogo" alt="Logo" />
//                     </div>
//                     <div className="elementedit justify-center content-center">
//                         <Navbar.Collapse className="toggleelmntedt">
//                             <Link to="/" className={`navitem smnavitem ${isLinkActive('/')}`}>Home</Link>
//                             <Link to="/allPaintItems" className={`navitem smnavitem ${isLinkActive('/allPaintItems')}`}>Products</Link>
//                             <Link to="/allProjects" className={`navitem smnavitem ${isLinkActive('/allProjects')}`}>Projects</Link>
//                             <Link to="/aboutus" className={`navitem smnavitem ${isLinkActive('/aboutus')}`}>About Us</Link>
//                             <Link to="/contactus" className={`navitem smnavitem ${isLinkActive('/contactus')}`}>Contact Us</Link>
//                             <Link to="/userProfile" className="justify-center content-center flex"><Button className="profilebtn">Profile</Button></Link>
//                         </Navbar.Collapse>
//                     </div>
//                     <div className="rightside">
//                         <Navbar.Toggle className="togglebtnedt" />
//                     </div>
//                 </Navbar>
//             </div>
//         </>
//     );
// }



import { Button, Navbar } from "flowbite-react";
import React from "react";
import "../css/NavBar.css";
import Img1 from "../../public/Images/Logo.png";
import { Link, useLocation } from "react-router-dom";

export default function MyNavBar() {
    const location = useLocation();

    const isLinkActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
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
                            <Link to="/aboutus" className={`navitem smnavitem ${isLinkActive('/aboutus')}`}>About Us</Link>
                            <Link to="/contactus" className={`navitem smnavitem ${isLinkActive('/contactus')}`}>Contact Us</Link>
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
