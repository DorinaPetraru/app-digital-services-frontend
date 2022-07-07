import './ServiceList.css';
import { Link } from 'react-router-dom';

export const ServicesList = ({ services }) => {
  return services.length ? (
    <section className='serviceList'>
      <ul className='ulServicesList'>
        {services.map((service) => (
          <li key={service.id}>
            <Link className='link' to={`/services/${service.id}`}>
              <h2>{service.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  ) : (
    <p> No hay servicios registrados todavía</p>
  );
};
