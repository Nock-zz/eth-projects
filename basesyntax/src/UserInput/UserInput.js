import React from 'react';
import  './UserInput.css';



const userInput = (props) => {
  return (
    <div className="Pad">
      <input className="UserInput" type="text" value={props.username} onChange={props.inputchange} />
    </div>
    );
}

export default userInput;
