import axios from "axios";
const TaskApi = axios.create({
    baseURL: "http://127.0.0.1:8000/tasks/api/v1/tasks/"
})
export const getTaskAll = () => {
    return TaskApi.get("/")
}

export const getTask = (task_id) => {
    return TaskApi.get("/"+task_id+"/")
}

export const createTasks = ((task) => {
    return TaskApi.post("/", task)
})

export const deleteTask = ((task_id) => {
    return TaskApi.delete("/"+task_id)
})

export const updateTask = ((task_id,task) => {
    return TaskApi.put("/"+task_id+"/", task)
})