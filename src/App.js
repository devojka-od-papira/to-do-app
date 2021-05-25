import React from "react";
import AddInput from "./components/addInput";
import Task from "./components/task";
import "./style.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <nav>
          <header className="header">
            <h1>TODO</h1>
          </header>
        </nav>
        <main>
          <section>
            <div>
              <AddInput />
            </div>
            <div>
              <Task />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
