import React, { useState, useEffect, useContext } from "react";
import Calendar from "../Calendar/Calendar.jsx";

import {
  PopBrowseWrapper,
  PopBrowseContainer,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTtl,
  PopBrowseStatus,
  StatusP,
  StatusThemes,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  ThemeDownCategories,
  CategoriesP,
  PopBrowseBtn,
  BtnGroup,
  BtnBrowseEdit,
  BtnBrowseDelete,
  BtnBrowseClose,
  PopBrowseLabel,
} from "./PopBrowse.styled.js";
import { TaskContext } from "../../context/TaskContext.js";

const statuses = [
  "Без статуса",
  "Нужно сделать",
  "В работе",
  "Тестирование",
  "Готово",
];

const PopBrowse = ({ task, onClose, onDelete }) => {
  const [error, setError] = useState("");
  const { updateTask } = useContext(TaskContext);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description || "");
      setStatus(task.status || "Без статуса");
      setSelectedDate(task.date ? new Date(task.date) : null);
      setIsEditing(false);
    }
  }, [task]);

  if (!task) return null;

  const handleSave = async () => {
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (!trimmedTitle || !trimmedDescription) {
      setError("Название и описание задачи не могут быть пустыми.");
      return;
    }

    const updatedTask = {
      ...task,
      title: trimmedTitle,
      description: trimmedDescription,
      status,
      date: selectedDate ? selectedDate.toISOString() : null,
    };

    try {
      await updateTask(task._id, updatedTask);
      setIsEditing(false);
      setError("");
    } catch (err) {
      setError(
        "Не удалось сохранить изменения. Пожалуйста, попробуйте ещё раз." +
          err.message
      );
    }
  };
  return (
    <PopBrowseWrapper className="pop-browse" id="popBrowse">
      <PopBrowseContainer className="pop-browse__container">
        <PopBrowseBlock className="pop-browse__block">
          <PopBrowseContent className="pop-browse__content">
            <PopBrowseTopBlock
              className="pop-browse__top-block"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {isEditing ? (
                <input
                  className="popbrowse__input-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                  style={{
                    flex: 1,
                    marginRight: "15px",
                    border: "none",
                    outline: "none",
                    fontSize: "20px",
                    fontWeight: "700",
                  }}
                />
              ) : (
                <PopBrowseTtl
                  className="pop-browse__ttl"
                  style={{
                    flex: 1,
                    marginRight: "15px",
                    border: "none",
                    outline: "none",
                    fontSize: "20px",
                    fontWeight: "700",
                    overflow: "hidden",
                    textOverflow: "ellipsis", // при необходимости
                    whiteSpace: "nowrap", // или normal для переноса
                  }}
                >
                  {title}
                </PopBrowseTtl>
              )}

              <div
                className={`categories__theme theme-top ${task.themeClass} _active-category`}
                style={{ opacity: 1, whiteSpace: "nowrap" }}
              >
                <p className={task.themeClass} style={{ margin: 0 }}>
                  {task.theme}
                </p>
              </div>
            </PopBrowseTopBlock>

            <PopBrowseStatus className="pop-browse__status status">
              <StatusP className="status__p subttl">Статус</StatusP>
              {isEditing ? (
                <StatusThemes className="status__themes">
                  {statuses.map((s) => (
                    <div
                      key={s}
                      className={`status__theme ${status === s ? "_gray" : ""}`}
                      onClick={() => setStatus(s)}
                      style={{
                        cursor: "pointer",
                        backgroundColor: status === s ? "#94a6be" : "#fff",
                        color: status === s ? "#fff" : "#94a6be",
                      }}
                    >
                      <p
                        className={status === s ? "_gray" : ""}
                        style={{ margin: 0 }}
                      >
                        {s}
                      </p>
                    </div>
                  ))}
                </StatusThemes>
              ) : (
                <StatusThemes className="status__themes">
                  {statuses.map((s) => (
                    <div
                      key={s}
                      className={`status__theme ${
                        status === s ? "_gray" : "_hide"
                      }`}
                    >
                      <p className={status === s ? "_gray" : ""}>{s}</p>
                    </div>
                  ))}
                </StatusThemes>
              )}
            </PopBrowseStatus>

            <PopBrowseWrap className="pop-browse__wrap">
              <PopBrowseForm
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <FormBrowseBlock className="form-browse__block">
                  <PopBrowseLabel htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </PopBrowseLabel>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly={!isEditing}
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </FormBrowseBlock>
              </PopBrowseForm>

              <div className="calendar__period">
                <Calendar
                  selectedDate={selectedDate}
                  onSelectDate={(dateIso) => setSelectedDate(new Date(dateIso))}
                />
              </div>
            </PopBrowseWrap>

            <ThemeDownCategories className="theme-down__categories theme-down">
              <CategoriesP className="categories__p subttl">
                Категория
              </CategoriesP>
              <div
                className={`categories__theme ${task.themeClass} _active-category`}
              >
                <p className={task.themeClass}>{task.theme}</p>
              </div>
            </ThemeDownCategories>

            <PopBrowseBtn className="pop-browse__btn-browse">
              <BtnGroup className="btn-group">
                {isEditing ? (
                  <>
                    <BtnBrowseEdit
                      className="btn-browse__edit _btn-bor _hover03"
                      onClick={handleSave}
                    >
                      Сохранить
                    </BtnBrowseEdit>
                    <BtnBrowseClose
                      className="btn-browse__close _btn-bg _hover01"
                      onClick={() => {
                        setTitle(task.title);
                        setDescription(task.description || "");
                        setStatus(task.status || "Без статуса");
                        setSelectedDate(task.date ? new Date(task.date) : null);
                        setIsEditing(false);
                        setError("");
                      }}
                    >
                      Отмена
                    </BtnBrowseClose>
                  </>
                ) : (
                  <BtnBrowseEdit
                    className="btn-browse__edit _btn-bor _hover03"
                    onClick={() => setIsEditing(true)}
                  >
                    Редактировать задачу
                  </BtnBrowseEdit>
                )}
                <BtnBrowseDelete
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={onDelete}
                >
                  Удалить задачу
                </BtnBrowseDelete>
              </BtnGroup>
              {!isEditing && (
                <BtnBrowseClose
                  className="btn-browse__close _btn-bg _hover01"
                  onClick={onClose}
                >
                  Закрыть
                </BtnBrowseClose>
              )}
              {error && (
                <p style={{ color: "red", marginBottom: "10px" }}>{error}</p>
              )}
            </PopBrowseBtn>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
};

export default PopBrowse;
