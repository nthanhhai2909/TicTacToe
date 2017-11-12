import React from 'react';
import Square from './Square';

export default class Board extends React.Component {


    render(){
        return(
            
            <div>
            {
                this.props.Cell.map((box, index) => <Square values={this.props.values} rowIndex1={this.props.row} colIndex={index}
                onClick={() =>this.props.getRowAndCol(this.props.row, index)}/>)
            }
            <br/>
             </div>
        );
            
    }
};