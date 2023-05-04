import { Routes, Route } from 'react-router-dom';
import { Login, Register, DashBoard, NotFound } from './Pages';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<DashBoard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
