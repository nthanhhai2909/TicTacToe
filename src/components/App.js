import React from 'react';
import Header from './Header1';
import Content from './Content';

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>

        );

    }
}