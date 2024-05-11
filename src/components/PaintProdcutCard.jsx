import {Card} from "flowbite-react";
import '../css/PaintProdcutCard.css';
import Prdct1 from "../../public/Images/Products/13-removebg-preview.png";

export default function PaintProdcutCard() {
    return (
        <Card
            className="paintcardimg"
            imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
            imgSrc={Prdct1}
        >
            <a href="#">
                <h5 className="sm:text-lg font-semibold tracking-tight text-gray-900 dark:text-white productcardtext">
                    Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                </h5>
            </a>
            <div className="flex items-center justify-between productcardtext" >
                <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                <a href="#"
                    className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 productcard-button"
                >
                    Add to cart
                </a>
            </div>
        </Card>
    );
}
