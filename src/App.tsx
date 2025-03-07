import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pgliteLogo from "./assets/pglite.svg";
import "./App.css";

import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "./app/db/migrate";
import { todos } from "./app/db/schema";

const client = new PGlite("idb://my-pgdata");
const db = drizzle({ client });

function App() {
  const [todoList, setTodoList] = useState<(typeof todos.$inferSelect)[]>([]);

  const handleQuery = async () => {
    let todoList = await db.select().from(todos).orderBy(todos.createdAt);
    setTodoList(todoList)
  };

  useEffect(() => {
    migrate();
  })

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

      <button onClick={handleQuery}>Let's query!</button>

      <div className="card">
        <pre>{JSON.stringify(todoList)}</pre>
      </div>

      <p>REPL - TODO</p>
    </>
  );
}

export default App;
