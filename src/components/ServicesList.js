import { OneService } from './OneService';

export const ServicesList = ({ services }) => {
  return services.length ? (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <OneService service={service} />
        </li>
      ))}
    </ul>
  ) : (
    <p> No hay servicios registrados todavía</p>
  );
};
