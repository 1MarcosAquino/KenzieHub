import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { GlobalStyle, Reset } from './styles';

import { BrowserRouter } from 'react-router-dom';
import { UserProvider, TechProvider } from './providers';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Reset />
            <GlobalStyle />
            <UserProvider>
                <TechProvider>
                    <App />
                </TechProvider>
            </UserProvider>
        </BrowserRouter>
    </React.StrictMode>
);
