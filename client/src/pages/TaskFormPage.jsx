import { useForm } from "react-hook-form";
import { createTasks, deleteTask, updateTask, getTask } from "../api/task.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";


function TaskFormPage() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
} = useForm();
const navigate = useNavigate();
const params = useParams();

const onSubmit = async (data) => {
    if (params.id) {
        await updateTask(params.id,data);
        console.log("actualizando");
        toast.success("Tarea actualizada",{
            position:"bottom-right",
            duration:3000,
            style:{
                backgroundColor:"#101010",
                color:"#fff"
            }
        })
    } else {
      await createTasks(data);
      toast.success("Tarea creada",{
        position:"bottom-right",
        duration:3000,
        style:{
            backgroundColor:"#101010",
            color:"#fff"
        }
    })
    }
    navigate("/tasks");
  };

  useEffect(()=>{
    async function loadTask(){
        if(params.id){
            const res = await getTask(params.id)
            setValue('title',res.data.title)
            setValue('description',res.data.description)
            console.log(res)
        }
    }
    loadTask()
  },[])
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-3xl text-center font-bold uppercase mb-4">Create new task</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="bg-zinc-700 p-3 mb-4 rounded-lg block w-full"
          type="text"
          placeholder="Title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>Area requerida</span>}
        <textarea
          className="bg-zinc-700 p-3 mb-4 rounded-lg block w-full"
          rows="3"
          placeholder="Description"
          {...register("description", { required: true })}
        ></textarea>
        {errors.title && <span>Area requerida</span>}

        <button className="bg-indigo-400 hover:bg-indigo-500 px-3 py-2 mt-3 w-full rounded-lg" type="submit">Save</button>
      </form>
      {params.id && (
        <button
          className="bg-red-600 hover:bg-red-500 px-3 py-2 mt-3 w-full rounded-lg"
          onClick={async () => {
            const accepted = window.confirm("Estas seguro?");
            if (accepted) {
              await deleteTask(params.id);
              toast.success("Tarea eliminada",{
                position:"bottom-right",
                duration:3000,
                style:{
                    backgroundColor:"#101010",
                    color:"#fff"
                }
            })
              navigate("/tasks");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default TaskFormPage;
