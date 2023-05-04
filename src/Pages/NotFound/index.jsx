import { NotFoundContainer } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <NotFoundContainer>
            <ToastContainer theme="dark" />
            <div className="header">
                <h1>Kenzie Hub</h1>
                <button onClick={() => navigate(-1)}>Voltar</button>
            </div>
            <div className="body">
                <h2>Não encontrado</h2>
            </div>
        </NotFoundContainer>
    );
};
