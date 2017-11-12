
import React from 'react'
import Square from './Square';
import Cell from './Cell';
export default class Board extends React.Component {
  constructor(props){
    super(props);
    this.getRowAndCol = this.getRowAndCol.bind(this);

   };

   getRowAndCol(row, col){
    this.props.getCoodinate(row, col);
  };

  render() {
    return (
      
      <div>
        {
          this.props.board
          .map((row, index) =>
           <Cell Cell={row} getRowAndCol={this.getRowAndCol} row={index} values={this.props.board} />)
        }
      </div>
    );
  }
}