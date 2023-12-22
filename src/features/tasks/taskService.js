import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos/";

// Create new task
const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);

  return response.data;
};

// Get user tasks
const getTasks = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  return response.data;
};

// Delete user task
const deleteTask = async (taskId) => {
  const response = await axios.delete(API_URL + taskId);

  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  deleteTask,
};

export default taskService;
