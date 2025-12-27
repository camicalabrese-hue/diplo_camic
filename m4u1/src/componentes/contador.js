'use client';
import React, { useState } from 'react';


export function Contador() {
    const [contador, setContador] = useState(0);

    const handleClick = () => {
        setContador(contador + 1);
    };

    return (
        <div>
            <p>Has hecho clic {contador} veces.</p>

            <button onClick={handleClick}>
                Incrementar
            </button>
        </div>
    );
}