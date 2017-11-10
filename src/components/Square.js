import React from 'react';
import {Button} from 'react-bootstrap';


export default class Square extends React.Component {

    render() {
      const iColArr = this.props.values;
      return (
        <div>
          {
            iColArr.map((ele) => ele.map((i) => <Button color="#F44336">{i}</Button>))
          }
        </div>
        
      );
    }
  }