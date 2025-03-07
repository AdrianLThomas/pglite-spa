import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pgliteLogo from "./assets/pglite.svg";
import "./App.css";

import { migrate } from "./app/db/migrate";
import { todos } from "./app/db/schema";
import { addTodoAction, deleteTodoAction, fetchAllTodos } from "./app/db/actions";

function App() {
  const [todoList, setTodoList] = useState<(typeof todos.$inferSelect)[]>([]);

  useEffect(() => {
    const setup = async () => {
      await migrate();

      const todoList = await fetchAllTodos();
      setTodoList(todoList);
    }

    setup();
  })

  const handleAddTodoAction = async (formData: FormData) => {
    const newTodo = await addTodoAction(formData);
    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteTodoAction = async (formData: FormData) => {
    const deleted = await deleteTodoAction(formData);
    setTodoList(todoList.filter((x) => x.id !== deleted.id));
  };


  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://pglite.dev/" target="_blank">
          <img src={pgliteLogo} className="logo" alt="PGlite logo" />
        </a>
      </div>
      <h1>Vite + React + PGlite</h1>

      <form action={handleAddTodoAction}>
        <input type="text" name="content" required />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span style={{ marginRight: "10px" }}>{todo.content}</span>
            <form action={handleDeleteTodoAction} style={{ display: "inline" }}>
              <input type="hidden" value={todo.id} name="id" />
              <button type="submit">Delete</button>
            </form>
          </li>
        ))}
      </ul>

      {/* <p>REPL - TODO</p> */}
    </>
  );
}

export default App;
