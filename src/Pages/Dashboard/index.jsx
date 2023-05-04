import { DashboardContainer } from './style';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header, Body, Footer } from '../../components';

export const DashBoard = () => {
    return (
        <DashboardContainer>
            <Header />

            <ToastContainer theme="dark" />
            <Body />

            <Footer />
        </DashboardContainer>
    );
};
