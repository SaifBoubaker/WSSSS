import "./App.css";
import TodoList from "./Components/TodoList";
import AddTodo from "./Components/AddTodo";
function App() {
  return (
    <div className="App">
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
