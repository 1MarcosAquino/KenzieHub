import styled from 'styled-components';

export const RegisterContainer = styled.div`
    padding: 30px 0;
    background-color: var(--Gray-4);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div.body {
        display: flex;
        justify-content: space-between;
        align-items: center;

        margin: auto;
        width: 300px;
    }

    a {
        background-color: var(--Gray-3);
        color: var(--Color-text);
        padding: 10px 15px;
    }

    h1 {
        margin-bottom: 15px;
        font-size: 2.5rem;
    }

    h2 {
        align-self: center;
        font-size: 2rem;
    }

    h4 {
        color: var(--Gray-1);
        font-weight: 400;
        align-self: center;
    }

    form {
        background-color: var(--Gray-3);
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    input,
    select {
        padding: 0px 13.0293px;
        gap: 8.14px;

        width: 300px;
        height: 38.5px;

        background-color: var(--Gray-2);

        border: 1px solid var(--Gray-1);
        border-radius: 4px;

        color: var(--Color-text);
    }

    button.maker {
        padding: 10px;
        border-radius: 4px;
        color: var(--Color-text);
        background-color: var(--Color-primary-negative);
        border: var(--Color-primary-negative);
    }
    button.maker:hover {
        background-color: var(--Color-primary);
    }
`;
