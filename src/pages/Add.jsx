import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";
import { reset } from "../features/tasks/taskSlice";
import { createTask } from "../features/tasks/taskSlice";
function Add() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const { title, description, completed } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { tasks, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tasks
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Task uploaded successfully");
    }
    dispatch(reset);
  }, [tasks, isError, isLoading, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      toast.error("All fields must be filled");
    } else {
      const taskData = {
        title,
        description,
        completed,
      };
      dispatch(createTask(taskData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="px-10">
      <div class="flex">
        <h1 class="font-bold uppercase text-5xl mb-8">
          Add a new <br /> Task
        </h1>
      </div>

      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            value={title}
            placeholder="Enter a title"
            onChange={onChange}
          />
        </div>
        <div className="my-4">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={description}
            placeholder="Write a description"
            onChange={onChange}
          ></textarea>
        </div>
        <input type="hidden" id="completed" name="completed" value={false} />
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-sky-950 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Add;
