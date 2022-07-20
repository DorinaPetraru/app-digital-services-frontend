import '../../components/cssComponents/Forms.css';
import { useState } from 'react';
import { useToken } from '../../context/TokenContext';
import { createNewService } from '../../dbCommunication';
import { useNavigate } from 'react-router-dom';

export const CreateServicePage = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState();
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [creating, setCreating] = useState(false);
    const [token] = useToken();
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            setCreating(true);

            await createNewService({
                title,
                description,
                file,
                token,
            });
        } catch (error) {
            setError(error.message);
        } finally {
            setCreating(false);
            navigate('/');
        }
    };

    return (
        <section className="forms">
            <form onSubmit={handleForm}>
                <h1>Created new service</h1>
                <fieldset>
                    <label htmlFor="title"></label>
                    <input
                        //  value={title}
                        type="text"
                        id="title"
                        name="title"
                        maxLength="30"
                        placeholder="The title"
                        required
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="description"></label>
                    <textarea
                        //  value={description}
                        id="description"
                        name="description"
                        placeholder="The description"
                        required
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="file"></label>
                    <input
                        type="file"
                        id="file"
                        name="file"
                        required
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </fieldset>

                <button className="buttonForms">Create</button>
                {creating ? <p>Creating Service</p> : null}
                {error ? <p>{error}</p> : null}
            </form>
        </section>
    );
};
