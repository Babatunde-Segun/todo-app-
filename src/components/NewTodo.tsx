import React from "react";

import { useRef } from "react";
import classes from "./NewTodo.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

// To add a function as a prop we use the arrow syntax () => {}
// Not to forget the we have to set type of any parameter that the function may have
//  If the function is return a value, we have to specify in our when setting the type
//  if there's no return value , we set it to void just like the example

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  // useRef point a HTML element: you just have to tell typescript the element you are point to.
  let todoTextInputRef = useRef<HTMLInputElement>(null);

  // React.FormEvent is a type in typescript use for a Form element
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;

    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <label htmlFor='todoText'>Add New Todo</label>
      <input type='text' name='todoText' id='todoText' ref={todoTextInputRef} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default NewTodo;
