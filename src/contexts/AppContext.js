import React, { createContext, useState } from 'react';

export const AppContext = createContext();
const initialLoadingState = {
    firstMessage: false,
    secondeMessage: false,
    thirdMessage: false,
    fourthMessage: false
};

export const AppProvider = ({ children }) => {
    const [globalCPF, setGlobalCPF] = useState('');
    const [loading, setLoading] = useState(initialLoadingState);
    const [loader, setLoader] = useState(false);
    const [writing, setWriting] = useState(false);


    const [showModal, setModal] = useState(false)
    const contextValues = {
        globalCPF,
        setGlobalCPF,
        loading,
        setLoading,
        writing,
        setWriting,
        loader,
        setLoader,
        showModal,
        setModal
    };

    return (
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    );
};
