
import React from 'react'
import Square from './Square';
import Cell from './Cell';
export default class Board extends React.Component {
  constructor(props){
    super(props);

   };

  render() {

    return (
      
      <div >
        {

          this.props.board
          .map(row => <Cell numberCell={row}/>)
        }
      </div>
      
    );
  }
}