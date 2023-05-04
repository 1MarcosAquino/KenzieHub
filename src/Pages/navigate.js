import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();

export const goTo = (event, router) => {
    event.preventDefault();
    navigate(router);
};
