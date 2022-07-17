import './NotFoundPage.css';
import '../../components/cssComponents/Buttons.css';
import '../../components/cssComponents/Forms.css';
import { Link } from 'react-router-dom';
export const NotFoundPage = () => {
    return (
        <section className="notFound">
            <h1>Not found</h1>
            <Link to="/">
                <h5 className="noselect"> Go to Home</h5>
            </Link>
        </section>
    );
};
