import React from 'react';
import withFunc from './withFunc';
const Button = (props) => {

    return (
    <button onClick={props.increment}>{props.message} {props.count} times</button>
    )
}
Button.defaultProps = {
    message: "Clicked"
}

export default withFunc(Button);