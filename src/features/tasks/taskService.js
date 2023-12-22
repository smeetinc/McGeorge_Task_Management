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

// Get one user task
const fetchOneTask = async (taskId) => {
  const response = await axios.get(API_URL + taskId);

  return response.data;
};

// Delete user task
const deleteTask = async (taskId) => {
  const response = await axios.delete(API_URL + taskId);

  return response.data;
};

//update user task
const updateTask = async (taskData) => {
  const response = await axios.put(API_URL, taskData);
  return response.data;
};

const taskService = {
  createTask,
  getTasks,
  fetchOneTask,
  deleteTask,
  updateTask,
};

export default taskService;
