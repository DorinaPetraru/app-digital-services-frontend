// se va a encargar de tener un estado,
// va a exportar información sobre la carga de la petición

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useToken } from '../context/TokenContext';
import { getAllComments } from '../dbCommunication';

const useComments = () => {
    const { idService } = useParams();
    const [comments, setComments] = useState([]);
    const [token] = useToken();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadComments = async () => {
            try {
                setLoading(true);

                const data = await getAllComments(idService, token);

                setComments(data.comments);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadComments();
    }, [idService, token]);

    return { comments, loading, error };
};

export default useComments;
