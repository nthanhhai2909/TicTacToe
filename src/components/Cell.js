import React from 'react';
import Square from './Square';

export default class Board extends React.Component {


    render(){
        return(
            <div>
            {
                this.props.numberCell.map((box, index) => <Square value={this.props.board} rowIndex={this.props.row} colIndex={index}
                onClick={() =>this.props.getRowAndCol(this.props.row, index)}/>)
            }
            <br/>
             </div>
        );
            
    }
};