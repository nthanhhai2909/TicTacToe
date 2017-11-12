import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/index.css';


export default class Square extends React.Component {
  constructor(props){
    super(props);
  }



  render() {
    let row = parseInt(this.props.rowIndex1);
    let col = parseInt(this.props.colIndex);
    let value = this.props.values[row][col];
    let check = false;
    this.props.listBoxWin.map(e => {
      if(e[0] === row && e[1] === col){
        check = true;
      }
    });

    return (
      check ?
         <button className="btn my-btn-win"  onClick={this.props.onClick} >{value}</button >
        :  <button className="btn my-btn"onClick={this.props.onClick} >{value}</button > 
    )
  }
} 