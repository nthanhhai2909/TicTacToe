import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/index.css';


export default class Square extends React.Component {

  constructor(props){
    super(props);
  }
    render() {
      return (
          <button className="button" onClick={this.props.onClick}>{this.props.values}</button>  
      );
    }
  }