import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/index.css';


export default class Square extends React.Component {
  constructor(props){
    super(props);
  }
    render() {
      const row = parseInt(this.props.rowIndex1);
      const col = parseInt(this.props.colIndex);
      const value = this.props.values[row][col];
      return (
          <button className="btn btn-success my-btn" onClick={this.props.onClick}>{value}</button >  
      );
    }
  } 