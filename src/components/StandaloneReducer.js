import React, { useReducer } from 'react'


const myReducer = (state, action) => {
    switch (action.type) {
        case 'str':
            return { ...state, prop3: 'a new string' };
        case 'bool':
            return { ...state, prop3: 'a new bool' };
        default:
            return { ...state }
    }
}


const StandaloneReducer = () => {
    const data = { prop1: "string", prop2: true, prop3: 'default' };
    const [state, dispatch] = useReducer(myReducer, data);

    const handleClick1 = () => {
        dispatch({ type: 'str' })
    }
    const handleClick2 = () => {
        dispatch({ type: 'bool' })
    }

    return (
        <>
            <button onClick={handleClick1}>{state.prop3}</button>
            <button onClick={handleClick2}>{state.prop3}</button>
        </>
    )

}

export default StandaloneReducer;