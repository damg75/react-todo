import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import '../styles/pages/App.css';
import { TodoProvider } from '../TodoContext'
import { TodoContext } from '../TodoContext'



function App() {

  // React.useEffect(() => {
  //   // alert('use effect')
  // }, [totalTodos])

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
            deleteTodo
          }) => (
            <>
              <TodoCounter total={totalTodos} completed={completedTodos} />
              <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
              <TodoList>
                {loading && <p>Cargando Todos</p>}
                {error && <p>Hubo un error</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primer Todo</p>}
                {searchedTodos.map((todo) => (
                  <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    toggleComplete={() => toggleCompleteTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                  />
                ))}
              </TodoList>
              <CreateTodoButton />
            </>
          )
          }
        </TodoContext.Consumer>
      </React.Fragment>
    </TodoProvider>
  );
}

export default App;
