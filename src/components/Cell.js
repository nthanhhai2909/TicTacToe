import React from 'react';
import Square from './Square';

export default class Board extends React.Component {

    render(){
        return(
            <div>
            {
                this.props.numberCell.map((box) => <Square values={box}/>)
            }
            <br/>
             </div>
        );
            
    }
};