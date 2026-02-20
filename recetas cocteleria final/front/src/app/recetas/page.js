import "@/estilos/recetas.css"
import RecetasGrid from "@/componentes/recetasgrid";

export const metadata = {
    title: "Recetas de Cócteles",
    description: "Recetas para cocteleria",
};

export default function Recetas() {
    return (
        <main className="recetas-page">
            <div className="recetas-header">
                <h2>Recetas de Cócteles</h2>
            </div>

            <RecetasGrid />
        </main>
    );
}
