import useServices from '../hooks/useServices';
import { ServicesList } from '../components/ServicesList';
import { ErrorMessage } from '../components/ErrorMessage';

export const HomePage = () => {
  const { services, loading, error } = useServices();

  if (loading) return <p>Cargando la lista de todos los servicios</p>;
  if (error) return <ErrorMessage message={error} />;

  console.log(services);

  return (
    <section>
      <h1>List services</h1>
      <ServicesList services={services} />
    </section>
  );
};
