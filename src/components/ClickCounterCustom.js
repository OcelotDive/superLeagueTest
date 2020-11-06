import React, { useState } from 'react';
import useIncrementCustomHook from '../useIncrementCustomHook';


const ClickCounterCustom = () => {

    const [count, handleIncrement] = useIncrementCustomHook();
    return (
        <button onClick={handleIncrement}>Clicked {count} times</button>
    )
}

export default ClickCounterCustom;