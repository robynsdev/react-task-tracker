import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "cleaning",
      day: "Feb 2th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "feeding yaya",
      day: "Feb 3th at 2:30pm",
      reminder: true,
    },
    {
      id: 4,
      text: "studying",
      day: "Feb 4th at 2:30pm",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
