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
            listBoxWin: []

        }
        this.handleChangeCellNumber = this.handleChangeCellNumber.bind(this);
        this.getCoodinate = this.getCoodinate.bind(this);
        this.reload = this.reload.bind(this);
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
        var arrayvar = Array.apply(null, Array(i)).map(() => new Array(i).fill(null));
        this.setState({board: arrayvar })
        this.setState({turn: 'x'}); 
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
        if(nextProps.history !== this.props.history){
            return true;
        }
        if(nextState.listBoxWin !== this.state.listBoxWin){
            return true;
        }
        return false;
    }

    reload(){
        this.props.reload();
    }

    componentWillUpdate(nextProps, nextState) {  
        
        if(nextProps.numberCell !== this.props.numberCell ){
            this.handleChangeCellNumber(nextProps.numberCell);
            this.setState({turn: "x"});
            this.setState({listBoxWin: []});
            
        } 
        if(nextState.turn !== this.state.turn){
            if(this.isWin(nextState.board, nextState.rowNow, nextState.colNow) !== null){
                this.setState({listBoxWin: this.isWin(nextState.board, nextState.rowNow, nextState.colNow)});
                alert(this.state.turn + " win");
                setTimeout(() => this.reload(), 3000);
            }
            else{
                this.props.getNextPlayer(nextState.turn);  
            }
           
        }

        if(nextProps.history !== this.props.history ){
            
            var turn;
            var arrayvar2 = Array.apply(null, Array(this.props.numberCell)).map(() => new Array(this.props.numberCell).fill(null));
            nextProps.history.map((ele, index) => 
                {
                    arrayvar2[ele[0]][ele[1]] = ele[2];
                });
        
            if(nextProps.history.length < 1){
                return;
            }
            if(nextProps.history[nextProps.history.length - 1][2] === "x"){
                this.props.getNextPlayer("o");
            }
            else{
                this.props.getNextPlayer("x");
            }
            this.setState({board: arrayvar2 }) 
        }
    }

    getCoodinate(row, col){
        if(this.state.board[row][col] === null){
            this.setState({rowNow: row});
            this.setState({colNow: col})
            this.handleChangeTurn();
            this.HandleSetChangeBoard(row, col);
            this.props.updateHistory([row, col, this.state.turn]);
        }
        
    }

    HandleSetChangeBoard(row, col){
        var arrayvar1 = this.state.board.slice();
        arrayvar1[row][col] = this.state.turn;
        this.setState({board: arrayvar1})
    }

    isWin(board, rowCheck, colCheck){
        if(board === null){
            return null;
        }
        if(rowCheck === null || colCheck === null){
            return null;
        }

        if(rowCheck > board.length || colCheck > board.length || rowCheck < 0 || colCheck < 0){
            return null;
        }
        var turn = board[rowCheck][colCheck];

        let index = colCheck;
        let arrBoxWin = [];
        arrBoxWin.push[rowCheck, colCheck];

        while(index > 0){
            index--;
            if(board[rowCheck][index] === turn){
                arrBoxWin.push([rowCheck, index]);
            }
            else{
                break;
            }

        }
        index = colCheck;
        while(index < board.length -1){
            index++;
            if(board[rowCheck][index] === turn){
                arrBoxWin.push([rowCheck, index]);
            }
            else{
                break;
            }
        }

        if(arrBoxWin.length >= 5){
            return arrBoxWin;
        }
        else{
            index = rowCheck;
            arrBoxWin = [];
            arrBoxWin.push([rowCheck, colCheck]);
        }
        //-------------------------------------------------------------
        while(index > 0){
            index--;
            if(board[index][colCheck] === turn){
                arrBoxWin.push([index, colCheck]);
            }
            else{
                break;
                
            }
        }
        index = rowCheck;
        while(index < board.length - 1){
            index++;
            if(board[index][colCheck] === turn){
                arrBoxWin.push([index, colCheck]);
            }
            else{
                break;
            }
        }

        if(arrBoxWin.length >=5){
            return arrBoxWin;
        }
        else{
            index = rowCheck;
            arrBoxWin = [];
            arrBoxWin.push([rowCheck, colCheck]);
        }

        //------------------------------------------------------------------

        let rowIndex = rowCheck;
        let colIndex = colCheck;

        while(rowIndex >0 && colIndex >0){
            rowIndex--;
            colIndex--;
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                break;
            }
        }
        rowCheck = rowCheck;
        colIndex = colCheck;
        while(rowIndex < board.length - 1 && colIndex < board.length - 1){
            rowIndex++;
            colIndex++;
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                break;
            }
        }

        if(arrBoxWin.length >= 5){
            return arrBoxWin;
        }
        else{
            rowIndex = rowCheck;
            colIndex = colCheck;
            arrBoxWin = [];
            arrBoxWin.push([rowCheck, colCheck]);
        }

        //--------------------------------------------------------------

        while(rowIndex > 0 && colCheck < board.length - 1){
            rowIndex--;
            colIndex++;
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                
                break;
            }
        }
        rowIndex = rowCheck;
        colIndex = colCheck;
        while(rowIndex < board.length - 1 && colIndex > 0){
            rowIndex++;
            colIndex--;
            if(rowIndex === board.length){
                return null;
            }
            if(board[rowIndex][colIndex] === turn){
                arrBoxWin.push([rowIndex, colIndex]);
            }
            else{
                break;
            }
        }
        
        if(arrBoxWin.length >= 5){
            return arrBoxWin;
        }
        else{
            rowIndex = rowCheck;
            colIndex = colCheck;
            arrBoxWin = [];
        }

        return null;
    }

    render()
    {
        return(
            <Board board={this.state.board} getCoodinate={this.getCoodinate} listBoxWin={this.state.listBoxWin}/>
        );
    }

}