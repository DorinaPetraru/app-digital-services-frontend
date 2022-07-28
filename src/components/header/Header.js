import './Header.css';
import '../../components/cssComponents/Buttons.css';
import { useToken } from '../../context/TokenContext';
import { Link } from 'react-router-dom';
import useOwnUser from '../../hooks/useOwnUser';

const Header = () => {
    const [token, setToken] = useToken();

    const { ownUser } = useOwnUser(token);
    return (
        <header>
            <p>
                <Link className="link" to="/">
                    <span className="spanDsHeader">DS</span>
                    <span className="spanDigitalHeader">Digital</span>
                    <span className="spanServicesHeader">Services</span>
                </Link>
            </p>

            <nav>
                {token && ownUser ? (
                    <div className="divHeader">
                        <Link to={`/users`}>
                            <figure>
                                <img
                                    src={`http://localhost:4000/${ownUser.photo}`}
                                    title="Click to see your profile"
                                    alt="Photograph of the user who is logged in"
                                />
                                <figcaption>{ownUser.name}</figcaption>
                            </figure>
                        </Link>
                        <button
                            className="btnEffect"
                            onClick={() => setToken(null)}
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="linkHeader">
                        <p>
                            <button className="btnEffect">
                                <Link to="/register">Register</Link>
                            </button>
                        </p>
                        <p>
                            <button className="btnEffect">
                                <Link to="/login">Login</Link>
                            </button>
                        </p>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
