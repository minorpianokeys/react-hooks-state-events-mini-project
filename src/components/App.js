import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [filteredTasks, setFilteredTasks] = useState(tasks)

  function handleDeleteTask(taskTextToDelete) {
    const tasksToDisplay = tasks.filter(task => {
      return task.text !== taskTextToDelete
    })
    setTasks(tasksToDisplay)
    setFilteredTasks(tasksToDisplay)
  }

  function handleCategoryFilter(categoryName) {
    if (categoryName === "All") {
      setFilteredTasks(tasks)
    } else {
      const tasksToDisplay = tasks.filter(task => {
        return task.category === categoryName;
      })
      setFilteredTasks(tasksToDisplay)
    }
  }

  function onTaskFormSubmit(newTask) {
    setFilteredTasks([...filteredTasks, newTask])
    console.log(tasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter onCategoryFilter={handleCategoryFilter} categories={CATEGORIES}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} handleDeleteTask={handleDeleteTask}/>
    </div>
  );
}

export default App;
