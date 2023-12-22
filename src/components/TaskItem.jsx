import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { ImBin } from "react-icons/im";
import { toast } from "react-toastify";

function TaskItem({ task }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    try {
      dispatch(deleteTask(task.id));
      toast.success("Task deleted successfully");
    } catch {
      toast.error("Something went wrong, Try again");
    }
  };

  return (
    <div className="max-w-96 py-4 px-4 rounded shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-bold text-3xl uppercase text-center">
          {task.title}
        </h2>
        <button onClick={handleDelete} className="self-end">
          <ImBin size={25} className="text-red-400" />
        </button>
      </div>
      <p>{task.description}</p>
      <p className="font-semibold mt-8">
        Status: {task.completed ? "Completed" : "Incomplete"}
      </p>
    </div>
  );
}

export default TaskItem;
