import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import { useState } from "react";

function App() {
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

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} deleteTodo={deleteTodoHandler} />
    </div>
  );
}

export default App;
