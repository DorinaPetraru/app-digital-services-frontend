import './CommentsAndFileCompleted.css';
import { useState } from 'react';
import { useToken } from '../../context/TokenContext';
import { useNavigate, useParams } from 'react-router-dom';
import { createCommentsAndFileCompleted } from '../../dbCommunication';

export const CommentsAndFileCompleted = ({ comments, setComments }) => {
    const { idService } = useParams();
    const [text, setText] = useState();
    const [fileCompleted, setFileCompleted] = useState(null);
    const [error, setError] = useState('');
    const [token] = useToken();
    const navigate = useNavigate();

    const handleForm = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const newComment = await createCommentsAndFileCompleted({
                text,
                fileCompleted,
                token,
                idService,
            });

            e.target.reset();
            setComments([...comments, newComment]);
        } catch (error) {
            setError(error.message);
        } finally {
            navigate(`/services/${idService}`);
        }
    };

    return (
        <article className="commentsAndFileCompleted">
            <p>
                If you want to know more about the user who created this
                service, click on his photo.
            </p>
            <p>
                If you know how to solve this digital need, add a comment and
                the complete file to solve this digital service.
            </p>
            <form className="formComments" onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="text"></label>
                    <textarea
                        //  value={text}
                        id="text"
                        name="text"
                        placeholder="Add your comment"
                        required
                        onChange={(e) => setText(e.target.value)}
                    />
                </fieldset>

                <fieldset>
                    <label htmlFor="fileCompleted"></label>
                    <input
                        // value={fileCompleted}
                        type="file"
                        id="fileCompleted"
                        name="fileCompleted"
                        required
                        onChange={(e) => setFileCompleted(e.target.files[0])}
                    />
                </fieldset>

                <button className="buttonForms">Add</button>
                {error ? <p>{error}</p> : null}
            </form>
        </article>
    );
};
