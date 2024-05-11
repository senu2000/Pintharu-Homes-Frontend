// import React, { useState } from 'react';
// import axios from 'axios';
//
// const ImageUploader = () => {
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [message, setMessage] = useState('');
//
//     const handleFileChange = (e) => {
//         setSelectedFile(e.target.files[0]);
//     };
//
//     const handleUpload = async () => {
//         if (!selectedFile) {
//             setMessage('Please select an image file.');
//             return;
//         }
//
//         const formData = new FormData();
//         formData.append('image', selectedFile);
//
//         try {
//             const response = await axios.post('http://localhost:8080/api/file/fileSystem', formData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             setMessage(response.data);
//         } catch (error) {
//             setMessage('An error occurred while uploading the image.');
//             console.error('Error:', error);
//         }
//     };
//
//     return (
//         <div>
//             <input type="file" onChange={handleFileChange} accept="image/*" />
//             <button onClick={handleUpload}>Upload Image</button>
//             <p>{message}</p>
//         </div>
//     );
// };
//
// export default ImageUploader;




import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!image || !name) {
            setError('Please select an image and enter a name');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('name', name);

        try {
            const response = await axios.post('http://localhost:8080/api/paint/fileSystem', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
            setError('');
        } catch (error) {
            console.error('Error uploading image:', error);
            setError('Error uploading image');
        }
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="image">Image:</label>
                    <input type="file" id="image" onChange={handleImageChange} accept="image/*" />
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" value={name} onChange={handleNameChange} />
                </div>
                <button type="submit">Upload</button>
                {error && <div style={{ color: 'red' }}>{error}</div>}
            </form>
        </div>
    );
};

export default ImageUploader;

