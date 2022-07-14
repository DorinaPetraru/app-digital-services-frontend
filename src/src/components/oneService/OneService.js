import './OneService.css';
import '../../components/cssComponents/Forms.css';
import useOwnUser from '../../hooks/useOwnUser';
import { Link } from 'react-router-dom';
import { updateServiceStatus } from '../../dbCommunication';
import { useToken } from '../../context/TokenContext';
import useUser from '../../hooks/useUser';

export const OneService = ({ service }) => {
    const [token] = useToken();
    const ownUser = useOwnUser(token);
    const { user } = useUser(service[0].idUser);

    return ownUser ? (
        <div className="ulOneServices">
            <div className="imagenOneService">
                <Link className="linkOneServices" to={`/users/${user.id}`}>
                    <figure>
                        <img
                            src={`http://localhost:4000/${user.photo}`}
                            alt="Profile"
                            width="90"
                        />

                        <figcaption> Created by{user.name}</figcaption>
                    </figure>
                </Link>
            </div>{' '}
            <ul className="descriptionUlOneService">
                <h2>Título: {service[0].title}</h2>
                <li>
                    Descripción del servicio: <p>{service[0].description}</p>
                </li>
                <li>
                    {service[0].file ? (
                        <a
                            className="aDownloadFile"
                            href={`http://localhost:4000/${service[0].file}`}
                            download
                        >
                            Descargar archivo
                        </a>
                    ) : null}
                </li>
                <li>Estatus del servicio: {service[0].statusService}</li>
                {user.id === ownUser.id ? (
                    <li>
                        <button
                            onClick={async () => {
                                if (window.confirm('Are you sure?')) {
                                    await updateServiceStatus(
                                        service[0].id,
                                        token
                                    );
                                }
                            }}
                        >
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
                <h2>Título: {service[0].title}</h2>
                <li>
                    Descripción del servicio: <p>{service[0].description}</p>
                </li>
                <li>
                    {service[0].file ? (
                        <a
                            className="aDownloadFile"
                            href={`http://localhost:4000/${service[0].file}`}
                            download
                        >
                            Descargar archivo
                        </a>
                    ) : null}
                </li>
                <li>Estatus del servicio: {service[0].statusService}</li>
            </ul>
        </div>
    ) : null;
};
