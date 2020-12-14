import React, {Component} from 'react';
import ErrorIndicator from './ErrorIndicator';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator errorMessage='Имеется ошибка, попробуйте позже'/>
        }

        return this.props.children;
    };
}

export default ErrorBoundary;