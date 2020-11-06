import React, { useState } from 'react';
import withIncrement from './withIncrement';

const HoverCounter = ({ handleIncrement, count }) => {
    return (
        <h6 onMouseOver={handleIncrement}>Hovered {count} times</h6>
    )
}

export default withIncrement(HoverCounter);