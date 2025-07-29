import {
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardThemeText,
  CardButton,
  CardContent,
  CardTitle,
  CardDate,
  CardDateText,
} from "../Card/Card.styled";

function CardSkeleton() {
  return (
    <CardsItem>
      <CardsCard>
        <CardGroup>

          <CardTheme>
            <CardThemeText>
              <svg
                width="82"
                height="20"
                viewBox="0 0 82 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="paint_linear_36_230_0"
                    x1="-5.18"
                    y1="9.79"
                    x2="89.77"
                    y2="9.79"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C1CDDC" />
                    <stop offset="0.458333" stopColor="#E9EEF7" />
                    <stop offset="0.973958" stopColor="#C1CDDC" />
                  </linearGradient>
                </defs>
                <rect
                  rx="10"
                  width="82"
                  height="20"
                  fill="url(#paint_linear_36_230_0)"
                />
              </svg>
            </CardThemeText>
          </CardTheme>


          <CardButton>
            <svg
              width="18"
              height="4"
              viewBox="0 0 18 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="paint_linear_36_226_0"
                  x1="-1.136843"
                  y1="1.958334"
                  x2="19.705263"
                  y2="1.958334"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C1CDDC" />
                  <stop offset="0.458333" stopColor="#E9EEF7" />
                  <stop offset="0.973958" stopColor="#C1CDDC" />
                </linearGradient>
              </defs>
              <rect
                width="18"
                height="4"
                fill="url(#paint_linear_36_226_0)"
              />
            </svg>
          </CardButton>
        </CardGroup>

        <CardContent>

          <CardTitle>
            <svg
              width="113"
              height="13"
              viewBox="0 0 113 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="paint_linear_36_224_0"
                  x1="-7.136845"
                  y1="6.364594"
                  x2="123.705261"
                  y2="6.364594"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C1CDDC" />
                  <stop offset="0.458333" stopColor="#E9EEF7" />
                  <stop offset="0.973958" stopColor="#C1CDDC" />
                </linearGradient>
              </defs>
              <rect
                width="113"
                height="13"
                fill="url(#paint_linear_36_224_0)"
              />
            </svg>
          </CardTitle>


          <CardDate>
            <CardDateText>
              <svg
                width="58"
                height="13"
                viewBox="0 0 58 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient
                    id="paint_linear_36_225_0"
                    x1="-3.663158"
                    y1="6.364586"
                    x2="63.494747"
                    y2="6.364586"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C1CDDC" />
                    <stop offset="0.458333" stopColor="#E9EEF7" />
                    <stop offset="0.973958" stopColor="#C1CDDC" />
                  </linearGradient>
                </defs>
                <rect
                  width="58"
                  height="13"
                  fill="url(#paint_linear_36_225_0)"
                />
              </svg>
            </CardDateText>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
}

export default CardSkeleton;
