import "@/estilos/novedades.css"
import NovedadItem from "@/componentes/novedaditem";

export const metadata = {
    title: "Novedades - Recetas de cocteles",
    description: "Últimas novedades sobre coctelería",
};

async function getNovedades() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
    console.log('DEBUG - Variable de entorno NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL);
    console.log('DEBUG - Intentando fetch a:', `${apiUrl}/api/novedades`);

    try {
        const res = await fetch(`${apiUrl}/api/novedades`, {
            cache: 'no-store'
        });

        if (!res.ok) {
            throw new Error('Error al obtener novedades');
        }

        return await res.json();
    } catch (error) {
        console.log('Error al conectar con el backend:', error.message);
        return null;
    }
}

export default async function Novedades() {
    const novedades = await getNovedades();

    return (
        <section className="holder">
            <h2>Novedades</h2>

            {novedades === null && (
                <div className="novedades-error">
                    <p>⚠️ No se pudo conectar con el servidor. Asegurate de que el backend esté corriendo en el puerto 3001.</p>
                </div>
            )}

            {novedades && novedades.length === 0 && (
                <div className="novedades-vacio">
                    <p>No hay novedades publicadas todavía.</p>
                </div>
            )}

            {novedades && novedades.length > 0 && novedades.map((novedad) => (
                <NovedadItem
                    key={novedad.id}
                    title={novedad.titulo}
                    subtitle={novedad.subtitulo}
                    imagen={novedad.imagen}
                    body={novedad.cuerpo}
                />
            ))}
        </section>
    )
}