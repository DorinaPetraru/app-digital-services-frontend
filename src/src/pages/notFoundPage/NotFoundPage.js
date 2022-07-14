import './NotFoundPage.css';
import '../../components/cssComponents/Buttons.css';
import '../../components/cssComponents/Forms.css';
import { Link } from 'react-router-dom';
export const NotFoundPage = () => {
    return (
        <section className="notFound">
            <h1>Not found</h1>
            <button className="btnEffect">
                <Link to="/">
                    <span> Go to Home</span>
                </Link>
            </button>
        </section>
    );
};
