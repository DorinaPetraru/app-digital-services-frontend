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
        <>
            <section className="sectionHomePage">
                <h1>Digital services siempre a tu lado</h1>
                <h3>List services</h3>
                <h3>Escoge un servicio</h3>

                {token ? (
                    <Link className="link" to="/services">
                        <button>Crear un servicio</button>
                    </Link>
                ) : null}

                <ServicesList services={services} />
            </section>
        </>
    );
};
