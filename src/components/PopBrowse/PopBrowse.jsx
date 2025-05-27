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
    BtnBrowseClose
} from "./PopBrowse.styled.js";

const PopBrowse = ({ task, onClose }) => {
  if (!task) return null;

  const statuses = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <PopBrowseWrapper className="pop-browse" id="popBrowse">
      <PopBrowseContainer className="pop-browse__container">
        <PopBrowseBlock className="pop-browse__block">
          <PopBrowseContent className="pop-browse__content">
            <PopBrowseTopBlock className="pop-browse__top-block">
              <PopBrowseTtl className="pop-browse__ttl">{task.title}</PopBrowseTtl>
              <div
                className={`categories__theme theme-top ${task.themeClass} _active-category`}
              >
                <p className={task.themeClass}>{task.theme}</p>
              </div>
            </PopBrowseTopBlock>

            <PopBrowseStatus className="pop-browse__status status">
              <StatusP className="status__p subttl">Статус</StatusP>
              <StatusThemes className="status__themes">
                {statuses.map((status) => (
                  <div
                    key={status}
                    className={`status__theme ${
                      task.status === status ? "_gray" : "_hide"
                    }`}
                  >
                    <p className={task.status === status ? "_gray" : ""}>
                      {status}
                    </p>
                  </div>
                ))}
              </StatusThemes>
            </PopBrowseStatus>

            <PopBrowseWrap className="pop-browse__wrap">
              <PopBrowseForm
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#"
              >
                <FormBrowseBlock className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                    value={task.description || ""}
                  ></textarea>
                </FormBrowseBlock>
              </PopBrowseForm>

              <div className="calendar__period">
                <p className="calendar__p date-end">
                  Срок исполнения:{" "}
                  <span className="date-control">{task.date}</span>
                </p>
              </div>
            </PopBrowseWrap>

            <ThemeDownCategories className="theme-down__categories theme-down">
              <CategoriesP className="categories__p subttl">Категория</CategoriesP>
              <div
                className={`categories__theme ${task.themeClass} _active-category`}
              >
                <p className={task.themeClass}>{task.theme}</p>
              </div>
            </ThemeDownCategories>

            <PopBrowseBtn className="pop-browse__btn-browse">
              <BtnGroup className="btn-group">
                <BtnBrowseEdit className="btn-browse__edit _btn-bor _hover03">
                  Редактировать задачу
                </BtnBrowseEdit>
                <BtnBrowseDelete className="btn-browse__delete _btn-bor _hover03">
                  Удалить задачу
                </BtnBrowseDelete>
              </BtnGroup>
              <BtnBrowseClose
                className="btn-browse__close _btn-bg _hover01"
                onClick={onClose}
              >
                Закрыть
              </BtnBrowseClose>
            </PopBrowseBtn>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </PopBrowseWrapper>
  );
};

export default PopBrowse;
