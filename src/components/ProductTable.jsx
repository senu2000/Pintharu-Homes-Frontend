// import React,{useState} from 'react';
// import { Table } from "flowbite-react";
// import Img from "../../public/Images/Carousel3.jpg";
// import DeleteBtnModel from "./DeleteBtnModel.jsx";
// import EditProductBtnModel from "./EditProductBtnModel.jsx";
// import "../css/Admin.css";
//
// function ProductTable(props) {
//     const [searchTerm, setSearchTerm] = useState("");
//
//     const handleSearch = (e) => {
//         setSearchTerm(e.target.value);
//     };
//     return (
//         <div>
//             <div className="overflow-x-auto product-table">
//                 <Table className="table-fixed">
//                     <Table.Head>
//                         <Table.HeadCell>Paint name</Table.HeadCell>
//                         <Table.HeadCell>Image</Table.HeadCell>
//                         <Table.HeadCell>Brand</Table.HeadCell>
//                         <Table.HeadCell>Quantity</Table.HeadCell>
//                         <Table.HeadCell>Category</Table.HeadCell>
//                         <Table.HeadCell>Price</Table.HeadCell>
//                         <Table.HeadCell>Volume</Table.HeadCell>
//                         {/*<Table.HeadCell>*/}
//                         {/*    <span className="sr-only">Edit</span>*/}
//                         {/*</Table.HeadCell>*/}
//                         <Table.HeadCell>
//                             <input
//                                 type="text"
//                                 placeholder="Search by name"
//                                 value={searchTerm}
//                                 onChange={handleSearch}
//                             />
//                         </Table.HeadCell>
//                     </Table.Head>
//                     <Table.Body className="divide-y">
//
//                         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                             <Table.Cell className="">
//                                 {'Apple White'}
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <img src={Img} alt="" className='rounded-full w-10 h-10' />
//                             </Table.Cell>
//                             <Table.Cell>Sliver</Table.Cell>
//                             <Table.Cell>25</Table.Cell>
//                             <Table.Cell>Interiror</Table.Cell>
//                             <Table.Cell>Rs. 2100</Table.Cell>
//                             <Table.Cell>5L</Table.Cell>
//                             <Table.Cell>
//                                 <EditProductBtnModel/>
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <DeleteBtnModel/>
//                             </Table.Cell>
//                         </Table.Row>
//
//                         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                             <Table.Cell className="">
//                                 {'Apple White'}
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <img src={Img} alt="" className='rounded-full w-10 h-10' />
//                             </Table.Cell>
//                             <Table.Cell>Sliver</Table.Cell>
//                             <Table.Cell>25</Table.Cell>
//                             <Table.Cell>Interiror</Table.Cell>
//                             <Table.Cell>Rs. 2100</Table.Cell>
//                             <Table.Cell>5L</Table.Cell>
//                             <Table.Cell>
//                                 {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
//                                 {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
//                                 {/*</Link>*/}
//                                 <EditProductBtnModel/>
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <DeleteBtnModel/>
//                             </Table.Cell>
//                         </Table.Row>
//
//                         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                             <Table.Cell className="">
//                                 {'Apple White'}
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <img src={Img} alt="" className='rounded-full w-10 h-10' />
//                             </Table.Cell>
//                             <Table.Cell>Sliver</Table.Cell>
//                             <Table.Cell>25</Table.Cell>
//                             <Table.Cell>Interiror</Table.Cell>
//                             <Table.Cell>Rs. 2100</Table.Cell>
//                             <Table.Cell>5L</Table.Cell>
//                             <Table.Cell>
//                                 {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
//                                 {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
//                                 {/*</Link>*/}
//                                 <EditProductBtnModel/>
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <DeleteBtnModel/>
//                             </Table.Cell>
//                         </Table.Row>
//
//                         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                             <Table.Cell className="">
//                                 {'Apple White'}
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <img src={Img} alt="" className='rounded-full w-10 h-10' />
//                             </Table.Cell>
//                             <Table.Cell>Sliver</Table.Cell>
//                             <Table.Cell>25</Table.Cell>
//                             <Table.Cell>Interiror</Table.Cell>
//                             <Table.Cell>Rs. 2100</Table.Cell>
//                             <Table.Cell>5L</Table.Cell>
//                             <Table.Cell>
//                                 {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
//                                 {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
//                                 {/*</Link>*/}
//                                 <EditProductBtnModel/>
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <DeleteBtnModel/>
//                             </Table.Cell>
//                         </Table.Row>
//
//                         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                             <Table.Cell className="">
//                                 {'Apple White'}
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <img src={Img} alt="" className='rounded-full w-10 h-10' />
//                             </Table.Cell>
//                             <Table.Cell>Sliver</Table.Cell>
//                             <Table.Cell>25</Table.Cell>
//                             <Table.Cell>Interiror</Table.Cell>
//                             <Table.Cell>Rs. 2100</Table.Cell>
//                             <Table.Cell>5L</Table.Cell>
//                             <Table.Cell>
//                                 {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
//                                 {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
//                                 {/*</Link>*/}
//                                 <EditProductBtnModel/>
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <DeleteBtnModel/>
//                             </Table.Cell>
//                         </Table.Row>
//
//                         <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
//                             <Table.Cell className="">
//                                 {'Apple White'}
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <img src={Img} alt="" className='rounded-full w-10 h-10' />
//                             </Table.Cell>
//                             <Table.Cell>Sliver</Table.Cell>
//                             <Table.Cell>25</Table.Cell>
//                             <Table.Cell>Interiror</Table.Cell>
//                             <Table.Cell>Rs. 2100</Table.Cell>
//                             <Table.Cell>5L</Table.Cell>
//                             <Table.Cell>
//                                 {/*<Link to="#" className="font-medium text-cyan-600 hover:text-blue-900 dark:text-cyan-500">*/}
//                                 {/*    <FontAwesomeIcon icon={faPenToSquare} />*/}
//                                 {/*</Link>*/}
//                                 <EditProductBtnModel/>
//                             </Table.Cell>
//                             <Table.Cell>
//                                 <DeleteBtnModel/>
//                             </Table.Cell>
//                         </Table.Row>
//
//                     </Table.Body>
//                 </Table>
//             </div>
//         </div>
//     );
// }
//
// export default ProductTable;




