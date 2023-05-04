import * as yup from 'yup';

export const formSchema = yup.object().shape({
    password: yup.string().required('Senha é obrigatório'),
    email: yup
        .string()
        .required('E-mail é obrigatório')
        .email('E-mail inválido'),
});
