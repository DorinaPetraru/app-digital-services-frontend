import { useEffect, useState } from 'react';
import { getOneService } from '../dbCommunication';

const useService = (id) => {
    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    useEffect(() => {
        const loadService = async () => {
            try {
                setLoading(true);

                const data = await getOneService(id);

                setService(data.service[0]);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadService();
    }, [id]);

    return { service, loading, error, setService };
};

export default useService;
