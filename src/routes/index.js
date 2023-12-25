import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AppProvider, AppContext } from '../contexts/AppContext';
import Loader from '../components/common/loader';
import Form from '../pages/Form';
import Home from '../pages/Home';
import Login from '../pages/Login';

const ApplicationRoutes = () => {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/form" element={<Form />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
                <LoaderWrapper />
            </Router>
        </AppProvider>
    );
};

const LoaderWrapper = () => {
    const { loader } = useContext(AppContext);
    const [loadingPage, setLoadingPage] = useState(true);
    const location = useLocation();

    useEffect(() => {
        const handleLoad = () => {
            console.log('Page fully loaded');
            setTimeout(() => {
                setLoadingPage(false);
            }, 2000);
        };

        console.log('Adding event listener for load');
        window.addEventListener('load', handleLoad);

        // Tenta verificar se a página já foi totalmente carregada
        if (document.readyState === 'complete') {
            console.log('Document is already fully loaded');
            setTimeout(() => {
                setLoadingPage(false);
            }, 2000);
        }

        // Remove o ouvinte de evento quando o componente for desmontado
        return () => {
            console.log('Removing event listener for load');
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    useEffect(() => {
        console.log('Location changed. Resetting loadingPage');
        setLoadingPage(true);

        const timeoutId = setTimeout(() => {
            setLoadingPage(false);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [location.pathname]);

    useEffect(() => {
        console.log('Loader changed. Resetting loadingPage');
        setLoadingPage(true);
    }, [loader]);

    useEffect(() => {
        // Verifica se a página já foi totalmente carregada
        if (document.readyState === 'complete') {
            console.log('Document is already fully loaded');
            setTimeout(() => {
                setLoadingPage(false);
            }, 2000);
        }
    }, []); // useEffect com dependência vazia, executado após a montagem

    console.log('Rendering LoaderWrapper. loadingPage:', loadingPage, 'loader:', loader);

    return loadingPage ? <Loader /> : null;
};

export default ApplicationRoutes;
