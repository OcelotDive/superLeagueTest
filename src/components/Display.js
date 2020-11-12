import React from 'react';
import DisplayProvider, { stateContext, dispatchContext } from './DisplayProvider';


const Display = () => {
    const dispatch = React.useContext(dispatchContext);
    const { display } = React.useContext(stateContext);
    const handleClick = (e) => {
        if (e.target.className === 'btn') {
            dispatch({ type: e.target.innerHTML });
        }
    }
    return (
        <>
            <div>{display}</div>
            <section onClick={handleClick}>
                <button className="btn">1</button>
                <button className="btn">2</button>
                <button className="btn">3</button>
                <button className="btn">4</button>
            </section>
        </>
    )
}

export default Display;