import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            error:null,
            errorInfo:null
        }
    }
    componentDidCatch(error,errorInfo){
        this.setState({hasError:true,error:error,errorInfo:errorInfo});
    }
    render(){
        if(this.state.hasError){
            return(
            <>
            <h1>We Have a Problem!!!</h1>
            </>)
        }
        return this.props.children;
    }
}
export default ErrorBoundary;