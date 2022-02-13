import React from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import '../styles/pages/App.css';

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tormar el curso de intro a react", completed: false },
  { text: "Llorar con la llorona", completed: false },
];

function App() {

  const localStorageTodos = localStorage.getItem('TODOS_V1')
  let parsedTodos

  if (!localStorageTodos) {
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
    parsedTodos = JSON.parse(localStorage.getItem('TODOS_V1'))

  } else {
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length && todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {  
      const todoText = todo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }

  const saveTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTodos)
    setTodos(newTodos);
  }

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);

  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  }

  return (
    // para evitar un div innecesario
    // Una manera más común de utilizar un fragment en react es con las llaves vacías <></>
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
    </React.Fragment>
  );
}

export default App;
