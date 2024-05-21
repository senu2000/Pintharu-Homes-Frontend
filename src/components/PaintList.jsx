import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaintList = () => {
    const [paints, setPaints] = useState([]);

    useEffect(() => {
        const fetchPaints = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/paint/name/aaaa');
                setPaints(response.data);
            } catch (error) {
                console.error('Error fetching paints:', error);
            }
        };

        fetchPaints();
    }, []);

    return (
        <div>
            <h1>Paints</h1>
            <div>
                {paints.map(paint => (
                    <div key={paint.id}>
                        <h2>{paint.name}</h2>
                        <img src={`data:image/jpeg;base64,${paint.imageData}`} alt={paint.name} />
                        <p>Brand: {paint.brand}</p>
                        <p>Quantity: {paint.quantity}</p>
                        <p>Category: {paint.category}</p>
                        <p>Price: {paint.price}</p>
                        <p>Volume: {paint.volume}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PaintList;
