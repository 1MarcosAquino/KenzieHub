import { ModalTechContainer } from './style';
import { InputCard } from '../index';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { formSchema } from './validation';
import { useContext } from 'react';

import { TechContext } from '../../providers';

export const ModalTech = ({ title }) => {
    const {
        createTechnology,
        techModal,
        showRegisterTech,
        setShowRegisterTech,
        UpdateTechnology,
        DeleteTechnology,
    } = useContext(TechContext);

    //  closedDetailsTechOnUpdate(techModal.id)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    return (
        <ModalTechContainer>
            <div className="headerTech">
                <h2>{title}</h2>
                <button onClick={() => setShowRegisterTech(!showRegisterTech)}>
                    X
                </button>
            </div>
            <form onSubmit={handleSubmit(createTechnology)}>
                <InputCard
                    labelString="Nome"
                    inputId="title"
                    inputType="text"
                    inputPlaceholder="Tecnologia"
                    spanString={errors.title?.message}
                    {...register('title')}
                />

                <select id="status" {...register('status')}>
                    <option value="">Escolha uma opção</option>
                    <option value="iniciante">Iniciante</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                </select>

                <span>{errors.status?.message}</span>

                <div className="className">
                    <button type="submit">{title}</button>
                </div>
            </form>
        </ModalTechContainer>
    );
};
