import React, {useEffect, useState} from 'react';
import axios from "axios";
import MyNavBar from "../components/NavBar.jsx";
import Icon5 from "../../public/Images/Icons/paintbrush.png";
import Buttongroup from "../components/ButtonGroup.jsx";
import Categorysidebar from "../components/SideBar.jsx";
import PaintProdcutCard from "../components/PaintProdcutCard.jsx";
import MyFooter from "../components/Footer.jsx";

function AllPaintItemsOtherBrands(props) {
    const [paints, setPaints] = useState([]);

    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/paint/brand/Other');
                setPaints(response.data);
            } catch (error) {
                console.error('Error fetching paints:', error);
            }
        };

        fetchPaints();
        const intervalId = setInterval(fetchPaints, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="shoppageback">
            <div className="shopback">
                <div className="editnavbar">
                    <MyNavBar />
                </div>
                <div>
                    <h1 className="shopheading">SHOP<img src={Icon5} className="editicon" /></h1>
                </div>
                <div className="EditBtnGroup">
                    <Buttongroup />
                </div>
            </div>
            <div className="shopline"></div>
            <div id="content" className="shopItemsSection">
                <div className="blurproducts">
                    <Categorysidebar />
                </div>
                <div >
                    <h1 className="shopProductsHeading">Other Paint Items</h1>
                    <div className="xl:grid-cols-4 lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-2 xs:flex-col productcards">
                        {paints.map((item, index) =>(
                            <div key={index}>
                                <PaintProdcutCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div><MyFooter /></div>
        </div>
    );
}

export default AllPaintItemsOtherBrands;