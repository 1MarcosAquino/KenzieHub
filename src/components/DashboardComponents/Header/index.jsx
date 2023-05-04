import { useContext } from 'react';
import { UserContext } from '../../../providers';
import { HeaderContainer } from './style';

export const Header = () => {
    const { logOut } = useContext(UserContext);

    return (
        <HeaderContainer>
            <div className="DashBoardCotainer">
                <h1>Kenzie Hub</h1>
                <button onClick={() => logOut()}>Sair</button>
            </div>
        </HeaderContainer>
    );
};
