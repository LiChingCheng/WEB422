import React, {Component} from 'react';
import MainContainer from './MainContainer';

export default class NotFound extends Component{
    render(){
        return(
            <MainContainer>
                <h1 className="page-header">Not Found</h1>
                <p>Page Not Fount</p>
            </MainContainer>
        );
    }
}
