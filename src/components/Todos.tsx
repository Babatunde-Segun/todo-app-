import React from "react";
import Todo from "../models/todo";
import TodoList from "./TodoList";

// For a React component: The React.FC is a way to tell typescript the Todos is a REact functional component
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoList key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
