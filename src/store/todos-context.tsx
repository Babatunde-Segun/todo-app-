import React, { ReactInstance, ReactNode, useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{ children: ReactNode }> = (props) => {
  // useState is a generic function where the initial value is set never
  // we can set type with the angle bracket for typescript to what we are set
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => {
      return [newTodo, ...prev];
    });
  };

  //  delete a todo
  const deleteTodoHandler = (id: string) => {
    if (window.confirm("Are you sure that you want to remove todo"))
      setTodos(todos.filter((todo) => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
