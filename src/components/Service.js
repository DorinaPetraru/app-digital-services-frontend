import { Link } from 'react-router-dom';

export const Service = ({ service }) => {
  return (
    <article>
      <Link to={`/services/${service.id}`}>
        <h2>Título: {service.title}</h2>
      </Link>
      <p>Descripción del servicio: {service.description}</p>

      {service.file ? (
        <img
          src={`${process.env.REACT_APP_BACKEND}/uploads/${service.file}`}
          alt={service.title}
        />
      ) : null}

      <p>Estatus del servicio: {service.statusService}</p>
      <p>Id del Usuario: {service.idUser}</p>

      <p>Fecha de creación: {new Date(service.createdAt).toLocaleString}</p>
    </article>
  );
};
