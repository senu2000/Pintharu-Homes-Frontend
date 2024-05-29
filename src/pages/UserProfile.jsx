import React from 'react';
import Img1 from "../../public/Images/video-call-icon-logo.jpg";
import Img2 from "../../public/Images/chat.png";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocationDot, faPhone, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import "../css/UserProfile.css";
import MainBtn from "../components/MainBtn.jsx";
import {Link} from "react-router-dom";
import UserProfileCard from "../components/UserProfileCard.jsx";

function UserProfile(props) {
    return (
        <div className="page-container">
            <div className="">
                <div className="full-profile">
                    <div className="relative py-16 bg-blueGray-200 mt-64">
                        <div className="container mx-auto px-4">
                            <div
                                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-3/12 px-4 order-2 flex justify-center mt-4 lg:mt-8">
                                            <div className="profile-image">
                                                <img
                                                    src="https://media.giphy.com/media/d83JuRsfcBMs1vYDvk/giphy.gif?cid=790b7611yllh2kmufhss66dj9uyu6ryapk1m39gs6ddwvgr3&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                                                    alt=""
                                                    className="shadow-xl rounded-full h-1/5 align-middle border-none absolute -m-20 -ml-20 lg:-ml-16 max-w-150-px"/>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-4/12 lg:px-48 order-1 lg:text-right lg:self-start mt-16 lg:mt-0">
                                            <div className="py-6 px-3 mt-4 lg:mt-0">
                                                <Link to="/">
                                                    <MainBtn>Back to Home</MainBtn>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 lg:px-4 order-3 lg:text-right lg:self-start">
                                            <div className="py-6 px-3 mt-6 lg:mt-0">
                                                <Link to="/">
                                                    <MainBtn>Logout</MainBtn>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center ">
                                        <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            <FontAwesomeIcon icon={faEnvelope}/> &nbsp;
                                            senuraadithya4@gmail.com
                                        </h3>
                                        <div
                                            className="text-sm leading-normal mt-0 mb-3 text-blueGray-400 font-bold uppercase">
                                            <FontAwesomeIcon icon={faLocationDot}/> &nbsp;
                                            2/27, Ganga Addarawatta, Makuluwa, Galle
                                        </div>
                                        <div className="mb-2 text-blueGray-600 ">
                                            <FontAwesomeIcon icon={faPhone}/> &nbsp;
                                            071610624
                                        </div>
                                        <div className="mb-2 text-blueGray-600">
                                            <FontAwesomeIcon icon={faCircleCheck} style={{color: "#63E6BE"}}/> &nbsp;
                                            verified user
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    " Welcome to Pintharu Homes, where luxury meets convenience.
                                                    Explore our range of special features designed to elevate your
                                                    living experience. Step into the future with Pintharu Homes, where
                                                    we bring intelligent features right to your doorstep. Experience
                                                    the future of living with Pintharu Homes today . "
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex justify-center">
                        <UserProfileCard message="Make a appoinment" image={Img1}/>
                        <UserProfileCard message="Chat with Pintharu Homes" image={Img2}/>
                        <UserProfileCard message="Try AI Paint Assistant" image={Img2}/>
                        <UserProfileCard message="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; View  My &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cart" image={Img2}/>
                        <UserProfileCard message="Check My Orders" image={Img2}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;
