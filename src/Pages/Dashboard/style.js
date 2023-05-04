import styled from 'styled-components';
export const DashboardContainer = styled.div`
    background-color: var(--Gray-4);
    color: var(--Color-text);

    height: 100vh;

    display: flex;
    flex-direction: column;

    .DashBoardCotainer {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 15px;

        margin: auto;
        max-width: 1200px;
        padding: 10px 20px;
    }
`;
