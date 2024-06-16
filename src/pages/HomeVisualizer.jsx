import React, {useState} from 'react';
import VideoMP4 from "../assets/Paint_Visualizer_Video.mp4";
import {ColorPicker, useColor} from "react-color-palette";
import MainBtn from "../components/MainBtn.jsx";
import axios from "axios";
import "../css/HomeVizualizer.css";
import MyNavBar from "../components/NavBar.jsx";

function HomeVisualizer(props) {
    const [image, setImage] = useState(null);
    const [base64Image, setBase64Image] = useState('');
    const [color, setColor] = useColor("hex", "#000000");

    const [coloredImage, setColoredImage] = useState(null);
    const img = `data:image/jpeg;base64,${coloredImage}`;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
            setBase64Image(reader.result.split(',')[1]);
        };
        reader.readAsDataURL(file);
    };

    const handleColorChange = (color) => {
        setColor(color);
    };

    const handleSubmit = () => {
        const rgbColor = color.rgb;
        const formattedColor = `[${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}]`;

        console.log(formattedColor);
        console.log("data:image/jpeg;base64," + base64Image);

        axios.put('http://127.0.0.1:8000/changecolor/', {
            color: formattedColor,
            image: "data:image/jpeg;base64," + base64Image,
        })
            .then(response => {
                console.log('Success:', response.data);
                setColoredImage(response.data)
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };
    return (
        <div className="colorvisualiser py-5 pb-5 f-body">
            <MyNavBar/>
            <div className="lg:grid lg:grid-cols-2 flex-col">
                <div className="container py-md-2 py-lg-5 lg:mt-28 lg:ml-8 p-8">
                    <div className="row justify-content-center align-items-center gap-5 gap-lg-0">
                        <div className="col-12 col-lg-6">
                            <h1 className="text-center mb-4 text-6xl font-bold text-blue-300 font-mono">
                                AI Paint Assistant</h1>
                            <video autoPlay loop muted playsInline className="w-100 img-fluid rounded-[15px]">
                                <source src={VideoMP4} type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
                <div className="image-color container-fluid  flex-col lg:scale-75 lg:-mt-28">
                    <div
                        className="col-12 col-md-6 m-12 flex flex-col items-center justify-center border-4 border-dashed border-gray-300 rounded-[15px] pr-3 pl-3 lg:h-[400px]">
                        {image && <img src={image} alt="Uploaded"
                                       className="w-[415px] h-[275px] rounded-[15px] img-fluid mt-3"/>}
                        <input type="file" className="flex justify-center mt-3 mb-3 rounded-[15px] text-white" accept="image/*"
                               onChange={handleImageChange}/>
                    </div>
                    <div className="col-12 col-md-6 m-12">
                        <ColorPicker width={200} height={150} color={color} onChange={handleColorChange}/>
                    </div>
                </div>
            </div>
            <div className="flex justify-center lg:-mt-36 -mt-6 mb-2 text-white" onClick={handleSubmit}>
                <MainBtn>Show Preview</MainBtn>
            </div>
            <div className="flex justify-center ml-12 mr-12">
                <img src={img} className="rounded-[15px]" alt=""/>
            </div>
        </div>
    );
}

export default HomeVisualizer;