/* import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; */
import { Link } from 'react-router-dom';

export const Auth = () => {
  return (
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
