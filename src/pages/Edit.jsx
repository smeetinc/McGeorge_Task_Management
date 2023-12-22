import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/" + id)
      .then((res) => setData(res.data))
      .catch((err) => toast.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("https://jsonplaceholder.typicode.com/todos/")
      .then((res) => {
        toast.success("Task updated successfully");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Something went wrong, Try again later");
      });
  };

  return (
    <div className="px-10">
      <div class="flex">
        <h1 class="font-bold uppercase text-3xl lg:text-4xl mb-8">
          Edit your <br /> Task
        </h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <input type="hidden" name="id" value={data.id} />
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            id="title"
            name="title"
            value={data.title}
            onChange={(e) => setData({ ...data, title: e.target.value })}
            placeholder="Enter a title"
          />
        </div>
        <div className="my-4">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            id="description"
            name="description"
            value={data.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            placeholder="Write a description"
          ></textarea>
        </div>
        <div className="my-4">
          <label htmlFor="status">Status</label>
          <select
            name="completed"
            id="status"
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            value={(e) => setData({ ...data, completed: e.target.value })}
          >
            <option value={false}>Incomplete</option>
            <option value={true}>Completed</option>
          </select>
        </div>

        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            type="submit"
            className="uppercase text-sm font-bold tracking-wide bg-sky-950 text-gray-100 p-3 rounded-lg w-full 
                      focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Edit;
