import './ServicePage.css';
import useService from '../../hooks/useService';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../pages/notFoundPage/ErrorMessage';
import { OneService } from '../../components/oneService/OneService';
import { AllComments } from '../../components/allComments/AllComments';
import { CommentsAndFileCompleted } from '../../components/commentsAndFileCompleted/CommentsAndFileCompleted';
import { useToken } from '../../context/TokenContext';
import { useEffect, useState } from 'react';
import { getAllComments } from '../../dbCommunication';
import { Link } from 'react-router-dom';
import '../../components/cssComponents/Buttons.css';

export const ServicePage = () => {
    const [token] = useToken();
    const { idService } = useParams();
    const { service, loading, error, setService } = useService(idService);
    const [comments, setComments] = useState(null);

    useEffect(() => {
        const loadComments = async () => {
            try {
                const data = await getAllComments(idService, token);
                setComments(data.comments);
            } catch (error) {
                console.error(error);
            }
        };

        loadComments();
    }, [idService, token, setComments]);

    if (loading) return <p>Loading the selected service...</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section id="start" className="servicePage">
            <div>
                <OneService service={service} setService={setService} />
                <CommentsAndFileCompleted
                    setComments={setComments}
                    comments={comments}
                />
            </div>

            <div>
                <AllComments comments={comments} />
            </div>
            <Link to="/">
                <button className="btnEffect">Go to HomePage</button>
            </Link>
            <div className="startButton">
                <a href="#start" className="topOfPage">
                    <button
                        className="btnEffect"
                        title="Go to the top of this page"
                    >
                        Top of page
                    </button>
                </a>
            </div>
        </section>
    );
};
