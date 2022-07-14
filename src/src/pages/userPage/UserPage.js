import './UserPage.css';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import useUser from '../../hooks/useUser';

export const UserPage = () => {
    const { idUser } = useParams();
    const { user, loading, error } = useUser(idUser);

    if (loading) return <p>Loading user data</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="articleUserPage">
            <section className="userPage">
                <h1>Name: {user.name}</h1>
                <figure>
                    <img
                        src={`http://localhost:4000/${user.photo}`}
                        alt="Profile"
                        width="100"
                    />
                </figure>
                {/* <p>Photo: {user.photo}</p> */}
                <p>Biography: {user.biography}</p>
                <p>Email: {user.email}</p>
            </section>
        </section>
    );
};