import React, { useState } from 'react';
import { Table } from "flowbite-react";
import Img from "../../public/Images/Carousel3.jpg";
import DeleteBtnModel from "./DeleteBtnModel.jsx";
import EditProductBtnModel from "./EditProductBtnModel.jsx";
import "../css/Admin.css";

function ProductTable(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const tableData = [
        { name: 'Brilliant White', image: Img, brand: 'Silver', quantity: 25, category: 'Interior', price: 'Rs. 2100', volume: '5L' },
        { name: 'Bleu', image: Img, brand: 'Silver', quantity: 25, category: 'Interior', price: 'Rs. 2100', volume: '5L' },
        { name: 'Red', image: Img, brand: 'Silver', quantity: 25, category: 'Interior', price: 'Rs. 2100', volume: '5L' },
        { name: 'Gray', image: Img, brand: 'Silver', quantity: 25, category: 'Interior', price: 'Rs. 2100', volume: '5L' },
        { name: 'Orange', image: Img, brand: 'Silver', quantity: 25, category: 'Interior', price: 'Rs. 2100', volume: '5L' },
        { name: 'Yellow', image: Img, brand: 'Silver', quantity: 25, category: 'Interior', price: 'Rs. 2100', volume: '5L' },
        { name: 'Dark Blue', image: Img, brand: 'Silver', quantity: 25, category: 'Interior', price: 'Rs. 2100', volume: '5L' },
    ];

    const filteredData = tableData.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="overflow-x-auto product-table">
                <Table className="table-fixed">
                    <Table.Head>
                        <Table.HeadCell>Paint name</Table.HeadCell>
                        <Table.HeadCell>Image</Table.HeadCell>
                        <Table.HeadCell>Brand</Table.HeadCell>
                        <Table.HeadCell>Quantity</Table.HeadCell>
                        <Table.HeadCell>Category</Table.HeadCell>
                        <Table.HeadCell>Price</Table.HeadCell>
                        <Table.HeadCell>Volume</Table.HeadCell>
                        {/*<Table.HeadCell>*/}
                        {/*    <span className="sr-only">Edit</span>*/}
                        {/*</Table.HeadCell>*/}
                        <Table.HeadCell>
                            <input
                                type="text"
                                placeholder="Filter by name ..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="rounded-full text-center pr-2 border-blue-600"
                            />
                        </Table.HeadCell>


                    </Table.Head>
                    <Table.Body className="divide-y">

                        {/* Render filtered table rows */}
                        {filteredData.map((item, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="">{item.name}</Table.Cell>
                                <Table.Cell><img src={item.image} alt="" className='rounded-full w-10 h-10' /></Table.Cell>
                                <Table.Cell>{item.brand}</Table.Cell>
                                <Table.Cell>{item.quantity}</Table.Cell>
                                <Table.Cell>{item.category}</Table.Cell>
                                <Table.Cell>{item.price}</Table.Cell>
                                <Table.Cell>{item.volume}</Table.Cell>
                                <Table.Cell><EditProductBtnModel /></Table.Cell>
                                <Table.Cell><DeleteBtnModel /></Table.Cell>
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default ProductTable;
