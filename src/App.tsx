import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pgliteLogo from "./assets/pglite.svg";
import "./App.css";

import Todos from "./components/Todos";
import { Suspense, useState } from "react";
import { Repl } from "@electric-sql/pglite-repl";
import { client } from "./app/db/drizzle";

function App() {
  const [isReplOpen, setIsReplOpen] = useState(false);

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

      <Suspense fallback={<p>Loading database...</p>}>
        <Todos />
        <div className="repl">
          <button onClick={() => setIsReplOpen(!isReplOpen)}>REPL</button>
          {isReplOpen && <Repl pg={client} />}
        </div>
      </Suspense>
    </>
  );
}

export default App;
