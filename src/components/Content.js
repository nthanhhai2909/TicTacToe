import React from 'react';
import Game from './Game'
import Header from './Header1';
import History from './History';
import '../css/index.css';
import {Label, Col, FormControl, FormGroup, ControlLabel, MenuItem, DropdownButton, ButtonToolbar, input} from 'react-bootstrap';

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            turn: "-",
            numberCell: 0,
            history: [],
            rollBackArr: [],
            sortHistory:"ascending",
            tempNumberCell: 0,
        }
        this.getNextPlayer = this.getNextPlayer.bind(this);
        this.render = this.render.bind(this);
        this.updateHistory = this.updateHistory.bind(this);
        this.rollBack = this.rollBack.bind(this);
        this.reload = this.reload.bind(this);
        this.renderNumberCell = this.renderNumberCell.bind(this);
        this.sortHistory = this.sortHistory.bind(this);
        
    }   

    sortHistory(){
        if(this.state.sortHistory === "ascending"){
            this.setState({sortHistory: "decrease"});
        }
        else{
            this.setState({sortHistory: "ascending"});
        }
    }
    getNextPlayer(i){
        this.setState({turn: i});
    }

    renderNumberCell(){
        this.setState({reload: false});
    }

    reload()
    {
        this.setState({history: []});
        this.setState({rollBackArr: []});
        this.setState({turn: "x"});
        this.setState({numberCell: 0});
        this.setState({sortHistory: "ascending"});

    }

    updateHistory(move){
        if(this.state.sortHistory === "ascending"){
            this.setState({history: [...this.state.history, move]});
        }
        else{
            let temp = [move];
            temp = temp.concat(this.state.history);
            this.setState({history: temp});
        }
        


    }
    rollBack(index){
        let arr;
        if(this.state.sortHistory === "decrease"){
             arr = this.state.history.slice(index, this.state.history.length);
        }
        else{
            arr = this.state.history.slice(0, index + 1);
        }
        
        this.setState({history: arr});
        this.setState({rollBackArr: arr});

    }

    handleClickSetCellNumber(i){
        this.setState({history: []});
        this.setState({rollBackArr: []});
        this.setState({turn: "x"});
        this.setState({numberCell: -1});
        this.setState({tempNumberCell: i});
        this.setState({numberCell: 0});
        this.setState({sortHistory: "ascending"});
        
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    componentWillUpdate(nextProps, nextState) { 
        if(nextState.rollBackArr.length > 0 && nextState.rollBackArr !== this.state.rollBackArr){
            this.setState({rollBackArr: []});
        }
        if(this.state.sortHistory !== nextState.sortHistory){
            let arr = this.state.history;
            arr.reverse();
            this.setState({history: arr});
        }

        if(nextState.numberCell === 0){
            this.setState({numberCell: this.state.tempNumberCell});
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
                            <div>
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

                            <button className="btn btn-info" onClick={() => this.sortHistory()}>{this.state.sortHistory}</button>

                            <History history={this.state.history} rollBack={this.rollBack} sort={this.state.sortHistory}/>

                        </div>
                    </div>
                    
                    <div className="col-sm-9">
                        <h4>Game</h4>
                        <hr/>
                        <Game numberCell={this.state.numberCell} 
                            getNextPlayer={this.getNextPlayer} updateHistory={this.updateHistory}
                            history={this.state.rollBackArr} reload={this.reload} renderNumberCell={this.state.renderNumberCell}
                        />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
