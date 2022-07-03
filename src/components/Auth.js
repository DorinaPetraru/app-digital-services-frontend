import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

export const Auth = () => {
  const { user, logout } = useContext(TokenContext);

  return user ? (
    <p>
      Logged in as {user.email} <button onClick={() => logout()}>Logout</button>
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
