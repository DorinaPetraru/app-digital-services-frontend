import useServices from '../../hooks/useServices';
import { ServicesList } from '../../components/ServicesList';
import { ErrorMessage } from '../../components/ErrorMessage';
import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const { services, loading, error } = useServices();
  const { user } = useContext(TokenContext);

  if (loading) return <p>Cargando la lista de todos los servicios</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>List services</h1>

      {user ? (
        <Link to='/services'>
          <button>Crear un servicio</button>
        </Link>
      ) : null}

      <ServicesList services={services} />
    </section>
  );
};
