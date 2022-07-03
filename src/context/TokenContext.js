import { createContext, useEffect, useState } from 'react';
import { getOwnUser } from '../dbCommunication';

export const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  useEffect(() => {
    const ownUserData = async () => {
      try {
        const data = await getOwnUser({ token });
        setUser(data.user);
      } catch (error) {
        logout();
      }
    };

    if (token) ownUserData();
  }, [token]);

  const login = (token) => {
    setToken(token);
  };

  const logout = () => {
    setToken('');
    setUser(null);
  };

  return (
    <TokenContext.Provider value={{ token, user, login, logout }}>
      {children}
    </TokenContext.Provider>
  );
};
