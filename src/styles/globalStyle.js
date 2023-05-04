import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --Color-primary: #FF577F;
    --Color-primary-focus: #FF427F;
    --Color-primary-negative: #59323F;

    --Color-text:#F8F9FA;

    --Gray-1: #868E96;
    --Gray-2: #343B41;
    --Gray-3: #212529;
    --Gray-4: #121214;

    --Success: #3FE864;
    --Negative: #E83F5B;
    
    font-size: 60%;
    font-family: 'Inter', sans-serif;
}

body {
    color: var(--Color-text);
}

h1 {
    color: var(--Color-primary);
    font-size: 1.5rem;
}

.Toastify__toast-theme--dark {
    background-color: var(--Gray-3);
    font-size: 1.2rem;
    font-weight: 600;
}

.spanError {
    color: var(--Negative);
}

a,p,label,h4 {
    font-size: 1.2rem;
}
button {
    cursor: pointer;
}

@media(min-width: 788px){
    :root{
        font-size: 62.5%;
    }
}
`;
