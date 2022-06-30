import useService from '../hooks/useService';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../components/ErrorMessage';
import { Service } from '../components/Service';

export const ServicePage = () => {
  const { id } = useParams();
  const { service, loading, error } = useService(id);
  //console.log(service, loading, error);

  if (loading) return <p>Cargando el servicio seleccionado...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>The service is from {service.idUser} </h1>
      <p>Aquí va la información del servicio seleccionado</p>
      <Service service={service} />
    </section>
  );
};
