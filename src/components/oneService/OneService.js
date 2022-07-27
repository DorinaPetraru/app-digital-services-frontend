import './OneService.css';
import useOwnUser from '../../hooks/useOwnUser';
import { Link } from 'react-router-dom';
import { updateServiceStatus } from '../../dbCommunication';
import { useToken } from '../../context/TokenContext';
import useUser from '../../hooks/useUser';
import { useEffect } from 'react';

export const OneService = ({ service, setService }) => {
    const [token] = useToken();
    const ownUser = useOwnUser(token);
    const { user } = useUser(service.idUser);

    useEffect(() => {
        const loadComments = async () => {
            try {
                await updateServiceStatus(service.id, token);
                setService({ ...service, statusService: 'resolved' });
            } catch (error) {
                console.error(error);
            }
        };

        loadComments();
    }, [service, token]);

    return ownUser && user ? (
        <div className="ulOneServices">
            <div className="imagenOneService">
                <Link className="linkOneServices" to={`/users/${user.id}`}>
                    <figure title="Photo of service owner user">
                        <img
                            src={`http://localhost:4000/${user.photo}`}
                            alt="Photograph of the person who created the service"
                        />

                        <figcaption>
                            This service was created by {user.name}
                        </figcaption>
                    </figure>
                </Link>
            </div>{' '}
            <ul className="descriptionUlOneService">
                <h2>Title: {service.title}</h2>
                <li>
                    Service description: <p>{service.description}</p>
                </li>
                <li>
                    {service.file ? (
                        <a
                            className="aDownloadFile"
                            href={`http://localhost:4000/${service.file}`}
                            download
                        >
                            Download file
                        </a>
                    ) : null}
                </li>

                <li className="statusOneService">
                    Service status: {service.statusService}
                </li>
                {user.id === ownUser.id ? (
                    <li>
                        <button className="buttonResolved">
                            Mark as resolved
                        </button>
                    </li>
                ) : null}
            </ul>
        </div>
    ) : user ? (
        <div className="ulOneServices">
            <div className="imagenOneService">
                <Link className="linkOneServices" to={`/users/${user.id}`}>
                    <figure title="Photo of service owner user">
                        <img
                            src={`http://localhost:4000/${user.photo}`}
                            alt="Photograph of the person who created the service"
                        />
                        <figcaption>
                            This service was created by {user.name}
                        </figcaption>
                    </figure>
                </Link>
            </div>{' '}
            <ul className="descriptionUlOneService">
                <h2>Title: {service.title}</h2>
                <li>
                    Service description: <p>{service.description}</p>
                </li>
                <li>
                    {service.file ? (
                        <a
                            className="aDownloadFile"
                            href={`http://localhost:4000/${service.file}`}
                            download
                        >
                            Download file
                        </a>
                    ) : null}
                </li>
                <li className="statusOneService">
                    Service status: {service.statusService}
                </li>
            </ul>
        </div>
    ) : null;
};
