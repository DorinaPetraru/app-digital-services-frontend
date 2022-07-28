import './OwnUserPage.css';
import { ErrorMessage } from '../../pages/notFoundPage/ErrorMessage';
import useOwnUser from '../../hooks/useOwnUser';
import { Link } from 'react-router-dom';
import { useToken } from '../../context/TokenContext';
import SocialFollow from '../../components/socialFollow/SocialFollow';

export const OwnUserPage = () => {
    const [token] = useToken();
    const { ownUser, loading, error } = useOwnUser(token);

    if (loading) return <p>Loading user data</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        ownUser && (
            <section className="card">
                <article className="cardPerfilArticleOwnUserPageOne">
                    <p>Create, solve and enjoy with</p>
                    <div className="stripe"></div>
                    <p>
                        <Link className="link" to="/">
                            <span className="spanDsHeader">DS</span>
                            <span className="spanDigitalHeader">Digital</span>
                            <span className="spanServicesHeader">Services</span>
                        </Link>
                    </p>
                    <p>
                        Visit our Home Page and discover a variety of services
                        both to solve and ideas to create new services.
                    </p>
                    <div className="stripe"></div>
                    <p>
                        Welcome <span>{ownUser.name} </span> to our website, we
                        help you solve your digital services or you can help
                        other users solve their digital needs.
                    </p>
                </article>

                <article
                    title="User photo logged in"
                    className="cardPerfilArticleOwnUserPageTwo"
                >
                    <figure className="cardNombreOwnUserPage">
                        <img
                            className="imgOwnUserPage"
                            src={`http://localhost:4000/${ownUser.photo}`}
                            alt="This is the photograph of the person who is logged in"
                        />
                        <p>
                            <span>Name:</span> {ownUser.name}
                        </p>
                    </figure>
                    <div className="stripe"></div>
                    <p>
                        <span> Biography:</span> {ownUser.biography}
                    </p>
                    <div className="stripe"></div>
                    <p>
                        <span>Email:</span> {ownUser.email}
                    </p>
                    <div className="stripe"></div>
                    <p>
                        This is your personal information that we have stored in
                        our database
                    </p>
                </article>

                <article className="cardPerfilArticleOwnUserPageThree">
                    <p>
                        <span>{ownUser.name} </span> If you have any questions
                        here you have our contact
                    </p>
                    <div className="stripe"></div>
                    <div>
                        <SocialFollow />
                    </div>
                    <div className="stripe"></div>
                    <p>
                        <span>{ownUser.name} </span>
                    </p>
                    <p>
                        Thank you for your visit and for enjoying our services
                    </p>
                </article>
            </section>
        )
    );
};
