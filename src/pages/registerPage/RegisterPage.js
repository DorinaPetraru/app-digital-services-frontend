import '../../components/cssComponents/Forms.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../dbCommunication';

export const RegisterPage = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [biography, setBiography] = useState();
    const [photo, setPhoto] = useState(null);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        if (!photo) {
            setError('Missing add your profile picture');
            return;
        }

        try {
            await registerUser({ name, email, biography, photo, password });

            navigate('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <section className="forms">
            <form method="post" onSubmit={handleForm}>
                <h1>Register</h1>
                <fieldset>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        onChange={(e) => setName(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="email"></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="biography"></label>
                    <textarea
                        id="biography"
                        name="biography"
                        maxLength="250"
                        placeholder="Your biography"
                        required
                        onChange={(e) => setBiography(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="photo"></label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        required
                        onChange={(e) => setPhoto(e.target.files[0])}
                    />

                    {photo ? (
                        <figure>
                            <img
                                src={URL.createObjectURL(photo)}
                                style={{ width: '100px' }}
                                alt="Preview"
                            />
                        </figure>
                    ) : null}
                </fieldset>

                <fieldset>
                    <label htmlFor="password"></label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </fieldset>

                <button className="buttonForms">Register</button>
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    );
};
