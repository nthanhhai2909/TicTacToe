import React from 'react';
import {Label, Col, FormControl, FormGroup, ControlLabel, MenuItem, DropdownButton, ButtonToolbar} from 'react-bootstrap';

export default class InformationGame extends React.Component{
    render(){
        return(
            <div>
                <div className="d-inline">
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={4}>
                        Cell Number
                    </Col>
                    <Col sm={8}>
                    <ButtonToolbar>
                        <DropdownButton bsSize="medium" title="Select cell number" id="dropdown-size-medium">
                            <MenuItem eventKey="1">10x10</MenuItem>
                            <MenuItem eventKey="2">15x15</MenuItem>
                            <MenuItem eventKey="3">20x20</MenuItem>
                            <MenuItem eventKey="3">25x25</MenuItem>
                        </DropdownButton>
                        </ButtonToolbar>
                    </Col>
                </FormGroup>

                </div>
                
            </div>
        );
    }
}