import styled from 'styled-components';

export const FooterContainer = styled.div`
    justify-self: center;
    align-self: center;

    .footer__header {
        width: 100%;
        padding: 10px;

        border: solid 1px red;

        display: flex;
        justify-content: space-between;
    }

    div {
        flex-direction: column;
    }

    h2 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.6rem;
        font-weight: 400;
    }
`;
