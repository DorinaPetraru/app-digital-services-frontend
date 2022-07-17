import './OneService.css';
import '../../components/cssComponents/Forms.css';
import useOwnUser from '../../hooks/useOwnUser';
import { Link } from 'react-router-dom';
import { updateServiceStatus } from '../../dbCommunication';
import { useToken } from '../../context/TokenContext';
import useUser from '../../hooks/useUser';
import { useEffect, useState } from 'react';

export const OneService = ({ service }) => {
    const [token] = useToken();
    const ownUser = useOwnUser(token);
    const { user } = useUser(service[0].idUser);
    const [statusService, setStatusService] = useState('pending');

    useEffect(() => {
        const loadComments = async () => {
            try {
                await updateServiceStatus(service[0].id, token);
                setStatusService(service[0].statusService);
            } catch (error) {
                console.error(error);
            }
        };

        loadComments();
    }, [service, token, statusService]);

    return ownUser && user ? (
        <div className="ulOneServices">
            <div className="imagenOneService">
                <Link className="linkOneServices" to={`/users/${user.id}`}>
                    <figure>
                        <img
                            src={`http://localhost:4000/${user.photo}`}
                            alt="Profile"
                            width="90"
                        />

                        <figcaption>
                            This service was created by {user.name}
                        </figcaption>
                    </figure>
                </Link>
            </div>{' '}
            <ul className="descriptionUlOneService">
                <h2>Title: {service[0].title}</h2>
                <li>
                    Service description: <p>{service[0].description}</p>
                </li>
                <li>
                    {service[0].file ? (
                        <a
                            className="aDownloadFile"
                            href={`http://localhost:4000/${service[0].file}`}
                            download
                        >
                            Download file
                        </a>
                    ) : null}
                </li>

                <li>Service status: {service[0].statusService}</li>
                {user.id === ownUser.id ? (
                    <li>
                        <button>
                            <h5 className="buttonResolved">
                                Marcar como resuelto
                            </h5>
                        </button>
                    </li>
                ) : null}
            </ul>
        </div>
    ) : user ? (
        <div className="ulOneServices">
            <div className="imagenOneService">
                <Link className="linkOneServices" to={`/users/${user.id}`}>
                    <figure>
                        <img
                            src={`http://localhost:4000/${user.photo}`}
                            alt="Profile"
                        />
                        <figcaption>{user.name}</figcaption>
                    </figure>
                    <div> This service was created by</div>
                </Link>
            </div>{' '}
            <ul className="descriptionUlOneService">
                <h2>Title: {service[0].title}</h2>
                <li>
                    Service description: <p>{service[0].description}</p>
                </li>
                <li>
                    {service[0].file ? (
                        <a
                            className="aDownloadFile"
                            href={`http://localhost:4000/${service[0].file}`}
                            download
                        >
                            Download file
                        </a>
                    ) : null}
                </li>
                <li>Service status: {service[0].statusService}</li>
            </ul>
        </div>
    ) : null;
};
