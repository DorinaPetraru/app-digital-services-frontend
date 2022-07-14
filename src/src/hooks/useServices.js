// se va a encargar de tener un estado,
// va a exportar información sobre la carga de la petición

import { useEffect, useState } from 'react';
import { getAllServices } from '../dbCommunication';

const useServices = () => {
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

export default useServices;
