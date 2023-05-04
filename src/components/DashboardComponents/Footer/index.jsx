import { FooterContainer } from './style';
import { useContext } from 'react';

import { ModalDetailsTech, ModalTech, CardTech } from '../../../components';
import { TechProvider } from '../../../providers';

console.log(TechProvider);
export const Footer = () => {
    const {
        showRegisterTech,
        setShowRegisterTech,
        showDetailsTech,
        setShowDetailsTech,
    } = useContext(TechProvider);

    return (
        <FooterContainer>
            <div className="DashBoardCotainer">
                <div className="footer__header">
                    <h2>Tecnologias</h2>
                    <button
                        onClick={() => setShowRegisterTech(!showRegisterTech)}
                    >
                        +
                    </button>
                </div>
                {showRegisterTech ? (
                    <ModalTech title={'Cadastrar Tecnologia'} />
                ) : null}
                {showDetailsTech ? <ModalDetailsTech /> : null}

                <ul>
                    <CardTech
                        showDetailsTech={showDetailsTech}
                        setShowDetailsTech={setShowDetailsTech}
                    />
                </ul>
            </div>
        </FooterContainer>
    );
};
