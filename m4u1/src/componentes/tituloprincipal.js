export function TituloPrincipal(props) {

    return (
        <header style={{ backgroundColor: '#f01d1dff', padding: '10px' }}>
            <h1>{props.titulo}</h1>
        </header>
    );
}