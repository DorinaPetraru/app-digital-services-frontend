import './LoginPage.css';
import '../../components/cssComponents/Forms.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '../../context/TokenContext';
import { loginUser } from '../../dbCommunication';

export const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [, setToken] = useToken();
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const data = await loginUser({ email, password });

            setToken(data.token);
        } catch (error) {
            setError(error.message);
        } finally {
            navigate('/');
        }
    };

    return (
        <section className="forms">
            <form onSubmit={handleForm}>
                <h1>Login</h1>
                <fieldset>
                    <label htmlFor="email"></label>
                    <input
                        value={email}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="password"></label>
                    <input
                        value={password}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>

                <button className="buttonForms">Login</button>

                {error ? <p>{error}</p> : null}
            </form>
        </section>
    );
};
