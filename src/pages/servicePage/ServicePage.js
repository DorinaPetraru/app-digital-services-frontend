import useService from '../../hooks/useService';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import { OneService } from '../../components/oneService/OneService';

export const ServicePage = () => {
  const { idService } = useParams();
  const { service, loading, error } = useService(idService);
  console.log(service);

  if (loading) return <p>Cargando el servicio seleccionado...</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <OneService service={service} />
    </section>
  );
};
