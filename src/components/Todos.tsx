import React from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";
import classes from "./Todos.module.css";

// For a React component: The React.FC is a way to tell typescript the Todos is a REact functional component
const Todos: React.FC<{ items: Todo[]; deleteTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoList
          key={item.id}
          text={item.text}
          deleteTodo={props.deleteTodo}
          todo={item}
        />
      ))}
    </ul>
  );
};

export default Todos;
