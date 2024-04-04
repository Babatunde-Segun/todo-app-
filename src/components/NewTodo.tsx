import React from "react";

import { useRef } from "react";

const NewTodo: React.FC = () => {
  // useRef point a HTML element: you just have to tell typescript the element you are point to.
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  // React.FormEvent is a type in typescript use for a Form element
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) return;
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='todoText'>Add New Todo</label>
      <input type='text' name='todoText' id='todoText' ref={todoTextInputRef} />
      <button type='submit'></button>
    </form>
  );
};

export default NewTodo;
