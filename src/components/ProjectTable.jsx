import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Table} from "flowbite-react";
import EditProductBtnModel from "./EditProductBtnModel.jsx";
import DeleteBtnModel from "./DeleteBtnModel.jsx";
import EditProjectBtnModel from "./EditProjectBtnModel.jsx";

function ProjectTable(props) {
    const [searchTerm, setSearchTerm] = useState("");

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/project');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching paints:', error);
            }
        };

        fetchProjects();
        const intervalId = setInterval(fetchProjects, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = projects.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="overflow-x-auto product-table">
                <Table className="table-fixed">
                    <Table.Head>
                        <Table.HeadCell>Project name</Table.HeadCell>
                        <Table.HeadCell>Description</Table.HeadCell>
                        <Table.HeadCell>Main Image</Table.HeadCell>
                        <Table.HeadCell>Second Image</Table.HeadCell>
                        <Table.HeadCell>Third Image</Table.HeadCell>
                        <Table.HeadCell>Fourth Image</Table.HeadCell>
                        {/*<Table.HeadCell>Volume (L)</Table.HeadCell>*/}
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
                        {filteredData.map((item, index) => (
                            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="">{item.name}</Table.Cell>
                                <Table.Cell>{item.description}</Table.Cell>
                                <Table.Cell><img src={`data:image/jpeg;base64,${item.imageData1}`} alt={item.name} className='rounded-[15px] w-20 h-20' /></Table.Cell>
                                <Table.Cell><img src={`data:image/jpeg;base64,${item.imageData2}`} alt={item.name} className='rounded-[15px] w-20 h-20' /></Table.Cell>
                                <Table.Cell><img src={`data:image/jpeg;base64,${item.imageData3}`} alt={item.name} className='rounded-[15px] w-20 h-20' /></Table.Cell>
                                <Table.Cell><img src={`data:image/jpeg;base64,${item.imageData4}`} alt={item.name} className='rounded-[15px] w-20 h-20' /></Table.Cell>
                                <Table.Cell><EditProjectBtnModel item={item}/></Table.Cell>
                                <Table.Cell><DeleteBtnModel item={item} endpoint={"http://localhost:8080/api/project" } alert={"Paint project"}/></Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </div>
    );
}

export default ProjectTable;