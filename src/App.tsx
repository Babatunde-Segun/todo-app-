import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [
    new Todo("Learning on wednesday"),
    new Todo("Learning type on wednesday"),
  ];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
