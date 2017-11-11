import React from 'react';
import Game from './Game'
import Header from './Header1';
import '../css/index.css';
import {Label, Col, FormControl, FormGroup, ControlLabel, MenuItem, DropdownButton, ButtonToolbar} from 'react-bootstrap';

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            turn: "Not ready",
            numberCell: 0,
        }
        this.getNextPlayer = this.getNextPlayer.bind(this);
        this.render = this.render.bind(this);

    }   

    getNextPlayer(i){
        this.setState({turn: i});
    }

    handleClickSetCellNumber(i){
        this.setState({numberCell: i});
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.numberCell !== this.state.numberCell){
            return true;
        }
        if(nextState.turn != this.state.turn){
            return true;
        }
        return false;
    }

    componentWillUpdate(nextProps, nextState) { 
        this.render();
    }

    renderInformationGame(){
        return(
        <div className="infor">
            <div >
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
        </div>
        );
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
                        {this.renderInformationGame()}
                    </div>
                    
                    <div className="col-sm-9">
                        <h4>Game</h4>
                        <hr/>
                        <Game numberCell={this.state.numberCell} getNextPlayer={this.getNextPlayer}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
