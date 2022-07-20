import './HomePage.css';
import '../../components/cssComponents/ButtonsCreate.css';
import useServices from '../../hooks/useServices';
import { ServicesList } from '../../components/serviceList/ServicesList';
import { ErrorMessage } from '../../pages/notFoundPage/ErrorMessage';
import { Link } from 'react-router-dom';
import { useToken } from '../../context/TokenContext';

export const HomePage = () => {
    const { services, loading, error } = useServices();
    const [token] = useToken();
    if (loading) return <p>Loading list of all services...</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="sectionHomePage">
            <h1>Digital Services, always by your side</h1>

            {token ? (
                <Link to="/services">
                    <h5 className="noselect">Create a service</h5>
                </Link>
            ) : null}

            <h3>Select a service</h3>
            <ServicesList services={services} />
        </section>
    );
};
