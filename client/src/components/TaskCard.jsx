/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
export function TaskCard({ task }) {
  const navigate = useNavigate();
  return (
    <div
    className="bg-zinc-800 p-3 hover:bg-slate-500 hover:cursor-pointer"
      onClick={() => {
        navigate("/tasks/" + task.id);
        console.log("clicked");
      }}
    >
      <h1 className="font-bold uppercase text-center">Task {task.id}</h1>
      <div className="py-3 px-2">
        <h1 className="font-bold uppercase">{task.title}</h1>
        <p className="text-slate-400">{task.description}</p>
      </div>
    </div>
  );
}
