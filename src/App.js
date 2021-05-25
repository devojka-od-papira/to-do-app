import React from "react";
import AddTodo from "./components/addTodoList";
import style from "./style.css";

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
            <div className="todo-app">
              <AddTodo />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
