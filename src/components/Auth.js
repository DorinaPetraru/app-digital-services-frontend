import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';

export const Auth = () => {
  const { user, logout } = useContext(TokenContext);

  return user ? (
    <p>
      Hi, {user.name}
      <button className='ButtonLogoutHeader' onClick={() => logout()}>
        Logout
      </button>
    </p>
  ) : (
    <ul>
      <li className='ButtonRegisterHeader'>
        <Link to='/users'>Register</Link>
      </li>
      <li className='ButtonLoginHeader'>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
};
