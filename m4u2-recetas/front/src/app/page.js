import "@/estilos/home.css";
export default function Home() {
  return (
    <div >
      <h1>Hola soy el home</h1>
      <main className="holder">
      
        <div className="columnas">
          <section className="bienvenidos">
            <h2>Bienvenidos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quia, reprehenderit? Exercitatione error saepe aliquid odio placeat quis
              consectetur iusto assumenda tempore, cupiditate iste!. Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Tempora ipsum ipsa, commodi asperiores hic
              nesciunt dolores explicabo, pariatur tempore</p>
          </section>

          <section className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
              <span className="cita">"Muy ricos y refrescantes"</span>
              <span className="autor">Marisa Guitierres</span>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
