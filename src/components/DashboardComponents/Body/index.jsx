import { useContext } from 'react';
import { UserContext } from '../../../providers';
import { BodyContainer } from './style';

export const Body = () => {
    const { user } = useContext(UserContext);

    return (
        <BodyContainer>
            <div className="DashBoardCotainer">
                <h2>Olá, {user.name}</h2>
                <p>{user.course_module}</p>
            </div>
        </BodyContainer>
    );
};
