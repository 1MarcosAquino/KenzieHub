import { useContext, useState } from 'react';
import { createContext } from 'react';
import { toast } from 'react-toastify';
import { request } from '../requests';
import { UserContext } from './UserContext';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
    const { setUser } = useContext(UserContext);

    const [showRegisterTech, setShowRegisterTech] = useState(false);
    const [showDetailsTech, setShowDetailsTech] = useState(false);
    const [techModal, setTechModal] = useState({});

    const token = localStorage.getItem('@kenzieHub');
    const id = localStorage.getItem('@kenzieHubID');

    const updateUser = async () => {
        try {
            const res = await request.get(`users/${id}`);
            setUser(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const createTechnology = async (body) => {
        try {
            await request.post('users/techs', body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.info('Tecnologia adicionada com sucesso');
            updateUser();
        } catch (error) {
            console.log(error);
            if (error.response.status === 401)
                toast.error('Tecnologia já foi adicionada');
        }
    };

    const updateTechnology = async (body) => {
        try {
            await request.put(`users/techs/${techModal.id}`, body, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.info('Tecnologia atualizada com sucesso');
            updateUser();
        } catch (error) {
            console.log(error);
        }
    };

    const deleteTechnology = async (techId) => {
        try {
            await request.delete(`users/techs/${techId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.info('Tecnologia deletada com sucesso');
            updateUser();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <TechContext.Provider
            value={{
                createTechnology,
                updateTechnology,
                deleteTechnology,

                showRegisterTech,
                setShowRegisterTech,
                showDetailsTech,
                setShowDetailsTech,
                techModal,
                setTechModal,
            }}
        >
            {children}
        </TechContext.Provider>
    );
};
