import React from 'react';


const RendererComponent = (props) => {



     const state = {
            val1: "message String",
            val2: 1010
        }
    

        return (
            <React.Fragment>
                {props.render(state)}
            </React.Fragment>
        )
    
}


export default RendererComponent;