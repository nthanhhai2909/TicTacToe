import React from 'react';
import Game from './Game'
import Header from './Header1';
import {Label, Col, FormControl, FormGroup, ControlLabel, MenuItem, DropdownButton, ButtonToolbar} from 'react-bootstrap';

export default class Content extends React.Component{
    constructor(props){
        super(props);
        this.state={
            numberCell: 0,
        }

    }   

    handleClickSetCellNumber(i){
        this.setState({numberCell: i});
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.numberCell !== this.state.numberCell){
            return true;
        }
        return false;
    }

    componentWillUpdate(nextProps, nextState) {
        this.render();
    }

    renderInformationGame(){
        return(
        <div>
            
            <div className="d-inline">
            <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={4}>
                    Cell Number
                </Col>
                <Col sm={8}>
                <ButtonToolbar>
                    <DropdownButton bsSize="medium" title="Select cell number" id="dropdown-size-small">
                        <MenuItem  onClick={()=>this.handleClickSetCellNumber(10)}>10x10</MenuItem>
                        <MenuItem  onClick={()=>this.handleClickSetCellNumber(15)}>15x15</MenuItem>
                        <MenuItem  onClick={()=>this.handleClickSetCellNumber(20)}>20x20</MenuItem>
                    </DropdownButton>
                    </ButtonToolbar>
                </Col>  
            </FormGroup>
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
                        <Game numberCell={this.state.numberCell}/>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
