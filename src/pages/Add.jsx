import React, { useState, useEffect } from "react";

function Add() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const { title, description, completed } = formData;
  const onChange = () => {};
  return (
    <div>
      <h2>Add a new task</h2>
      <form>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className=""
            id="title"
            name="title"
            value={title}
            placeholder="Enter a title"
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className=""
            id="description"
            name="description"
            value={description}
            placeholder="Enter a description"
            onChange={onChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
