import { Link } from 'react-router-dom';

export const ErrorMessage = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
      <Link to='/'>Volver a HomePage</Link>
    </div>
  );
};
