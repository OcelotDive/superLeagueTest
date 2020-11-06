import React, { Component } from 'react';



const withIncrement = (WrappedComponent) => {

    class WithIncrement extends Component {
        constructor(props) {
            super(props);

            this.state = { count: 0 };
        }

        handleIncrement = () => {
            this.setState({ count: this.state.count + 1 });
        }

        render() {
            return <WrappedComponent handleIncrement={this.handleIncrement} count={this.state.count} />
        }
    }
    return WithIncrement;
}


export default withIncrement;