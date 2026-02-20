'use client';

import { useState } from 'react';

const recetas = [
    {
        id: 1,
        nombre: "Caipiriña de fresa",
        imagen: "/imagenes/caipiriña de fresa.png",
        badge: "Refrescante",
        badgeClass: "badge-refrescante",
        descripcion: "Un coctel brasileño refrescante y afrutado, perfecto para los días de calor. La combinación de fresas frescas con cachaça crea una bebida dulce e irresistible.",
        tiempo: "5 min",
        dificultad: "Fácil",
        porciones: "1 porción",
        textoCard: " Trago fresco y frutal con frutillas y limón. Dulce, suave y perfecto para el calor.",
        ingredientes: [
            "50 ml de Cachaça",
            "6 fresas frescas",
            "30 ml de jugo de lima",
            "2 cucharaditas de azúcar",
            "Hielo picado"
        ],
        preparacion: [
            "Corta las fresas en trozos pequeños y colócalas en un vaso",
            "Añade el azúcar y machaca suavemente con un mortero",
            "Agrega el jugo de lima y la cachaça",
            "Llena el vaso con hielo picado",
            "Mezcla bien y decora con una fresa en el borde"
        ]
    },
    {
        id: 2,
        nombre: "Daiquiri",
        imagen: "/imagenes/daiquiri.png",
        badge: "Clásico",
        badgeClass: "badge-clasico",
        descripcion: "Un coctel cubano clásico y refrescante. Simple pero elegante, el daiquiri destaca por su sabor limpio y equilibrado entre el ron y la lima.",
        tiempo: "5 min",
        dificultad: "Media",
        porciones: "1 porción",
        textoCard: "Cóctel clásico a base de ron y fruta. Refrescante, ligeramente dulce y muy fácil de tomar.",
        ingredientes: [
            "60 ml de Ron blanco",
            "30 ml de Jugo de lima",
            "15 ml de Jarabe simple",
            "Hielo",
            "Rodaja de lima para decorar"
        ],
        preparacion: [
            "Coloca el ron blanco en una coctelera con hielo",
            "Añade el jugo de lima fresco",
            "Agrega el jarabe simple",
            "Agita vigorosamente durante 15 segundos",
            "Cuela en una copa de coctel fría",
            "Decora con una rodaja de lima"
        ]
    },
    {
        id: 3,
        nombre: "Expreso martini",
        imagen: "/imagenes/expreso martini.png",
        badge: "Tendencia",
        badgeClass: "badge-tendencia",
        descripcion: "Un coctel sofisticado que combina la intensidad del café espresso con la suavidad del vodka. Ideal para después de cenar.",
        tiempo: "5 min",
        dificultad: "Fácil",
        porciones: "1 porción",
        textoCard: "Mezcla de café y vodka con un toque dulce. Intenso, elegante y ideal para después de cenar.",
        ingredientes: [
            "50 ml de Vodka",
            "30 ml de Licor de café",
            "30 ml de Espresso recién hecho",
            "10 ml de Jarabe simple",
            "Granos de café para decorar"
        ],
        preparacion: [
            "Prepara un espresso y déjalo enfriar un momento",
            "Coloca el vodka, licor de café y espresso en la coctelera",
            "Agrega el jarabe simple y mucho hielo",
            "Agita vigorosamente durante 20 segundos",
            "Cuela en una copa de martini fría",
            "Decora con 3 granos de café encima"
        ]
    },
    {
        id: 4,
        nombre: "Fernet con coca",
        imagen: "/imagenes/fernet con coca.png",
        badge: "Clásico",
        badgeClass: "badge-clasico",
        descripcion: "El trago más popular de Argentina. La combinación amarga del fernet con la dulzura de la coca cola crea un sabor único e inconfundible.",
        tiempo: "2 min",
        dificultad: "Fácil",
        porciones: "1 porción",
        textoCard: "Combinación clásica y amarga con gaseosa cola. Refrescante y muy popular",
        ingredientes: [
            "70 ml de Fernet Branca",
            "200 ml de Coca Cola",
            "Hielo",
            "Rodaja de limón (opcional)"
        ],
        preparacion: [
            "Llena un vaso largo con hielo hasta el tope",
            "Vierte el fernet sobre el hielo",
            "Completa con coca cola bien fría",
            "Mezcla suavemente con una cuchara",
            "Decora con una rodaja de limón si lo deseas"
        ]
    },
    {
        id: 5,
        nombre: "Tequila sunrise",
        imagen: "/imagenes/tequila sunrise.png",
        badge: "Refrescante",
        badgeClass: "badge-refrescante",
        descripcion: "Un coctel colorido y tropical que recrea los colores de un amanecer. Dulce, afrutado y visualmente espectacular.",
        tiempo: "5 min",
        dificultad: "Fácil",
        porciones: "1 porción",
        textoCard: "Trago colorido con tequila y jugo de naranja. Dulce, suave y tropical.",
        ingredientes: [
            "50 ml de Tequila",
            "100 ml de Jugo de naranja",
            "15 ml de Granadina",
            "Hielo",
            "Rodaja de naranja y cereza para decorar"
        ],
        preparacion: [
            "Llena un vaso largo con hielo",
            "Vierte el tequila sobre el hielo",
            "Añade el jugo de naranja y mezcla",
            "Vierte la granadina lentamente por el borde del vaso",
            "Deja que la granadina baje al fondo creando el efecto sunrise",
            "Decora con una rodaja de naranja y una cereza"
        ]
    },
    {
        id: 6,
        nombre: "Whisky",
        imagen: "/imagenes/whisky .png",
        badge: "Clásico",
        badgeClass: "badge-clasico",
        descripcion: "El Old Fashioned es el coctel de whisky por excelencia. Un trago fuerte, elegante y con carácter, perfecto para los amantes del whisky.",
        tiempo: "5 min",
        dificultad: "Media",
        porciones: "1 porción",
        textoCard: "Bebida intensa y aromática. Puede tomarse solo o con hielo, con sabor fuerte y profundo.",
        ingredientes: [
            "60 ml de Whisky bourbon",
            "1 cubo de azúcar",
            "2-3 gotas de Angostura bitters",
            "Cáscara de naranja",
            "Hielo grande",
            "Cereza marrasquino"
        ],
        preparacion: [
            "Coloca el cubo de azúcar en un vaso old fashioned",
            "Añade las gotas de angostura sobre el azúcar",
            "Machaca suavemente hasta disolver",
            "Agrega un hielo grande",
            "Vierte el whisky bourbon",
            "Remueve suavemente y decora con cáscara de naranja y cereza"
        ]
    }
];

