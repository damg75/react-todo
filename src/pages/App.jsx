import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import '../styles/pages/App.css';
import { TodoProvider, TodoContext } from '../TodoContext'
import { Modal } from "../components/Modal";
import '../styles/components/Modal.css'
import TodoForm from "../components/TodoForm";




function App() {

  // React.useEffect(() => {
  //   // alert('use effect')
  // }, [totalTodos])

  // const {
  //   error,
  //   loading,
  //   searchedTodos,
  //   completeTodo,
  //   deleteTodo,
  // } = React.useContext(TodoContext);

  return (
    // para evitar un div innecesario
    // Una manera más común de utilizar un fragment en react es con las llaves vacías <></>
    <TodoProvider>
      <React.Fragment>
        <TodoContext.Consumer>
          {({
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo
          }) => (
            <>
              {!loading && <TodoCounter />}
              <TodoSearch />
              <TodoList>
                {loading && <p>Cargando Todos</p>}
                {error && <p>Hubo un error</p>}
                {(!loading && totalTodos.length < 1) && <p>Crea tu Primer Todo</p>}
                {(!loading && searchedTodos.length < 1) && <p>No Hay Coincidencias</p>}
                {!loading && searchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    toggleComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
              {/* si es falso que es falso entonjces es true existe y es true */}
              {!!openModal && (
                <Modal>
                  <TodoForm/>
                </Modal>
              )
              }
              <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
              />
            </>
          )
          }

        </TodoContext.Consumer>
      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
