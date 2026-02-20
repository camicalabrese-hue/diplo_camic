'use client';

import { useEffect, useRef } from 'react';

export default function Carousel() {
    const carouselRef = useRef(null);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            if (carouselRef.current && window.bootstrap) {
                new window.bootstrap.Carousel(carouselRef.current, {
                    interval: 3000,
                    ride: 'carousel',
                    wrap: true
                });
            }
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="carouselHome" className="carousel slide" ref={carouselRef} data-bs-ride="carousel">

           
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselHome" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

         
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/imagenes/imagen cocteleria.jpg" className="d-block w-100" alt="Coctelería" />
                </div>
                <div className="carousel-item">
                    <img src="/imagenes/caipiriña de fresa.jpg" className="d-block w-100" alt="Caipiriña de fresa" />
                </div>
                <div className="carousel-item">
                    <img src="/imagenes/mojito.jpg" className="d-block w-100" alt="Mojito" />
                </div>
                <div className="carousel-item">
                    <img src="/imagenes/margarita.jpg" className="d-block w-100" alt="Margarita" />
                </div>
            </div>

         
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHome" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselHome" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
