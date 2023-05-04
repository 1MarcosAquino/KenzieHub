import { CardTecContainer } from './style';
import { useContext } from 'react';
import { UserContext, TechContext } from '../../providers';

export const CardTech = ({ showDetailsTech, setShowDetailsTech }) => {
    const { user } = useContext(UserContext);
    const { setTechModal } = useContext(TechContext);

    const opend = (tech) => {
        setShowDetailsTech(!showDetailsTech);
        setTechModal(tech);
    };

    return (
        <>
            {user.techs?.map((tech) => {
                return (
                    <CardTecContainer key={tech.id}>
                        <button onClick={() => opend(tech)}>
                            <h3>{tech.title}</h3> <p>{tech.status}</p>
                        </button>
                    </CardTecContainer>
                );
            })}
        </>
    );
};
