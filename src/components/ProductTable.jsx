import React, {useEffect, useState} from 'react';
import { Table } from "flowbite-react";
import DeleteBtnModel from "./DeleteBtnModel.jsx";
import EditProductBtnModel from "./EditProductBtnModel.jsx";
import "../css/Admin.css";
import axios from "axios";

function ProductTable(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const [paints, setPaints] = useState([]);

    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/paint');
                setPaints(response.data);
            } catch (error) {
                console.error('Error fetching paints:', error);
            }
        };

        fetchPaints();
        const intervalId = setInterval(fetchPaints, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = paints.filter((item) =>
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
                        <Table.HeadCell>Actual Price (LKR)</Table.HeadCell>
                        <Table.HeadCell>Discounted Price (LKR)</Table.HeadCell>
                        <Table.HeadCell>Volume (L)</Table.HeadCell>
                        <Table.HeadCell>
                            <input
                                type="text"
                                placeholder="Filter by name ..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="rounded-full text-center pr-2 border-blue-600 w-[170px]"
                            />
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {filteredData.map((item, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="">{item.name}</Table.Cell>
                                <Table.Cell><img src={`data:image/jpeg;base64,${item.imageData}`} alt={item.name} className='rounded-full w-10 h-10' /></Table.Cell>
                                <Table.Cell>{item.brand}</Table.Cell>
                                <Table.Cell>{item.quantity}</Table.Cell>
                                <Table.Cell>{item.category}</Table.Cell>
                                <Table.Cell>{item.noDisPrice}</Table.Cell>
                                <Table.Cell>{item.price}</Table.Cell>
                                <Table.Cell>{item.volume}</Table.Cell>
                                <Table.Cell><EditProductBtnModel item={item}/></Table.Cell>
                                <Table.Cell><DeleteBtnModel item={item} endpoint={"http://localhost:8080/api/paint" } alert={"Paint item"}/></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default ProductTable;
