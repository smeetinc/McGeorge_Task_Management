import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { ImBin } from "react-icons/im";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaRegEdit } from "react-icons/fa";

function TaskItem({ task }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    try {
      dispatch(deleteTask(task.id));
      toast.success("Task deleted successfully");
    } catch {
      toast.error("Something went wrong, Try again");
    }
  };

  const cardClick = () => {
    setShow(!show);
  };
  const handleEdit = () => {
    window.location.href = `/edit/${task.id}`;
  };

  return (
    <div
      className="max-w-96 py-4 px-4 rounded shadow-md cursor-pointer"
      onClick={cardClick}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl uppercase text-center">
          {task.title}
        </h2>
        <button onClick={handleDelete} className="self-end">
          <ImBin size={25} className="text-red-400" />
        </button>
      </div>
      <p>
        {show ? (
          <>
            <h4 className="font-bold my-4">Description:</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              voluptatibus consequatur delectus deleniti odit accusamus
              consectetur voluptatem quam suscipit aspernatur modi asperiores,
              inventore est perferendis temporibus corporis vero, deserunt
              pariatur.
            </p>
          </>
        ) : (
          ""
        )}
      </p>
      <div className="flex justify-between items-center">
        <p className="font-semibold mt-8">
          Status: {task.completed ? "Completed" : "Incomplete"}
        </p>
        <button onClick={handleEdit} className="self-end">
          <FaRegEdit size={25} className="text-red-400" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
