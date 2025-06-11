import { useNavigate } from "react-router-dom";

import {
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardThemeText,
  CardButton,
  CardButtonLine,
  CardContent,
  CardTitle,
  CardDate,
  CardDateText,
} from "./Card.styled.js";

const Card = ({ task }) => {
  const navigate = useNavigate();

  if (!task) return null;

  const handleCard = (e) => {
    e.preventDefault();
    navigate(`/card/${task._id}`);
  };
  return (
    <CardsItem>
      <CardsCard onClick={handleCard}>
        <CardGroup>
          <CardTheme $themeClass={task.themeClass}>
            <CardThemeText $themeClass={task.themeClass}>
              {task.theme}
            </CardThemeText>
          </CardTheme>
          <CardButton>
            <CardButtonLine />
            <CardButtonLine />
            <CardButtonLine />
          </CardButton>
        </CardGroup>
        <CardContent>
            <CardTitle>{task.title}</CardTitle>
          <CardDate>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="clip1_119">
                  <rect
                    rx="0"
                    width="12"
                    height="12"
                    transform="translate(0.5 0.5)"
                    fill="white"
                    fillOpacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                rx="0"
                width="12"
                height="12"
                transform="translate(0.5 0.5)"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <g clipPath="url(#clip1_119)">
                <path
                  d="M10.56 2.03C11.23 2.03 11.78 2.57 11.78 3.25L11.78 10.56C11.78 11.23 11.23 11.78 10.56 11.78L2.43 11.78C1.76 11.78 1.21 11.23 1.21 10.56L1.21 3.25C1.21 2.57 1.76 2.03 2.43 2.03L10.56 2.03Z"
                  stroke="#94A6BE"
                  strokeOpacity="1"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.25 2.03L3.25 1.21L3.25 2.03ZM9.75 2.03L9.75 1.21L9.75 2.03ZM11.78 4.06L1.21 4.06"
                  stroke="#94A6BE"
                  strokeOpacity="1"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </g>
            </svg>

            <CardDateText>{task.date}</CardDateText>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
};

export default Card;
