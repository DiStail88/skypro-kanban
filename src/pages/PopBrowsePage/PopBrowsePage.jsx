import { useNavigate, useParams } from "react-router-dom";
import tasks from "../../data";
import PopBrowse from "../../components/PopBrowse/PopBrowse";

const PopBrowsePage = () => {
  const { id } = useParams(); // Получаем ID из URL
  const navigate = useNavigate();

  const task = tasks.find((task) => String(task.id) === id);

  const handleCloseModal = () => {
    navigate(-1); 
  };


  if (!task) return null;

  return (
    <PopBrowse task={task} onClose={handleCloseModal} />
  );
};

export default PopBrowsePage;
