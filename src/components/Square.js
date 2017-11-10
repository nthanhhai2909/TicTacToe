import React from 'react';
import {Button} from 'react-bootstrap';
import '../css/index.css';


export default class Square extends React.Component {

    render() {
      return (
          <button className="button" onClick={props.onClick} >{this.props.values}</button>  
      );
    }
  }