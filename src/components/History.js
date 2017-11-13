import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import ButtonHistory from './ButtonHistory';
import '../css/index.css';
export default class History extends Component{
    
    render(){
        return(
            <div className="history">
                {this.props.history.map((element, index) => <ButtonHistory rollback={() =>this.props.rollBack(index)} index={index}len={this.props.history.length} element={element} sort={this.props.sort}/>)}
            </div>
        )
    }
}