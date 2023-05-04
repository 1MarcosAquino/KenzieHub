import { RegisterContainer } from './style';
import { fromSchema } from './validation';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { request } from '../../requests';
import { InputCard } from '../../components';
import { SelectCard } from '../../components';

export const Register = () => {
    const navigate = useNavigate();

    const onActive = async (body) => {
        delete body.comfirmPassword;
        try {
            await request.post('users', body);
            toast.success('Cadastro realizado com sucesso');
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(fromSchema),
    });

    return (
        <RegisterContainer>
            <div className="body">
                <h1>Kenzie Hub</h1>
                <Link to="/">Voltar</Link>
            </div>
            <ToastContainer theme="dark" />

            <form onSubmit={handleSubmit(onActive)}>
                <h2>Crie sua conta</h2>
                <h4>Rapido e grátis, vamos nessa</h4>

                <InputCard
                    labelString="Nome"
                    inputId="name"
                    inputType="text"
                    inputPlaceholder="Seu nome"
                    spanString={errors.name?.message}
                    {...register('name')}
                />

                <InputCard
                    labelString="E-mail"
                    inputId="email"
                    inputType="text"
                    inputPlaceholder="Seu e-mail"
                    spanString={errors.email?.message}
                    {...register('email')}
                />

                <InputCard
                    labelString="Senha"
                    inputId="password"
                    inputType="password"
                    inputPlaceholder="Digite a senha"
                    spanString={errors.password?.message}
                    {...register('password')}
                />

                <InputCard
                    labelString="Comfirmar senha"
                    inputId="confirmPasword"
                    inputType="password"
                    inputPlaceholder="Digite sua senha novamente"
                    spanString={errors.confirmPassword?.message}
                    {...register('confirmPassword')}
                />

                <InputCard
                    labelString="Bio"
                    inputId="bio"
                    inputType="text"
                    inputPlaceholder="Fale um pouco sobre você"
                    spanString={errors.bio?.message}
                    {...register('bio')}
                />

                <InputCard
                    labelString="Contato"
                    inputId="contact"
                    inputType="tel"
                    inputPlaceholder="Opção de contato"
                    spanString={errors.contact?.message}
                    {...register('contact')}
                />

                <SelectCard
                    spanString={errors.course_module?.message}
                    {...register('course_module')}
                />
                <button type="submit" className="maker">
                    Fazer Registro
                </button>
            </form>
        </RegisterContainer>
    );
};
