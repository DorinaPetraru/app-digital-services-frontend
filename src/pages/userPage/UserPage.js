import './UserPage.css';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../pages/notFoundPage/ErrorMessage';
import useUser from '../../hooks/useUser';
import { Link } from 'react-router-dom';

export const UserPage = () => {
    const { idUser } = useParams();
    const { user, loading, error } = useUser(idUser);

    if (loading) return <p>Loading user data</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="card">
            <article
                title="Photo of user who created the service"
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

                <p className="pSpanEmail">
                    <span>Email:</span> {user.email}
                </p>
                <p className="pSpanBiography">
                    <span> Biography:</span> {user.biography}
                </p>
            </article>

            <article className="cardPerfilArticleUserPageOne">
                <p>
                    <Link className="link" to="/">
                        <span className="spanDsHeader">DS</span>
                        <span className="spanDigitalHeader">Digital</span>
                        <span className="spanServicesHeader">Services</span>
                    </Link>
                </p>
                <p>
                    These are the personal data of <span>{user.name} </span>, if
                    you want to see more services created by{' '}
                    <span>{user.name} </span> or other users...
                </p>
                <p className="pLink">
                    <Link to="/">
                        <p className=""> Visit our HomePage</p>
                    </Link>
                </p>

                <p>
                    <span>{user.name} </span> helps you solve your digital
                    needs, send an email to <span>{user.name} </span>, and they
                    will contact you as soon as possible.
                </p>
            </article>
        </section>
    );
};
