import React from "react";
import '../styles/components/TodoCounter.css'


function TodoCounter({ total, completed }) {
  return (
    <h2 className="TodoCounter"> Has complentado {completed} de {total} ToDos</h2>
  )
}

export { TodoCounter };