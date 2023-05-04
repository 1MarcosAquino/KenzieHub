import * as yup from 'yup';

export const fromSchema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),

    email: yup
        .string()
        .required('E-mail é obrigatório')
        .email('E-mail inválido'),

    password: yup
        .string()
        .required('Senha é obrigatório')
        .matches(/\d/, 'Senha com pelo menos um numero')
        .matches(/[a-z]/, 'Senha com pelo menos uma letra minuscula')
        .matches(/[A-Z]/, 'Senha com pelo menos uma letra maiuscula')
        .matches(/\W+/, 'Senha com pelo menos um caracter especial')
        .matches(/.{8,16}/, 'Senha com pelo menos de 8 digitos'),

    confirmPassword: yup
        .string()
        .required('Confirmar senha é obrigatório')
        .oneOf([yup.ref('password')], 'As senhas não coincidem'),

    bio: yup.string().required('Bio é obrigatório'),

    contact: yup.string().required('Contato obrigatório'),

    course_module: yup.string().required('Modulo obrigatório'),
});
