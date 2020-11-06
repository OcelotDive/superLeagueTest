import React, { useState } from 'react';
import useIncrementCustomHook from '../useIncrementCustomHook';


const HoverCounterCustom = () => {
    const [count, handleIncrement] = useIncrementCustomHook();
    return (
        <h6 onMouseOver={handleIncrement}>Hovered {count} times</h6>
    )
}

export default HoverCounterCustom;