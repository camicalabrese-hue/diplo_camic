import "@/estilos/nosotros.css"
export const metadata = {
    title: "Recetas de cocteles",
    description: "Recetas para cocteleria",
};

export default function Nosotros() {
    return (
        <main className="holder">
            <section className="historia">
                <h2>¿Quienes somos?</h2>
                <p>Somos una página dedicada a compartir recetas de coctelería para todos los gustos y niveles. Nuestro objetivo es acercarte ideas claras y fáciles de preparar, desde clásicos tradicionales hasta combinaciones creativas, para que puedas disfrutar y sorprender en cualquier ocasión. Creemos que preparar un buen trago es una experiencia para compartir, aprender y divertirse.
                </p>

            </section>

            <div className="staff">
                <h2>Staff</h2>

                <div className="staff-cards">
                    <div className="staff-card">
                        <img src="/imagenes/bartender mujer.jpg" alt="Patricia Gonzales" />
                        <div className="staff-info">
                            <h5>Patricia Gonzales</h5>
                            <h6>Bartender principal</h6>
                            <p>Mi nombre es Patricia y me dedio a la cocteleria hace 18 años, me gusta probar cosas nuevas e inovar.</p>
                        </div>
                    </div>

                    <div className="staff-card">
                        <img src="/imagenes/bartender mujer 2.jpg" alt="Yanick Lesso" />
                        <div className="staff-info">
                            <h5>Yanick Lesso</h5>
                            <h6>Bartender</h6>
                            <p>Mi nombre es Yanick soy bartender hace 5 años y me gusta los cocteles fuertes y en tendencia.</p>
                        </div>
                    </div>

                    <div className="staff-card">
                        <img src="/imagenes/bartender hombre.jpg" alt="Juan Lopez" />
                        <div className="staff-info">
                            <h5>Juan Lopez</h5>
                            <h6>Bartender</h6>
                            <p>Mi nombre es Juan y soy bartender hace 20 años.Me gustan los tragos complejos y diferentes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}