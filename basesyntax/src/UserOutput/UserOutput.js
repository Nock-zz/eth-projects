import React from 'react';
import './UserOutput.css';

const style = {
  backgroundColor: 'pink',
  font: 'inherit',
  border:  '10px solid grey',
  padding: '20px',
  boxSizing: 'border-box' /* box-sizing */
  };


const userOutput = (props) => {
  console.log(props);
  return (
    <div >
      <p style={style} onClick={props.click}>My name is {props.username}</p>
      <p style={style}>My nickname is secret</p>
    </div>
  );
}

export default userOutput;
