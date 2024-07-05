import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import SockJS from 'sockjs-client/dist/sockjs';
import {FaPaperclip} from "react-icons/fa";
import {over} from "stompjs";
import MyFooter from "../components/Footer.jsx";

var stompClient = null;

// Polyfill global for browser environment
// window.global = window;

function ChatPage(props) {
    const navigate = useNavigate();
    if (localStorage.getItem("chat-username").trim().length === 0) {
        navigate("/userProfile");
    }

    const [username] = useState(localStorage.getItem("chat-username"));
    const [receiver, setReceiver] = useState("");
    const [message, setMessage] = useState("");
    const [media, setMedia] = useState("");
    const [tab, setTab] = useState("CHATROOM");
    const [publicChats, setPublicChats] = useState([]);
    const [privateChats, setPrivateChats] = useState(new Map());

    const onMessageReceived = (payload) => {
        const payloadData = JSON.parse(payload.body);
        console.log(payloadData);
        switch (payloadData.status) {
            case "JOIN":
                if (payloadData.senderName != username) {
                    if (!privateChats.get(payloadData.senderName)) {
                        privateChats.set(payloadData.senderName, []);
                        setPrivateChats(new Map(privateChats));
                    }
                }
                break;
            case "LEAVE":
                if (payloadData.senderName != username) {
                    if (privateChats.get(payloadData.senderName)) {
                        privateChats.delete(payloadData.senderName);
                        setPrivateChats(new Map(privateChats));
                    }
                }
                break;
            case "MESSAGE":
                publicChats.push(payloadData);
                setPublicChats((prev) => [...prev, payloadData]);
        }
    };

    const onPrivateMessage = (payload) => {
        console.log(payload);
        var payloadData = JSON.parse(payload.body);
        if (privateChats.has(payloadData.senderName)) {
            const chatMessages = privateChats.get(payloadData.senderName);
            chatMessages.push(payloadData);
            privateChats.set(payloadData.senderName, chatMessages);
            setPrivateChats(new Map(privateChats));
        } else {
            let list = [];
            list.push(payloadData);
            privateChats.set(payloadData.senderName, list);
            setPrivateChats(new Map(privateChats));
        }
    };

    const onConnect = () => {
        console.log("Connected");
        stompClient.subscribe("/chatroom/public", onMessageReceived);
        stompClient.subscribe(`/user/${username}/private`, onPrivateMessage);
        userJoin();
    };
    const onError = (err) => {
        console.log("err=>", err);
    };
    const handleLogout = () => {
        userLeft();
        localStorage.removeItem("chat-username");
        navigate("/userProfile");
    };
    //userJoin
    const userJoin = () => {
        let chatMessage = {
            senderName: username,
            status: "JOIN",
        };

        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    };
    //userLeft
    const userLeft = () => {
        let chatMessage = {
            senderName: username,
            status: "LEAVE",
        };

        stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
    };

    const connect = () => {
        let sock = new SockJS("http://localhost:8080/ws");
        stompClient = over(sock);
        stompClient.connect({}, onConnect, onError);
    };

    useEffect(() => {
        connect();
    }, []);

    //file handler method
    async function base64ConversionForImages(e) {
        if (e.target.files[0]) {
            getBase64(e.target.files[0]);
        }
    }

    function getBase64(file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            setMedia(reader.result);
            const base64Data = reader.result;

            setMedia(base64Data);
        };
        reader.onerror = function (error) {
            console.log("Error", error);
        };
    }

    //send chatroom message
    const sendMessage = () => {
        if (message.trim().length > 0 || message.media != null) {
            stompClient.send(
                "/app/message",
                {},
                JSON.stringify({
                    senderName: username,
                    status: "MESSAGE",
                    media: media,
                    message: message,
                })
            );
            setMessage("");
            setMedia("");
        }
    };

    //send Private message
    const sendPrivate = () => {
        if (message.trim().length > 0) {
            if (stompClient) {
                let chatMessage = {
                    senderName: username,
                    receiverName: tab,
                    message: message,
                    media: media,
                    status: "MESSAGE",
                };

                privateChats.get(tab).push(chatMessage);
                setPrivateChats(new Map(privateChats));

                stompClient.send(
                    "/app/private-message",
                    {},
                    JSON.stringify(chatMessage)
                );
                setMessage("");
                setMedia("");
            }
        }
    };

    const tabReceiverSet = (name) => {
        setReceiver(name);
        setTab(name);
    };




    return (
        <div style={{
            minheight: "100vh",
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../public/Images/chat-bg3.jpg")`,
            backgroundRepeat: "none",
            backgroundSize: "cover",
        }}>
            <div className="text-gray-300 flex justify-center text-center items-center pt-8">
                <div className="inline-flex items-baseline font-light"
                     >
                    <span className="self-center">Welcome to &nbsp;&nbsp;</span>
                    <span className="text-6xl font-medium" style={{
                        backgroundImage: `url("https://media.giphy.com/media/26BROrSHlmyzzHf3i/giphy.gif")`,
                        backgroundSize: "cover",
                        color: "transparent",
                        backgroundClip: "text",
                        backgroundPosition: "top"
                    }}>PINTHARU </span>
                    <span className="self-center">&nbsp;&nbsp; Chatz</span>
                </div>
            </div>
            <div
                className="flex justify-center items-center"
            >
                <div className="container flex p-16 justify-center items-center text-center">
                    {/*Member List */}
                    <div
                        className="chat-tab p-3 mr-3"
                        style={{
                            width: "200px",
                            height: "551px",
                            backgroundColor: "transparent",
                            backdropFilter: "blur(20px)",
                            border: "1px solid white",
                            borderRadius: "25px 25px 25px 25px"
                        }}
                    >
                        <ul className="list-group">
                            <li
                                key={"o"}
                                className={`list-group-item ${
                                    tab === "CHATROOM" && "bg-gray-400 rounded-full flex justify-center text-center items-center text-white"
                                }`}
                                onClick={() => setTab("CHATROOM")}
                            >
                                <span className="text-white flex text-center justify-center p-2 cursor-pointer">Chat Room</span>
                            </li>
                            {[...privateChats.keys()].map((name, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={() => tabReceiverSet(name)}
                                        className={`list-group-item ${
                                            tab === name && "bg-orange-400 text-center rounded-full p-2 text-white cursor-pointer"
                                        }`}
                                    >
                                        <span className="fs-5 text-white">{name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex-col" style={{
                        flexGrow: 1,
                        backgroundColor: "transparent",
                        backdropFilter: "blur(20px)"
                    }}>
                        {/*Chat box */}
                        <div
                            className="chat-messages p-3"
                            style={{
                                height: "500px",
                                flexGrow: 1,
                                backgroundColor: "transparent",
                                overflowY: "scroll",
                                padding: "2px",
                                border: "1px solid white",
                                borderRadius: "25px 0 0 0",
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            {tab === "CHATROOM"
                                ? publicChats.map((message, index) => {
                                    if (message.senderName !== username) {
                                        return (
                                            <div className="flex justify-start" key={index}>
                                                <div
                                                    className="flex p-2"
                                                    style={{
                                                        borderTopRightRadius: "5px",
                                                        borderBottomRightRadius: "5px",
                                                        borderTopLeftRadius: "5px",
                                                        backgroundColor: "white",
                                                    }}
                                                >
                                                    <div className="rounded-3 px-2 me-2 self-start">
                                                        <div className="bg-warning">
                                                            {message.senderName}
                                                        </div>
                                                        <div>
                                                            <div>{message.message}</div>
                                                            <div>
                                                                {message.media && (
                                                                    <img
                                                                        src={message.media}
                                                                        alt="media"
                                                                        style={{
                                                                            maxWidth: "150px",
                                                                            maxHeight: "150px",
                                                                        }}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className="flex justify-end" key={index}>
                                                <div
                                                    className="flex p-2 "
                                                    style={{
                                                        borderTopRightRadius: "5px",
                                                        borderTopLeftRadius: "5px",
                                                        borderBottomLeftRadius: "5px",
                                                        backgroundColor: "lightblue",
                                                    }}
                                                >
                                                    <div className="rounded-3 px-2 me-2 self-end">
                                                        <div className="bg-success">{message.senderName}</div>
                                                        <div>
                                                            <div>{message.message}</div>
                                                            <div>
                                                                {message.media && (
                                                                    <img
                                                                        src={message.media}
                                                                        alt="media"
                                                                        style={{
                                                                            maxWidth: "150px",
                                                                            maxHeight: "150px",
                                                                        }}
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })
                                : privateChats.get(tab) &&
                                privateChats.get(tab).map((message, index) => (
                                    <div
                                        className=""
                                        key={index}
                                    >
                                        {message.senderName !== username ? (
                                            <div
                                                className="flex p-1 pl-4 justify-start "
                                                style={{
                                                    borderTopRightRadius: "25px",
                                                    borderBottomRightRadius: "25px",
                                                    borderTopLeftRadius: "25px",
                                                    // backgroundColor: "white",
                                                }}
                                            >
                                                <div
                                                    className="rounded-3 p-1 pl-3 pr-3 rounded-tr-2xl rounded-tl-2xl rounded-br-2xl  bg-gray-300 me-2 self-start justify-start w-auto">
                                                    <div className="text-[10px] flex justify-start bg-warning">
                                                        {message.senderName}
                                                    </div>
                                                    <div>
                                                        <div>{message.message}</div>
                                                        <div>
                                                            {message.media && (
                                                                <img
                                                                    src={message.media}
                                                                    alt="media"
                                                                    style={{
                                                                        maxWidth: "75px",
                                                                        maxHeight: "750px",
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div
                                                className="flex p-4 justify-end  "
                                                style={{
                                                    borderTopRightRadius: "25px",
                                                    borderTopLeftRadius: "25px",
                                                    borderBottomLeftRadius: "25px",
                                                    // backgroundColor: "orange",
                                                }}
                                            >
                                                <div
                                                    className="rounded-3 p-3 rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl  me-2 self-end justify-end flex w-auto bg-orange-200">
                                                    {/*<div className="bg-success">*/}
                                                    {/*    {message.senderName}*/}
                                                    {/*</div>*/}
                                                    <div>
                                                        <div>{message.message}</div>
                                                        <div>
                                                            {message.media && (
                                                                <img
                                                                    src={message.media}
                                                                    alt="media"
                                                                    style={{
                                                                        maxWidth: "75px",
                                                                        maxHeight: "750px",
                                                                    }}
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                        </div>
                        {/*Input Box*/}
                        <div
                            className="lg:p-3 pt-12 pb-12 border border-white flex justify-center items-center"
                            style={{
                                height: "50px",
                                borderLeft: "1px solid white",
                                borderBottomLeftRadius: "25px",
                                borderBottomRightRadius: "25px",
                            }}
                        >
                            <div
                                className="flex justify-between"
                                style={{
                                    width: "100%",
                                }}
                            >
                                <div className="inline-flex items-baseline ml-3">
                                    <input
                                        className="form-control rounded-full lg:w-[700px]"
                                        type="text"
                                        placeholder="Write your message here !"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                    <input
                                        type="file"
                                        id="fileInput"
                                        className="hidden self-center"
                                        accept="image/*"
                                        onChange={base64ConversionForImages}
                                    />
                                    <label htmlFor="fileInput"
                                           className="cursor-pointer -rotate-45 text-center self-center text-3xl">
                                        <FaPaperclip className="text-white text-xl"/>
                                    </label>
                                </div>
                                <div className="flex justify-center items-center">
                                    <button
                                        className="btn bg-orange-400 pl-5 pr-5 p-2 rounded-full"
                                        type="button"
                                        onClick={
                                            tab === "CHATROOM"
                                                ? sendMessage
                                                : sendPrivate
                                        }
                                    >
                                        Send
                                    </button>
                                    <button
                                        className="btn bg-orange-400 pl-3 pr-3 p-2 ml-3 rounded-full"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-9">
                <MyFooter/>
            </div>
        </div>
    );
}

export default ChatPage;





