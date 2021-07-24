import React, { Component } from 'react';

export default class MyErrorBoundary extends Component {
    state = {
        errorMessage: null,
    }
    static getDerivedStateFromError(error) {
        return { errorMessage: true }
    }
    // componentDidCatch(error, info) {
    //     this.logErrorToServices(error.toString(), info.componentStack)
    // }    

    logErrorToServices = console.log
    render() {
        if (this.state.errorMessage) {
            return (
                <p>
                    {/* {this.state.errorMessage} */}
                    Data Not Found.
                </p>
            )
        }
        return this.props.children
    }
}