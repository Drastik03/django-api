import { useEffect, useState } from "react";
import { getTaskAll } from "../api/task.api";
import { TaskCard } from "./TaskCard";
export function TaskList() {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
        async function loadTask(){
            const res = await getTaskAll()
            setTask(res.data)
        }
        loadTask()
    }, [])
  return <div className="grid grid-cols-3 gap-3 max-sm:flex max-sm:flex-col max-sm:mr-5 max-sm:ml-5">
        {tasks.map((
            task => (
                <TaskCard key={task.id} task={task}/>
            )
        ))}
  </div>
}
