import React from 'react';
import App from './App';

const AppContext = React.createContext({});


export const AppProvider = AppContext.Provider;

export default AppContext;