export default function RecetasGrid() {
    const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);
    const [filtroActivo, setFiltroActivo] = useState('Todos');

    const categorias = ['Todos', ...new Set(recetas.map(r => r.badge))];

    const recetasFiltradas = filtroActivo === 'Todos'
        ? recetas
        : recetas.filter(r => r.badge === filtroActivo);

    const abrirModal = (receta) => {
        setRecetaSeleccionada(receta);
    };

    const cerrarModal = () => {
        setRecetaSeleccionada(null);
    };

    return (
        <>
            <div className="recetas-filtros">
                {categorias.map((cat) => (
                    <button
                        key={cat}
                        className={`filtro-btn ${filtroActivo === cat ? 'filtro-activo' : ''}`}
                        onClick={() => setFiltroActivo(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="recetas-grilla">
                {recetasFiltradas.map((receta) => (
                    <div key={receta.id} className="card receta-card" onClick={() => abrirModal(receta)} style={{ cursor: 'pointer' }}>
                        <div className="card-img-wrapper">
                            <img src={receta.imagen} className="card-img-top" alt={receta.nombre} />
                            <span className={`badge-categoria ${receta.badgeClass}`}>{receta.badge}</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{receta.nombre}</h5>
                            <p className="card-text">{receta.textoCard}</p>
                            <div className="card-footer-info">
                                <span className="tiempo">{receta.tiempo}</span>
                                <span className="dificultad">{receta.dificultad}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {recetaSeleccionada && (
                <div className="modal-overlay" onClick={cerrarModal}>
                    <div className="modal-receta" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-cerrar" onClick={cerrarModal}>✕</button>

                        <div className="modal-imagen">
                            <img src={recetaSeleccionada.imagen} alt={recetaSeleccionada.nombre} />
                        </div>

                        <div className="modal-contenido">
                            <h3 className="modal-titulo">{recetaSeleccionada.nombre}</h3>
                            <p className="modal-descripcion">{recetaSeleccionada.descripcion}</p>


                            <div className="modal-detalles">
                                <div className="modal-ingredientes">
                                    <h4>Ingredientes</h4>
                                    <ul>
                                        {recetaSeleccionada.ingredientes.map((ing, i) => (
                                            <li key={i}>{ing}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="modal-preparacion">
                                    <h4>Preparación</h4>
                                    <ol>
                                        {recetaSeleccionada.preparacion.map((paso, i) => (
                                            <li key={i}>
                                                <span className="paso-numero">{i + 1}</span>
                                                <span>{paso}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
