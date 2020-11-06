import React, { useState } from 'react';
import withIncrement from './withIncrement';

const ClickCounter = ({ handleIncrement, count }) => {
    return (
        <button onClick={handleIncrement}>Clicked {count} times</button>
    )
}

export default withIncrement(ClickCounter);