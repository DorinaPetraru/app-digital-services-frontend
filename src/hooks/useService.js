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

        const data = await getOneService();

        setService(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadService();
  }, [id]);

  return { service, loading, error };
};

export default useService;
