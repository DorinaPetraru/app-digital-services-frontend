import './UserPage.css';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../pages/notFoundPage/ErrorMessage';
import useUser from '../../hooks/useUser';

export const UserPage = () => {
    const { idUser } = useParams();
    const { user, loading, error } = useUser(idUser);

    if (loading) return <p>Loading user data</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="card">
            <article className="cardPerfilArticleUserPage">
                <p className="cardNombreUserPage">
                    <img
                        className="imgUserPage"
                        src={`http://localhost:4000/${user.photo}`}
                        alt="This is the photograph of the person who is logged in"
                    />
                    <p>
                        <span>Name:</span> {user.name}
                    </p>
                </p>
                <p className="stripe"></p>
                <p className="cardDescription">
                    <span> Biography:</span> {user.biography}
                </p>
                <p className="stripe"></p>
                <p>
                    <span>Email:</span> {user.email}
                </p>
            </article>
        </section>
    );
};
