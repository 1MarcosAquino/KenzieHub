import styled from 'styled-components';
export const NotFoundContainer = styled.div`
    background-color: var(--Gray-4);
    color: var(--Color-text);

    height: 100vh;

    .header,
    .body,
    .footer {
        max-width: 1200px;
        margin: auto;

        padding-top: 20px;
        padding-bottom: 20px;
    }

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-bottom: 1px solid var(--Gray-2);
    }

    .header h1 {
        font-size: 2.5em;
    }

    .header button {
        padding: 7px 15px;
        border: transparent;
        border-radius: 6px;
        color: var(--Color-text);
        font-weight: 500;
        background-color: var(--Gray-2);
    }

    .body {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        border-bottom: 1px solid var(--Gray-2);
    }
    .body h2 {
        font-size: 2.8rem;
    }
`;
