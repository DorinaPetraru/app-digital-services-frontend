import '../notFoundPage/NotFoundPage.css';
import '../../components/cssComponents/ButtonsCreate.css';
import { Link } from 'react-router-dom';

export const ErrorMessage = ({ message }) => {
    return (
        <section className="notFound">
            <h1>{message}</h1>
            <Link to="/">
                <h5 className="noselect">Go to HomePage</h5>
            </Link>
        </section>
    );
};
