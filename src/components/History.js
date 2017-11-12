import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../css/index.css';
export default class History extends Component{
    
    render(){
        return(
            <div className="history">
                {this.props.history.map((element, index) => <Button  bsStyle="primary" onClick={() => this.props.rollBack(index)}
                        style={{display: "block", marginBottom: 10}}>Move {`${element[0]} - ${element[1]}`}
                    </Button>)}
            </div>
        );
    }
}