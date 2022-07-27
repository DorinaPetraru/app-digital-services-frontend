import './UserPage.css';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../pages/notFoundPage/ErrorMessage';
import useUser from '../../hooks/useUser';
import { Link } from 'react-router-dom';
import SocialFollow from '../../components/socialFollow/SocialFollow';

export const UserPage = () => {
    const { idUser } = useParams();
    const { user, loading, error } = useUser(idUser);

    if (loading) return <p>Loading user data</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="card">
            <article className="cardPerfilArticleUserPageOne">
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
                    Visit our Home Page and discover a variety of services both
                    to solve and ideas to create new services.
                </p>
                <div className="stripe"></div>
                <p>
                    Welcome <span>{user.name} </span> to our website, we help
                    you solve your digital services or you can help other users
                    solve their digital needs.
                </p>
            </article>

            <article
                title="User photo logged in"
                className="cardPerfilArticleUserPageTwo"
            >
                <figure className="cardNombreUserPage">
                    <img
                        className="imgUserPage"
                        src={`http://localhost:4000/${user.photo}`}
                        alt="This is the photograph of the person who is logged in"
                    />
                    <p>
                        <span>Name:</span> {user.name}
                    </p>
                </figure>
                <div className="stripe"></div>
                <p>
                    <span> Biography:</span> {user.biography}
                </p>
                <div className="stripe"></div>
                <p>
                    <span>Email:</span> {user.email}
                </p>
            </article>

            <article className="cardPerfilArticleUserPageThree">
                <p>
                    <span>{user.name} </span> If you have any questions here you
                    have our contact
                </p>
                <div className="stripe"></div>
                <div>
                    <SocialFollow />
                </div>
                <div className="stripe"></div>
                <p>
                    <span>{user.name} </span>
                </p>
                <p>Thank you for your visit and for enjoying our services</p>
            </article>
        </section>
    );
};
