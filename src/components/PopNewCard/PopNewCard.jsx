import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Calendar from "../Calendar/Calendar.jsx";
import {
  PopNewCardWrapper,
  PopNewCardContainer,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTtl,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewLabel,
  FormNewInput,
  FormNewArea,
  PopNewCardCategories,
  CategoriesP,
  CategoriesThemes,
  CategoriesThemeOrange,
  Orange,
  CategoriesThemeGreen,
  Green,
  CategoriesThemePurple,
  Purple,
  PopNewCardButton,
} from "./PopNewCard.styled.js";

import { TaskContext } from "../../context/TaskContext";

const PopNewCard = () => {
  const navigate = useNavigate();
  const { addTask } = useContext(TaskContext);

  const [form, setForm] = useState({
    name: "",
    text: "",
    topic: "Web Design",
    date: "",
  });

  const [loading, setLoading] = useState(false);

  const handleClose = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectCategory = (topic) => {
    setForm((prev) => ({ ...prev, topic }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const taskData = {
        title: form.name.trim() || "Новая задача",
        description: form.text.trim() || "",
        topic: form.topic || "Research",
        date: form.date || new Date().toISOString(),
        status: "Без статуса",
      };

      await addTask(taskData);
      navigate("/");
    } catch (err) {
      alert("Ошибка при добавлении задачи: " + err.message);
    }
  };

  return (
    <PopNewCardWrapper className="pop-new-card" id="popNewCard">
      <PopNewCardContainer className="pop-new-card__container">
        <PopNewCardBlock className="pop-new-card__block">
          <PopNewCardContent className="pop-new-card__content">
            <PopNewCardTtl className="pop-new-card__ttl">
              Создание задачи
            </PopNewCardTtl>
            <PopNewCardClose
              href="#"
              onClick={handleClose}
              className="pop-new-card__close"
            >
              &#10006;
            </PopNewCardClose>
            <PopNewCardWrap className="pop-new-card__wrap">
              <PopNewCardForm
                className="pop-new-card__form form-new"
                id="formNewCard"
              >
                <FormNewBlock className="form-new__block">
                  <FormNewLabel htmlFor="formTitle" className="subttl">
                    Название задачи
                  </FormNewLabel>
                  <FormNewInput
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>
                <FormNewBlock className="form-new__block">
                  <FormNewLabel htmlFor="textArea" className="subttl">
                    Описание задачи
                  </FormNewLabel>
                  <FormNewArea
                    as="textarea"
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    value={form.text}
                    onChange={handleChange}
                    placeholder="Введите описание задачи..."
                  />
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar
                onSelectDate={(date) => setForm((prev) => ({ ...prev, date }))}
              />
            </PopNewCardWrap>

            <PopNewCardCategories className="pop-new-card__categories categories">
              <CategoriesP className="categories__p subttl">
                Категория
              </CategoriesP>
              <CategoriesThemes className="categories__themes">
                <CategoriesThemeOrange
                  className={`categories__theme _orange ${
                    form.topic === "Web Design" ? "_active-category" : ""
                  }`}
                  onClick={() => handleSelectCategory("Web Design")}
                >
                  <Orange>Web Design</Orange>
                </CategoriesThemeOrange>

                <CategoriesThemeGreen
                  className={`categories__theme _green ${
                    form.topic === "Research" ? "_active-category" : ""
                  }`}
                  onClick={() => handleSelectCategory("Research")}
                >
                  <Green>Research</Green>
                </CategoriesThemeGreen>

                <CategoriesThemePurple
                  className={`categories__theme _purple ${
                    form.topic === "Copywriting" ? "_active-category" : ""
                  }`}
                  onClick={() => handleSelectCategory("Copywriting")}
                >
                  <Purple>Copywriting</Purple>
                </CategoriesThemePurple>
              </CategoriesThemes>
            </PopNewCardCategories>

            <PopNewCardButton
              className="form-new__create _hover01"
              id="btnCreate"
              onClick={handleSubmit}
              disabled={loading} 
            >
              {loading ? "Загрузка..." : "Создать задачу"}
            </PopNewCardButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </PopNewCardWrapper>
  );
};

export default PopNewCard;
