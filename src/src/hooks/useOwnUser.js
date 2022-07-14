import { useEffect, useState } from 'react';
import { getOwnUser } from '../dbCommunication';

const useOwnUser = (token) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const ownUserData = async () => {
      try {
        const data = await getOwnUser({ token });
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };

    if (token) ownUserData();
  }, [token]);

  return user;
};

export default useOwnUser;
