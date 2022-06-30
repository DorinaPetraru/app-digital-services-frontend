import { Service } from './Service';

export const ServicesList = ({ services }) => {
  return services.length ? (
    <ul>
      {services.map((service) => (
        <li key={service.id}>
          <Service service={service} />
        </li>
      ))}
    </ul>
  ) : (
    <p> No hay servicios registrados todavía</p>
  );
};
