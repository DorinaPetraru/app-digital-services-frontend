import './ServiceList.css';
import { Link } from 'react-router-dom';

export const ServicesList = ({ services }) => {
    return services.length ? (
        <section className="serviceList">
            <ul className="ulServicesList">
                {services.map((service) => (
                    <li key={service.id}>
                        <Link className="link" to={`/services/${service.id}`}>
                            <article className="article">
                                <p>{service.title}</p>
                                <p className="statusServiceHome">
                                    {service.statusService}
                                </p>
                            </article>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    ) : (
        <p>No services yet</p>
    );
};
