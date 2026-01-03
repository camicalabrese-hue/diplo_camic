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
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, rem saepe. A
                    enim qui facilis consectetur. Tempora dolores culpa libero a natus fugit ea ratione
                    reprehenderit, consequuntur, debitis corrupti asperiores.</p>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero blanditiis eveniet minima
                    repudiandae. Natus commodi consequuntur eius repellat ducimus, omnis, delectus sapiente
                    saepe quam necessitatibus exercitationem molestias ipsum voluptates iusto.</p>
            </section>

            <div className="staff">
                <h2>Staff</h2>

                <div className="staff-cards">
                    <div className="card">
                        <img src="https://dummyimage.com/600x400/000/fff" width="75" alt="patricia gonzales" />
                        <div className="card-body">
                            <h5 className="card-title">Patricia Gonzales</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Bartender principal</h6>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis hic
                                laborum, error laboriosam quaerat tenetur non distinctio adipisci sequi illum dolorum libero
                                at aliquid, nam est unde nemo possimus dolores?</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://dummyimage.com/600x400/000/fff" width="75" alt="yanick lasso" />
                        <div className="card-body">
                            <h5 className="card-title">Yanick Lesso</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Bartender</h6>
                            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea deleniti
                                aspernatur autem ipsam officiis eius, itaque quibusdam fuga distinctio, nobis numquam
                                molestiae, alias assumenda reprehenderit voluptates? Natus distinctio eum in!</p>
                        </div>
                    </div>

                    <div className="card">
                        <img src="https://dummyimage.com/600x400/000/fff" width="75" alt="juan lopez" />
                        <div className="card-body">
                            <h5 className="card-title">Juan Lopez</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Bartender</h6>
                            <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam autem in
                                ipsum, voluptas nihil corporis pariatur distinctio fugiat beatae voluptate magnam tenetur
                                consequatur ipsa, aperiam aut iure maiores? Reiciendis, iure?</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}