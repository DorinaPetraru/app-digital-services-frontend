import './ServicePage.css';
import '../../components/allComments/AllComments';
import useService from '../../hooks/useService';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from '../../components/ErrorMessage';
import { OneService } from '../../components/oneService/OneService';
import { AllComments } from '../../components/allComments/AllComments';
import useComments from '../../hooks/useComments';
import { CommentsAndFileCompleted } from '../../components/commentsAndFileCompleted/CommentsAndFileCompleted';

export const ServicePage = () => {
    const { idService } = useParams();
    const { service, loading, error } = useService(idService);
    const { comments } = useComments(idService);

    if (loading) return <p>Cargando el servicio seleccionado...</p>;
    if (error) return <ErrorMessage message={error} />;

    return (
        <section className="servicePage">
            <OneService service={service} />
            <div>
                <CommentsAndFileCompleted />
                <AllComments comments={comments} />
            </div>
        </section>
    );
};
