import { Link, useNavigate } from 'react-router-dom';
import { LoginContainer } from './style';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { request } from '../../requests';
import { InputCard } from '../../components';

import { formSchema } from './validation';

export const Login = () => {
    const navigate = useNavigate();

    const setToken = (id, token) => {
        localStorage.setItem('@kenzieHub', token);
        localStorage.setItem('@kenzieHubID', id);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formSchema),
    });

    const onActive = async (body) => {
        try {
            const res = await request.post('sessions', body);
            setToken(res.data.user.id, res.data.token);
            navigate('Dashboard');
        } catch (error) {
            toast.error('Verifique Seu e-mail e senha!');
            console.log(error.response.data.message);
        }
    };

    return (
        <LoginContainer>
            <ToastContainer theme="dark" />

            <div className="body">
                <h1>Kenzie Hub</h1>
                <form onSubmit={handleSubmit(onActive)}>
                    <h2>Login</h2>

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

                    <button className="enter">Entrar</button>
                    <p>Ainda não possui uma conta?</p>
                    <Link className="register" to="/Register">
                        Cadastre-se
                    </Link>
                </form>
            </div>
        </LoginContainer>
    );
};
