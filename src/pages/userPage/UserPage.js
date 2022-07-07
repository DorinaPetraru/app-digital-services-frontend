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
      <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Biography: {user.biography}</p>
      <img
        src={`http://localhost:4000/${user.photo}`}
        alt='Profile'
        width='40'
      />

      <p>Photo: {user.photo}</p>
    </section>
  );
};
