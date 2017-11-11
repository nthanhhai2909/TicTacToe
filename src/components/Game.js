import React from 'react';
import {container} from 'react-bootstrap';
import Board from './Board';

export default class Game extends React.Component{
    constructor(props){
        super(props);

        this.state={
            board: new Array(this.props.numberCell).fill(new Array(this.props.numberCell).fill(null)),
            turn: null

        }
        this.handleChangeCellNumber = this.handleChangeCellNumber.bind(this);
        this.getCoodinate = this.getCoodinate.bind(this);

        
    };

    handleChangeTurn(){
        if(this.state.turn === null || this.state.turn === 'o'){
            this.setState({turn: 'x'});
        }
        if(this.state.turn === 'x'){
            this.setState({turn: 'o'});
        }
    }

    handleChangeCellNumber(i){
        var arrayvar = this.state.board.slice();
        arrayvar = new Array(i).fill(new Array(i).fill(null));
        this.setState({ board: arrayvar })
        this.handleChangeTurn();
    }
    

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.turn !== this.state.turn){
            return true;
        }
        if(nextProps.numberCell !== this.props.numberCell){
            return true;
        }
        return false;
    }

    componentWillUpdate(nextProps, nextState) {    
        if(nextProps.numberCell !== this.props.numberCell){
            this.handleChangeCellNumber(nextProps.numberCell);
        }
        if(nextState.turn !== this.state.turn){
            this.props.getNextPlayer(nextState.turn);
        }
    }

    getCoodinate(row, col){
        this.handleChangeTurn();
        this.props.getNextPlayer(this.state.turn);
    }

    isWin(board, rowCheck, colCheck){
        
    }

    render()
    { 
        return(
            <Board board={this.state.board} getCoodinate={this.getCoodinate}/>
        );
    }

}