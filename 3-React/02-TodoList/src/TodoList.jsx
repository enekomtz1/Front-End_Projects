import { useState } from "react";
import { SlClose, SlPlus } from "react-icons/sl";
import "./TodoList.css";

function generateId() {
  return Math.floor(Math.random() * 100);
}

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <div className="input-group">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New Todo"
        />
        <button onClick={addTodo}>
          <SlPlus />
        </button>
      </div>

      {todos.map(({ text, id }) => (
        <li key={id} className="todos-list">
          <span className="todo-text">{text}</span>
          <button onClick={() => removeTodo(id)}>
            <SlClose className="close-btn" />
          </button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
