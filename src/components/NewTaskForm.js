import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [detail, setDetail] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Code")

  function handleDetailChange(e) {
    setDetail(e.target.value)
  }

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: detail,
      category: selectedCategory
    }
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleDetailChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {categories.map(category => {
            if (category === "All") {
              return null
            } else {
              return (<option key={category}>{category}</option>)
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
