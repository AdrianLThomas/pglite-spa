import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import pgliteLogo from "./assets/pglite.svg";
import "./App.css";

import Todos from "./components/Todos";
import { Suspense } from "react";

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
      
      <Suspense fallback={<p>Loading database...</p>}>
        <Todos/>
      </Suspense>
    </>
  );
}

export default App;
