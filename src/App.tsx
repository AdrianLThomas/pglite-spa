import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pgliteLogo from "./assets/pglite.svg";
import "./App.css";

import Todos from "./components/Todos";
import { Suspense } from "react";
import { Repl } from "@electric-sql/pglite-repl";
import { client } from "./app/db/drizzle";

function App() {
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

      <span>Read the
        <a href="https://www.adrian-thomas.com/blog/2025-03-11/running-postgres-in-the-browser/" target="_blank"> companion blog post</a> here.
      </span>

      <hr/>

      <Suspense fallback={<p>Loading database...</p>}>
        <Todos />
        <div className="repl">
          <span>REPL (e.g. try: <code>SELECT * from todos</code> or <code>'\dt'</code>)</span>
          <Repl pg={client} />
        </div>
      </Suspense>
    </>
  );
}

export default App;
