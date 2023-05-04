import styled from 'styled-components';

export const LoginContainer = styled.div`
    background-color: var(--Gray-4);

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div.body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        padding: 20px 10px;
    }

    h1 {
        margin-bottom: 15px;
        font-size: 2.5rem;
    }

    h2 {
        align-self: center;
        font-size: 2rem;
    }

    p {
        align-self: center;
    }

    form {
        background-color: var(--Gray-3);
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    input {
        padding: 0px 13.0293px;
        gap: 8.14px;

        width: 264.66px;
        height: 38.5px;

        background-color: var(--Gray-2);

        border: 0.9772px solid var(--Gray-1);
        border-radius: 4px;

        color: var(--Color-text);
    }

    button,
    .register {
        padding: 10px;
        border-radius: 4px;
        color: var(--Color-text);
    }

    button.enter {
        background-color: var(--Color-primary);
        border: var(--Color-primary);
    }

    a.register {
        background-color: var(--Gray-1);
        border: var(--Color-primary);
        text-align: center;
    }
`;
