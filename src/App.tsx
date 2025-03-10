import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pgliteLogo from "./assets/pglite.svg";
import "./App.css";

import { useState } from "react";
import { Repl } from "@electric-sql/pglite-repl";
import { client } from "./app/db/drizzle";
import { Link, Route, Routes } from "react-router-dom";
import TodoPage from "./pages/TodoPage";
import CitizensPage from "./pages/CitizensPage";

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

      <Routes>
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/citizens" element={<CitizensPage />} />
      </Routes>

      <div className="repl">
        <button onClick={() => setIsReplOpen(!isReplOpen)}>💻</button>
            {isReplOpen && <Repl pg={client} />}
      </div>

      <nav> 
        <span>Nav: </span><Link to="/todos">Todos</Link> | <Link to="/citizens">Citizens</Link>
      </nav>
    </>
  );
}

export default App;
