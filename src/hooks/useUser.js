import { useEffect, useState } from 'react';
import { getUser } from '../dbCommunication';

const useUser = (id) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await getUser(id);

        setUser(data.user);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, [id]);

  return { user, loading, error };
};

export default useUser;
