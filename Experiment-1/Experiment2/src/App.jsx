import { useState } from "react"
import "./App.css"

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task])
      setTask("")
    }
  }

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <h2>Simple To-Do List SPA</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App