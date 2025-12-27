'use client';
import React, { useState } from 'react';

export function BotonLuz() {

    const [isOn, setIsOn] = useState(true);

    // Manejo del Click
    const handleToggle = () => {

        setIsOn(!isOn);
    };

    return (

        <button onClick={handleToggle}>

            {isOn ? 'Encendido' : 'Apagado'}
        </button>

    );
}