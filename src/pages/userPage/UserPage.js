import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import useUser from '../../hooks/useUser';

export const UserPage = () => {
  const { idUser } = useParams();
  const { user, loading, error } = useUser(idUser);

  console.log(user);

  if (loading) return <p>Loading user data</p>;
  if (error) return <ErrorMessage message={error} />;

  return (
    <section>
      <h1>User page</h1>
    </section>
  );
};
