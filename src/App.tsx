import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learning on wednesday"),
    new Todo("Learning type on wednesday"),
  ];

  const addTodoHandler = (todoText: string) => {};
  return (
    <div>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
