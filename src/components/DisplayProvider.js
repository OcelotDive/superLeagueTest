import React from 'react';
import displayReducer from '../reducers/displayReducer';
export const stateContext = React.createContext();
export const dispatchContext = React.createContext();

const DisplayProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(displayReducer, { display: 'default' });

    return (
        <stateContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch}>
                {children}
            </dispatchContext.Provider>
        </stateContext.Provider>
    )
}


export default DisplayProvider;