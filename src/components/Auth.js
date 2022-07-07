import { useToken } from './../context/TokenContext';
import { Link } from 'react-router-dom';
import useOwnUser from '../hooks/useOwnUser';

export const Auth = () => {
  const [token, setToken] = useToken();

  const user = useOwnUser(token);

  return token && user ? (
    <p>
      <Link to={`/users/${user.id}`}>
        {user.name}
        <img
          src={`http://localhost:4000/${user.photo}`}
          alt='Profile'
          width='40'
        />
      </Link>{' '}
      <button onClick={() => setToken(null)}>Logout</button>
    </p>
  ) : (
    <ul>
      <li>
        <Link to='/users'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
};
