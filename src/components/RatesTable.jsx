import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "flowbite-react";
import DeleteBtnModel from "./DeleteBtnModel.jsx";
import EditRateBtnModel from "./EditRateBtnModel.jsx";

function RatesTable(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const [quotation, setQuotation] = useState([]);

    useEffect(() => {
        const fetchQuotations = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/quotation');
                setQuotation(response.data);
            } catch (error) {
                console.error('Error fetching quotation:', error);
            }
        };

        fetchQuotations();
        const intervalId = setInterval(fetchQuotations, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = quotation.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="overflow-x-auto product-table">
                <Table className="table-fixed">
                    <Table.Head>
                        <Table.HeadCell>Work</Table.HeadCell>
                        <Table.HeadCell>Quotation for 1 ft²</Table.HeadCell>
                        <Table.HeadCell className="flex justify-center items-center">
                            <input
                                type="text"
                                placeholder="Filter by name ..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="rounded-full text-center pr-2 border-blue-600 "
                            />
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {filteredData.map((item, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{item.name}</Table.Cell>
                                <Table.Cell>Rs. {item.unit_price}</Table.Cell>
                                <Table.Cell className="flex justify-center items-center"><EditRateBtnModel item={item}/></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default RatesTable;