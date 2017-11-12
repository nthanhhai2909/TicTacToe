import React from 'react';
import Game from './Game'
import Header from './Header1';
import History from './History';
import '../css/index.css';
import {Label, Col, FormControl, FormGroup, ControlLabel, MenuItem, DropdownButton, ButtonToolbar} from 'react-bootstrap';

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            turn: "Not ready",
            numberCell: 0,
            history: [],
            rollBackArr: []
        }
        this.getNextPlayer = this.getNextPlayer.bind(this);
        this.render = this.render.bind(this);
        this.updateHistory = this.updateHistory.bind(this);
        this.rollBack = this.rollBack.bind(this);
        this.reload = this.reload.bind(this);
        

    }   

    getNextPlayer(i){
        this.setState({turn: i});
    }

    reload()
    {
        this.setState({history: []});
        this.setState({rollBackArr: []});
        this.setState({turn: "x"});
        this.setState({numberCell: 0});

    }

    updateHistory(move){
        this.setState({history: [...this.state.history, move]});
    }
    rollBack(index){
        let arr = this.state.history.slice(0, index + 1);
        this.setState({rollBackArr: arr});
    }

    handleClickSetCellNumber(i){
        this.setState({history: []});
        this.setState({rollBackArr: []});
        this.setState({turn: "x"});
        this.setState({numberCell: i});
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentWillUpdate(nextProps, nextState) { 
        if(nextState.rollBackArr.length > 0 && nextState.rollBackArr !== this.state.rollBackArr){
            this.setState({rollBackArr: []});
        }
    }


    render(){
        return(
            <div>
                <Header/>
                <div className="container-fluid">
                <div className="row content">
                    <div className="col-sm-3 sidenav">
                        <h4>Information</h4>
                        <hr/>
                        <div className="infor">
                            <div d-inline>
                                <label>Cell Number</label>
                                <DropdownButton bsSize="medium" title="Select cell number" id="dropdown-size-medium">
                                    <MenuItem  onClick={()=>this.handleClickSetCellNumber(10)}>10x10</MenuItem>
                                    <MenuItem  onClick={()=>this.handleClickSetCellNumber(15)}>15x15</MenuItem>
                                    <MenuItem  onClick={()=>this.handleClickSetCellNumber(20)}>20x20</MenuItem>
                                </DropdownButton>             
                            </div>

                            <div className="infor">
                                <label>Turn</label>
                                <h4>{this.state.turn}</h4>
                            </div>
                            <History history={this.state.history} rollBack={this.rollBack}/>
      
                        </div>
                    </div>
                    
                    <div className="col-sm-9">
                        <h4>Game</h4>
                        <hr/>
                        <Game numberCell={this.state.numberCell} 
                            getNextPlayer={this.getNextPlayer} updateHistory={this.updateHistory}
                            history={this.state.rollBackArr} reload={this.reload}
                        />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
