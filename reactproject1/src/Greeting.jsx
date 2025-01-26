import React, { useState } from 'react';

const Greeting = () => {
    const [name, setName] = useState('');
    const [greeting, setGreeting] = useState('');

    const handleButtonClick = () => {
        if (name.trim() !== '') {
            setGreeting(`שלום לך, ${name}!`);
        } else {
            setGreeting('');
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1 style={{ color: 'green' }}>{greeting}</h1>
            <input
                type="text"
                placeholder="כתוב את שמך כאן"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                    padding: '10px',
                    fontSize: '16px',
                    marginRight: '10px',
                    border: '1px solid #ccc',
                }}
            />
            <button
                onClick={handleButtonClick}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',
                }}
            >
                שלח
            </button>
        </div>
    );
};

export default Greeting;
