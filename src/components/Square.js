import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/index.css';


export default class Square extends React.Component {

  constructor(props){
    super(props);
  }
    render() {
      //{this.props.board[this.props.rowIndex][this.props.colIndex]}
      return (
          <button className="button" onClick={this.props.onClick}></button>  
      );
    }
  }