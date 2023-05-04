import { useNavigate } from 'react-router-dom';
import { request } from '../requests';
import { toast } from 'react-toastify';

import { useEffect, useState, createContext } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();

    const logOut = () => {
        toast.info('Até a próxima');
        setTimeout(() => {
            localStorage.clear();
            navigate('/');
        }, 2500);
    };

    const getLocalStorage = localStorage.getItem('@kenzieHubID');

    const [user, setUser] = useState({});

    useEffect(() => {
        if (getLocalStorage) {
            (async () => {
                try {
                    const res = await request.get(`users/${getLocalStorage}`);
                    setUser(res.data);
                } catch (error) {
                    console.log(error);
                }
            })();
            navigate('/Dashboard');
        } else navigate('/');
    }, []);

    return (
        <UserContext.Provider value={{ logOut, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};
