export default async function NovedadItem(props) {

  const { title, subtitle, imagen, body } = props;

  return (
    <div className="novedades">
      <h3>{title}</h3>
      <h4>{subtitle}</h4>
      {imagen ? <img src={imagen} alt={title} /> : null}
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <hr />
    </div>
  );
}
