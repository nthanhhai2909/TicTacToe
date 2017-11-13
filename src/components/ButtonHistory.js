import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import '../css/index.css';
export default class History extends Component{
    render(){
        console.log("1", this.props.index);
        console.log("2", this.props.len);
        var sort = this.props.sort;
        if(sort === "ascending")
        {
            if(this.props.index !== this.props.len - 1){
                return(
                    <Button  bsStyle="primary" onClick={this.props.rollback}
                    style={{display: "block", marginBottom: 10}}>Move {`${this.props.element[0]} - ${this.props.element[1]}`}
                </Button>);
            }
            else{
                return(
                    <Button  bsStyle="danger" onClick={this.props.rollback}
                    style={{display: "block", marginBottom: 10}}>Move {`${this.props.element[0]} - ${this.props.element[1]}`}
                    </Button>
                )
            }
        }
        else{
            if(this.props.index ===  0){
                return(
                    <Button  bsStyle="danger" onClick={this.props.rollback}
                    style={{display: "block", marginBottom: 10}}>Move {`${this.props.element[0]} - ${this.props.element[1]}`}
                </Button>);
            }
            else{
                return(
                    <Button  bsStyle="primary" onClick={this.props.rollback}
                    style={{display: "block", marginBottom: 10}}>Move {`${this.props.element[0]} - ${this.props.element[1]}`}
                    </Button>
                )
            }
        }
        
    }
}