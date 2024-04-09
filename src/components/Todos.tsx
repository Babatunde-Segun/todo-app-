// import { useContext } from "react";
import React, { useContext } from "react";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";

import { TodosContext } from "../store/todos-context";

// For a React component: The React.FC is a way to tell typescript the Todos is a REact functional component
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          deleteTodo={todosCtx.removeTodo}
          todo={item}
        />
      ))}
    </ul>
  );
};

export default Todos;
