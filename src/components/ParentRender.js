import React from 'react';

class ParentRender extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fromParent: "this is from render props"
        }
    }

    render() {
        return (
            <>
                <section>
                    {this.props.render(this.state)}
                </section>
            </>
        )
    }
}


export default ParentRender