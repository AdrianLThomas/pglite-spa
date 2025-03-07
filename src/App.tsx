import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { migrate } from "./app/db/migrate";
import { todos } from "./app/db/schema";
import { Repl } from "@electric-sql/pglite-repl";

const client = new PGlite("idb://my-pgdata");
const db = drizzle({ client });

function App() {

  const [count, setCount] = useState(0);

  const handleQuery = async () => {
    let todoList = await db.select().from(todos).orderBy(todos.createdAt);
    console.log(todoList)
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
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <Repl pg={client} />
      <button onClick={migrate}>Let's migrate!</button>
      <button onClick={handleQuery}>Let's query!</button>
    </>
  );
}

export default App;
