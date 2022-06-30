//import { NavLink } from 'react-router-dom';
import { Auth } from '../Auth';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>
        <Link to='/'>Logo Digital Service</Link>
      </h1>
      <p>Este es el Header</p>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
