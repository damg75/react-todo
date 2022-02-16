import React from 'react';
import '../styles/components/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickCreate = () => {
    // props.setOpenModal(!props.openModal);
    props.setOpenModal(prevState => !prevState);
  }
  return (
    <button className="CreateTodoButton" onClick={() => onClickCreate()}>+</button>
  );
}


export { CreateTodoButton };