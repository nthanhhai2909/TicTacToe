import React from 'react';
import {container} from 'react-bootstrap';
import Board from './Board';

export default class Game extends React.Component{
    constructor(props){
        super(props);

        this.state={
            board: new Array(0),
            turn: null,
            rowNow: null,
            colNow: null,

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
        arrayvar = Array.apply(null, Array(i)).map(() => new Array(i).fill(null));
        this.setState({board: arrayvar })
        this.handleChangeTurn();
    }
    

    shouldComponentUpdate(nextProps, nextState){
        if(nextProps.numberCell !== null){
            return true;
        }
            
        if(nextState.turn !== this.state.turn){
            return true;
        }
        if(nextState.board !== this.state.board){
            return true;
            
        }
        return false;
    }

    componentWillUpdate(nextProps, nextState) {   
        if(nextProps.numberCell !== this.props.numberCell){
            this.handleChangeCellNumber(nextProps.numberCell);
            this.setState({turn: 'x'});
        } 
        if(nextState.turn !== this.state.turn){
            
            this.props.getNextPlayer(nextState.turn);
            if(this.isWin(nextState.board, nextState.rowNow, nextState.colNow) === true)
                alert("win");
            }
        
    }

    getCoodinate(row, col){
        if(this.state.board[row][col] === null){
            console.log("hihi");
            this.setState({rowNow: row});
            this.setState({colNow: col})
            this.handleChangeTurn();
            this.HandleSetChangeBoard(row, col);
        }
        
    }

    HandleSetChangeBoard(row, col){
        var arrayvar1 = this.state.board.slice();
        arrayvar1[row][col] = this.state.turn;
        this.setState({board: arrayvar1})
    }

    isWin(board, rowCheck, colCheck){
        if(board === null){
            return;
        }
        if(rowCheck === null || colCheck === null){
            return;
        }

        var turn = board[rowCheck][colCheck];

        let index = colCheck;
        let count = 0;

        while(index > 0){
            index--;
            if(board[rowCheck][index] === turn){
                count++;
            }
            else{
                index = colCheck;
                break;   
            }
        }

        while(index < board.length){
            index++;
            if(board[rowCheck][index] === turn){
                count++;
            }
            else{
                break;
            }
        }

        if(count >= 4){

            return true;
        }
        else{
            index = rowCheck;
            count = 0;
        }
        //-------------------------------------------------------------

        while(index > 0){
            index--;
            if(board[index][colCheck] === turn){
                count++;
            }
            else{
                index = rowCheck;
                break;
                
            }
        }

        while(index < board.length){
            index++;
            if(board[index][colCheck] === turn){
                count++;
            }
            else{
                break;
            }
        }

        if(count >=4){
            return true;
        }
        else{
            index = rowCheck;
            count = 0;
        }

        //------------------------------------------------------------------

        let rowIndex = rowCheck;
        let colIndex = colCheck;

        while(rowIndex >0 && colIndex >0){
            rowIndex--;
            colIndex--;
            if(board[rowIndex][colIndex] === turn){
                count++
            }
            else{
                rowCheck = rowCheck;
                colIndex = colCheck;
                break;
            }
        }

        while(rowIndex < board.length && colIndex < board.length){
            rowIndex++;
            colIndex++;
            if(board[rowIndex][colIndex] === turn){
                count++;
            }
            else{
                break;
            }
        }

        if(count >= 4){
            return true;
        }
        else{
            rowIndex = rowCheck;
            colIndex = colCheck;
            count = 0;
        }

        //--------------------------------------------------------------

        while(rowIndex > 0 && colCheck < board.length){
            rowIndex--;
            colIndex++;
            if(board[rowIndex][colIndex] === turn){
                count++;
            }
            else{
                rowIndex = rowCheck;
                colIndex = colCheck;
                break;
            }
        }

        while(rowIndex < board.length && colIndex > 0){
            rowIndex++;
            colIndex--;
            if(board[rowIndex][colIndex] === turn){
                count++;
            }
            else{
                break;
            }
        }
        
        if(count >= 4){
            return true;
        }
        else{
            rowIndex = rowCheck;
            colIndex = colCheck;
            count = 0;
        }

        return false;
    }

    render()
    { 
        return(
            <Board board={this.state.board} getCoodinate={this.getCoodinate}/>
        );
    }

}