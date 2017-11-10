import React from 'react';
import InformationGame from './InformationGame';
import Board from './Board'
import {} from 'react-bootstrap';

export default class Content extends React.Component{
    render(){
        return(
            <div>
                <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav">
                        <h4>Information</h4>
                        <hr/>
                        <InformationGame/>
                    </div>
                    
                    <div className="col-sm-9">
                        <h4>Game</h4>
                        <hr/>
                        <Board/>
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}
