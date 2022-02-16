import React from 'react'
import { TodoContext } from '../TodoContext'
import '../styles/components/TodoForm.css'

export default function TodoForm() {
  const [newTodoValue, setnewTodoValue] = React.useState('')
  const {
    addTodo,
    setOpenModal
  } = React.useContext(TodoContext)
  const onChange = (event) => {
    setnewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    newTodoValue && addTodo(newTodoValue)
    setOpenModal(false)
  }
  return (
    <form onSubmit={onSubmit}>
      <label >Agregar TODO</label>
      <textarea 
        placeholder='Cortar la Cebolla'
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type='button'
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button
          type='submit'
          disabled={!newTodoValue && true}
          className="TodoForm-button TodoForm-button-add"
        >
          Agregar
        </button>
      </div>
    </form>
  )
}
