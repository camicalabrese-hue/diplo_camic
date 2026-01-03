import "@/estilos/novedades.css"
import NovedadItem from "@/componentes/novedaditem";
export const metadata = {
    title: "Recetas de cocteles",
    description: "Recetas para cocteleria",
};

export default function Novedades() {
    return (
        <section className="holder">
            <h2>Novedades</h2>
            <NovedadItem title="este es el titulo de mi novedad"
                subtitle="subtitulo de la novedad" imagen="https://dummyimage.com/600x400/000/fff" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut non fugiat iusto cum." />
            <NovedadItem title="este es el titulo de mi novedad"
                subtitle="subtitulo de la novedad" imagen="https://dummyimage.com/600x400/000/fff" body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ut non fugiat iusto cum." />
        </section>
    )
}