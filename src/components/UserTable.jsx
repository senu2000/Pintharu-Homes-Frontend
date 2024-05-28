import React, {useEffect, useState} from 'react';
import { Table } from "flowbite-react";
import DeleteBtnModel from "./DeleteBtnModel.jsx";
import "../css/Admin.css";
import axios from "axios";

function UserTable(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const [Users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/user/allusers/USER');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching Users:', error);
            }
        };

        fetchUsers();
        const intervalId = setInterval(fetchUsers, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = Users.filter((item) =>
        item.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="overflow-x-auto product-table">
                <Table className="table-fixed">
                    <Table.Head>
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Address</Table.HeadCell>
                        <Table.HeadCell>Phone No</Table.HeadCell>
                        <Table.HeadCell>
                            <input
                                type="text"
                                placeholder="Filter by email ..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="rounded-full text-center pr-2 border-blue-600 "
                            />
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {filteredData.map((item, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>{item.username}</Table.Cell>
                                <Table.Cell>{item.address}</Table.Cell>
                                <Table.Cell>{item.phone_number}</Table.Cell>
                                <Table.Cell><DeleteBtnModel item={item} endpoint={"http://localhost:8080/api/user"} alert={"User"}/></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default UserTable;
