import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  function addTask() {
    if (newTask === "") {
      return;
    }

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function deleteTask(index: number) {
    setTasks(tasks.filter((_, i) => i !== index));
  }

  return (
    <>
      <div className="todo-container">
        <h2>Todo List</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button id="btnAdd" onClick={addTask}>
          Add Task
        </button>
        <hr />
        <ul>
          {tasks.length === 0 ? (
            <p>No tasks Available. Add a new task.</p>
          ) : (
            tasks.map((task, index) => (
              <li>
                {task}
                <button id="btnDel" onClick={() => deleteTask(index)}>
                  X
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  );
}

export default App;
