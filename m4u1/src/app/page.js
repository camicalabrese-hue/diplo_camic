import { TituloPrincipal } from "@/componentes/tituloprincipal";
import { ListaProductos } from "@/componentes/listaproductos";
import { NovedadItem } from "@/componentes/novedaditems";
import { Contador } from "@/componentes/contador";
import { BotonLuz } from "@/componentes/apagaryencender";
const productos = [
  { id: 1, nombre: 'Vodka', precio: 13000 },
  { id: 2, nombre: 'Hielo', precio: 3500 },
  { id: 3, nombre: 'Naranjas', precio: 5500 },
  { id: 4, nombre: 'Tequila', precio: 10500 }
];
const contenidoNovedad = {
  id: "1",
  titulo: "Mas recetas",
  subtitulo: "Encontra diferentes recetas en .....",
  autor: "Camila Calabrese",
  cuerpo: " Encontra mas recetas en la web "
};
export default function Home() {
  return (
    <div >
      <h2>Recetas de cocteles</h2>
      <TituloPrincipal titulo="Materiales necesarios" />
      <hr />
      <ListaProductos items={productos} />
      <hr />
      <NovedadItem
        title={contenidoNovedad.titulo}
        subtitle={contenidoNovedad.subtitulo}
        author={contenidoNovedad.autor}
        body={contenidoNovedad.cuerpo}
      />
      <hr />
      <h2>Estados</h2>
      <Contador />
      <hr />
      <BotonLuz/>
    </div>
  );
}

