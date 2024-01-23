import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import { Navigation } from "./components/Navigation";
import { Toaster } from "react-hot-toast";
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container mx-auto">
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/tasks/create" element={<TaskFormPage />} />
            <Route path="/tasks/:id" element={<TaskFormPage />} />
          </Routes>
          <Toaster></Toaster>
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;
