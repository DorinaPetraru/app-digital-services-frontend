import { useEffect, useState } from 'react';
import { getAllServices } from '../dbCommunication';

const useAllServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const loadServices = async () => {
            try {
                setLoading(true);

                const data = await getAllServices();

                setServices(data.services);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        loadServices();
    }, []);

    return { services, loading, error };
};

export default useAllServices;
