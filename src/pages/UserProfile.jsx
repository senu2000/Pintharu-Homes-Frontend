import React, {useEffect} from 'react';
import Img1 from "../../public/Images/video-call-icon-logo.jpg";
import Img2 from "../../public/Images/chat.png";
import Img3 from "../../public/Images/paint-assistant-logo.png";
import Img4 from "../../public/Images/cart-logo-2.jpg";
import Img5 from "../../public/Images/order-logo.jpg";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLocationDot, faPhone, faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import "../css/UserProfile.css";
import MainBtn from "../components/MainBtn.jsx";
import {Link, useNavigate} from "react-router-dom";
import UserProfileCard from "../components/UserProfileCard.jsx";
import {Button, Modal} from "flowbite-react";
import {useState} from "react"
import CalendlyWidget from "../components/CalendlyWidget.jsx";
import axios from "axios";
import MyFooter from "../components/Footer.jsx";

function UserProfile(props) {

    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [userData, setUserData] = useState(null);

    // const history = useHistory();
    const [username, setUsername] = useState();

    const handleLogin = () => {
        localStorage.setItem("chat-username", username);
        navigate("/chat");
        // history.push("/chat");
    };

    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        try {
            const tokenResponse = await axios.get(`http://localhost:8080/api/user/token/${localStorage.getItem('token')}`,);
            console.log(tokenResponse);
            const userId = tokenResponse.data.userId;
            localStorage.setItem("userId", userId)

            const userResponse = await axios.get(`http://localhost:8080/api/user/byId/${userId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            const userData = userResponse.data;
            setUserData(userData);
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    const handleLogout = () => {
        // axios.get('http://localhost:8080/logout',{
        //     headers: {
        //         Authorization: `Bearer ${localStorage.getItem('token')}`
        //     }
        // });
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
        window.location.reload();
    };

    if (!userData) {
        return(
            <div className="flex justify-center content-center items-center h-screen w-screen">
                {/*Loading...*/}
                <img src="../../public/Images/loading5.gif" alt="" className="w-60"/>
            </div>
        );
    }

    function goback() {
        navigate("/");
    }

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
                                                    src="../../public/Images/paintingGIF.webp"
                                                    // src="https://media.giphy.com/media/d83JuRsfcBMs1vYDvk/giphy.gif?cid=790b7611yllh2kmufhss66dj9uyu6ryapk1m39gs6ddwvgr3&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                                                    alt=""
                                                    className="shadow-xl rounded-full h-1/5 align-middle border-none absolute -m-20 -ml-20 lg:-ml-16 max-w-150-px"/>
                                            </div>
                                        </div>
                                        <div
                                            className="w-full lg:w-4/12 lg:px-48 order-1 lg:text-right lg:self-start mt-0 lg:mt-0">
                                            <div className="py-4 lg:py-6 px-8 lg:px-1 mt-4 lg:mt-0">
                                                <Link to="/">
                                                    <MainBtn>Back to Home</MainBtn>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-4/12 lg:px-4 order-3 lg:text-right lg:self-start">
                                            <div className="py-3 lg:py-6 px-0.5 lg:px-12 mt-6 lg:mt-0">
                                                <div onClick={handleLogout}>
                                                    <MainBtn>Logout</MainBtn>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center ">
                                        <h3 className="text-2xl lg:text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                            <FontAwesomeIcon icon={faEnvelope}
                                                             style={{height: "27px"}}/>&nbsp;
                                            {/*senuraadithya4@gmail.com*/}
                                            {userData.username}
                                        </h3>
                                        <div
                                            className="text-sm leading-normal mt-0 mb-3 text-blueGray-400 font-bold uppercase">
                                            <FontAwesomeIcon icon={faLocationDot}/> &nbsp;
                                            {/*2/27, Ganga Addarawatta, Makuluwa, Galle*/}
                                            {userData.address}
                                        </div>
                                        <div className="mb-2 text-blueGray-600 ">
                                            <FontAwesomeIcon icon={faPhone}/> &nbsp;
                                            {/*071610624*/}
                                            {userData.phone_number}
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
                    <div className="lg:grid lg:grid-cols-5 sm:flex-col">
                        <div onClick={() => setOpenModal(true)}>
                            <UserProfileCard message="Make an appoinment" image={Img1}/>
                        </div>
                        <div onClick={() => setOpenModal2(true)}>
                            <UserProfileCard message="Chat with Pintharu Homes" image={Img2}/>
                        </div>
                        <div>
                            <Link to="/homeVisualizer">
                                <UserProfileCard message="Try AI Paint Assistant" image={Img3}/>
                            </Link>
                        </div>
                        <div>
                            <Link to="/cart">
                                <UserProfileCard
                                    message="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; View  My &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cart"
                                    image={Img4}/>
                            </Link>
                        </div>
                        <div>
                            <Link to="/myOrders">
                                <UserProfileCard message="Check My Orders" image={Img5}/>
                            </Link>
                        </div>

                        <Modal show={openModal} onClose={() => setOpenModal(false)}>
                            <Modal.Header className="justify-center text-center font-bold">Take a 30-min meeting
                                with our experts and make your paint job easier</Modal.Header>
                            <Modal.Body>
                                <div className="space-y-6">
                                    <CalendlyWidget/>
                                </div>
                            </Modal.Body>
                            <Modal.Footer className="justify-center">
                                <Button color="gray" onClick={() => setOpenModal(false)}>
                                    Back
                                </Button>
                            </Modal.Footer>
                        </Modal>



                        <Modal show={openModal2} onClose={() => setOpenModal2(false)}>
                            <Modal.Header className="justify-center text-center font-light"> Connect with Pintharu Chatz
                                and ask & know anything from our experts</Modal.Header>
                            <Modal.Body>
                                <div className="justify-center text-center">
                                    <input
                                        type="text"
                                        name=""
                                        id=""
                                        className="rounded-full form-control border-orange-400 text-center"
                                        placeholder="Enter your name"
                                        onChange={(e) => setUsername(e.target.value)}
                                        onKeyUp={(e) => {
                                            // console.log(e.key);
                                            if (e.key == "Enter" || e.key == 13) handleLogin();
                                        }}
                                    />
                                    <button type="button" value={"Connect"} onClick={handleLogin} className="ml-5 h-10 rounded-full animatedbtn3">
                                        <span>Connect >>></span>
                                    </button>
                                </div>
                            </Modal.Body>
                            <Modal.Footer className="justify-center">
                                <Button color="gray" onClick={() => setOpenModal2(false)}>
                                    Back
                                </Button>
                            </Modal.Footer>
                        </Modal>

                    </div>
                </div>
                <MyFooter/>
            </div>
        </div>
    );
}

export default UserProfile;
