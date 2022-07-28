import { useEffect, useState } from 'react';
import { getOwnUser } from '../dbCommunication';

const useOwnUser = (token) => {
    const [ownUser, setOwnUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const ownUserData = async () => {
            try {
                const data = await getOwnUser(token);
                setOwnUser(data.user);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (token) ownUserData();
    }, [token]);

    return { ownUser, loading, error };
};

export default useOwnUser;
