import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import PopBrowse from "../../components/PopBrowse/PopBrowse";
import { TaskContext } from "../../context/TaskContext";

const PopBrowsePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { tasks, loading, error, deleteTask } = useContext(TaskContext); 

  const task = tasks.find((task) => String(task._id) === id);

  const handleCloseModal = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    if (window.confirm("Вы действительно хотите удалить задачу?")) {
      deleteTask(id);
      handleCloseModal();
    }
  };

  if (loading) {
    return <div>Загрузка задачи...</div>;
  }

  if (error) {
    return <div>Ошибка загрузки: {error}</div>;
  }

  if (!task) {
    console.warn("Задача не найдена по ID:", id);
    return <div>Задача не найдена</div>;
  }

  return <PopBrowse task={task} onClose={handleCloseModal} onDelete={handleDelete} />;
};

export default PopBrowsePage;
