import React from 'react';
import {container} from 'react-bootstrap';
import Board from './Board';

export default class Game extends React.Component{
    constructor(props){
        super(props);

        this.state={
            board: new Array(this.props.numberCell).fill(new Array(this.props.numberCell).fill(null)),
        }

        
    };
    handleChangeCellNumber(i){
        var arrayvar = this.state.board.slice();
        arrayvar = new Array(i).fill(new Array(i).fill(null));
        this.setState({ board: arrayvar })
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentWillUpdate(nextProps, nextState) {    
        if(nextProps.numberCell !== this.props.numberCell){
            this.handleChangeCellNumber(nextProps.numberCell);
        }
          
    }

    render()
    { 
        return(
            <Board board={this.state.board}/>
        );
    }

}