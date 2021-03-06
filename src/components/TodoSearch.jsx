import React from "react";
import "../styles/components/TodoSearch.css";
import { TodoContext } from "../TodoContext";


function TodoSearch() {

  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    event.keyCode === 27 && setSearchValue("");
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      onKeyDown={handleKeyDown}
    />
  );
}

export { TodoSearch };
