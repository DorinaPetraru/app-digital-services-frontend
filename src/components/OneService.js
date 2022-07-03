import { Link } from 'react-router-dom';

export const OneService = ({ service }) => {
  return (
    <article>
      <Link to={`/services/${service.id}`}>
        <h2>Título: {service.title}</h2>
      </Link>
      <p>Descripción del servicio: {service.description}</p>

      {service.file ? (
        <a href={`http://localhost:4000/${service.file}`} download>
          Descargar archivo
        </a>
      ) : null}

      <p>Estatus del servicio: {service.statusService}</p>
      <p>Id del Usuario: {service.idUser}</p>

      <p>Fecha de creación: {new Date(service.createdAt).toLocaleString}</p>
    </article>
  );
};
