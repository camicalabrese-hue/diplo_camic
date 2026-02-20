import "@/estilos/home.css"
import Carousel from "@/componentes/carousel";

export default function Home() {
  return (
    <div>
      <Carousel />

      <main className="holder">
        <div className="columnas">
          <section className="bienvenidos">
            <h2>Bienvenido a nuestro rincón de coctelería</h2>
            <p>Acá vas a encontrar recetas simples, ricas y fáciles de preparar para cualquier ocasión. Desde clásicos que nunca fallan hasta tragos frescos y tropicales para sorprender a tus amigos.

              Te guiamos paso a paso para que puedas preparar cada cóctel en casa, sin complicaciones y con ingredientes fáciles de conseguir. Ya sea que estés empezando o que te guste experimentar, este es tu lugar para descubrir nuevos sabores y disfrutar cada brindis.

              ¡Elegí tu receta favorita y empezá a mezclar!</p>
          </section>

          <aside className="testimonios">
            <h3>Testimonios</h3>
            <span className="cita">&quot;Muy ricos y refrescantes&quot;</span>
            <span className="autor">Marisa Guitierres</span>
            <span className="cita">&quot;Los mejores cocteles que probé en mi vida&quot;</span>
            <span className="autor">María García</span>
            <span className="cita">&quot;Un lugar increíble con tragos únicos&quot;</span>
            <span className="autor">Juan Pérez</span>
          </aside>
        </div>
      </main>
    </div>
  );
}
