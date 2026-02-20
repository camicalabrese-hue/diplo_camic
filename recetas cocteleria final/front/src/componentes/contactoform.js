'use client';

import { useState } from 'react';

export default function ContactForm({ postUrl }) {
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    };

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        try {
            const rawResponse = await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const response = await rawResponse.json();
            setSending(false);
            setMsg(response.message);
            if (response.error === false) {
                setFormData(initialForm)
            }
        } catch (error) {
            setSending(false);
            setMsg('Hubo un error al enviar el formulario.');
            console.error(error);
        }
    }

    return (
        <form action="/contacto" method="post" onSubmit={handleSubmit} className="formulario">
            <p>
                <label>Nombre</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            </p>
            <p>
                <label>Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </p>
            <p>
                <label>Teléfono</label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} />
            </p>
            <p>
                <label>Mensaje</label>
                <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} required></textarea>
            </p>
            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}
            <p className="centrar">
                <input type="submit" value="Enviar" />
            </p>
        </form>
    );
}