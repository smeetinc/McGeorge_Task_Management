import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// Create new goal
const createTask = async (taskData, token) => {
  const response = await axios.post(API_URL, taskData, {});

  return response.data;
};

// Get user goals
const getTasks = async (token) => {
  const response = await axios.get(API_URL, {});

  return response.data;
};

// Delete user goal
const deleteTask = async (taskId, token) => {
  const response = await axios.delete(API_URL + taskId, {});

  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  deleteTask,
};

export default taskService;
