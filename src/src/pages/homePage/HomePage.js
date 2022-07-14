import './HomePage.css';
import useServices from '../../hooks/useServices';
import { ServicesList } from '../../components/serviceList/ServicesList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Link } from 'react-router-dom';
import { useToken } from '../../context/TokenContext';

export const HomePage = () => {
    const { services, loading, error } = useServices();
    const [token] = useToken();
    if (loading) return <p>Cargando la lista de todos los servicios</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="sectionHomePage">
            {token ? (
                <Link className="link" to="/services">
                    <button>Created service</button>
                </Link>
            ) : null}

            <ServicesList services={services} />
        </section>
    );
};
