import { DetailsTechContainer } from './style';
import { useContext } from 'react';
import { TechContext } from '../../providers';
import { InputCard } from '../index';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { formSchema } from './validation';

export const ModalDetailsTech = () => {
    const {
        techModal,
        showDetailsTech,
        setShowDetailsTech,
        updateTechnology,
        DeleteTechnology,
    } = useContext(TechContext);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const closedDetailsTechOnDelete = (techId) => {
        DeleteTechnology(techId);
        setShowDetailsTech(!showDetailsTech);
    };

    return (
        <DetailsTechContainer>
            <div className="detailsHeader">
                <h2>Detalhes</h2>
                <button onClick={() => setShowDetailsTech(!showDetailsTech)}>
                    X
                </button>
            </div>
            <form onSubmit={handleSubmit(updateTechnology)}>
                <InputCard
                    labelString="Nome"
                    inputId="title"
                    inputType="text"
                    disabled
                    inputPlaceholder={techModal.title}
                    spanString={errors.title?.message}
                />

                <select id="status" {...register('status')}>
                    <option value="">Escolha uma opção</option>
                    <option value="iniciante">Iniciante</option>
                    <option value="intermediario">Intermediário</option>
                    <option value="avancado">Avançado</option>
                </select>
                <span>{errors.status?.message}</span>

                <button type="submit">Salvar alterações</button>
                <button
                    type="button"
                    onClick={() => closedDetailsTechOnDelete(techModal.id)}
                >
                    Excluir
                </button>
            </form>
        </DetailsTechContainer>
    );
};
