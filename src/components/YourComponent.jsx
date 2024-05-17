import React, { useEffect, useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
    const [fileData, setFileData] = useState({});
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        const fetchFileDetails = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/file/fileSystem/test');
                const { fileData, imageData } = response.data;

                setFileData(fileData);

                // Set the Base64 image data as the src attribute
                setImageSrc(`data:${fileData.type};base64,${imageData}`);
            } catch (error) {
                console.error('Error fetching file details:', error);
            }
        };

        fetchFileDetails();
    }, []);

    return (
        <div>
            <h1>File Details</h1>
            <p>Name: {fileData.name}</p>
            <p>Type: {fileData.type}</p>
            <p>File Path: {fileData.filePath}</p>
            {/* Use the Base64 image data as src */}
            <img src={imageSrc} alt="File" />
        </div>
    );
};

export default YourComponent;
