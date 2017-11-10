
import React from 'react'
import Square from './Square';
export default class Board extends React.Component {
  
  render(i) {
    const list = ['x','x','x'];
    const list1 = new Array(10).fill(list);
    return (
      <div>
        <Square values={list1}/>
      </div>
  
    );
  }
}