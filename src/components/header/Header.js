//import logo from '/public/logo.png';
//import { NavLink } from 'react-router-dom';
import { Auth } from '../Auth';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <p>
        <Link className='link' to='/'>
          DigitalServices
          {/* <img className='logo' src={logo} alt='Logo de la página' /> */}
        </Link>
      </p>

      <nav>
        <Auth />
      </nav>
    </header>
  );
};

export default Header;
