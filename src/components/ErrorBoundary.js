import React, { Component } from 'react';
import ErrorDisplay from './ErrorDisplay';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true, error: error.message})
    }


    render() {
        return this.state.hasError ? <ErrorDisplay /> : this.props.children;
    }
}

export default ErrorBoundary;