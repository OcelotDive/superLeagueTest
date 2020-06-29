import React, { Component } from 'react';

const withFunc = (WrappedComponent) => {

    class WithFunc extends Component {
        constructor(props) {
            super(props);

            this.state = {
                count: 0
            }
        }

        increment = () => {
            this.setState(preState => ({count: preState.count++}));
        }

        render() {
            return (
                <WrappedComponent count={this.state.count} increment={this.increment}/>
            )
        }
    }
    return WithFunc;
}

export default withFunc;