import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
  return (
    <button className="CreateTodoButton" onClick={() => myFunc('dan')}>+</button>
  );
}

const myFunc = (msg) => {
  alert('alerta' + msg)
}

export { CreateTodoButton };