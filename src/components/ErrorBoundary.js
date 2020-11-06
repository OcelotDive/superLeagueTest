import React, { Component } from 'react';


class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error) {
        if (error) {
            this.setState({ hasError: true })
        }
    }

    render() {

        return (this.state.hasError ?
            <div>Error has occured</div>
            :
            <>
                {this.props.children}
            </>
        )

    }
}

export default ErrorBoundary;