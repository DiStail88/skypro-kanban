import { Link, useNavigate } from "react-router-dom"
import {
    PopExitWrapper,
    PopExitContainer,
    PopExitBlock,
    PopExitTtl,
    PopExitFormGroup,
    PopExitYes,
    PopExitNo,
    PopExitForm
} from "./PopExit.styled.js";

const PopExit = ({setIsAuth}) => {
    const navigate = useNavigate();
    const handleExitYes = (e) => {
        e.preventDefault();
        setIsAuth(false)
        navigate("/login");
    };

    const handleExitNo = (e) => {
    e.preventDefault();
    navigate("/");
    };

    return (
    <PopExitWrapper id="popExit">
        <PopExitContainer>
            <PopExitBlock className="pop-exit__block">
                <PopExitTtl className="pop-exit__ttl">
                    Выйти из аккаунта?
                </PopExitTtl>
                <PopExitForm>
                    <PopExitFormGroup className="pop-exit__form-group">
                        <PopExitYes onClick={handleExitYes}>Да, выйти</PopExitYes>
                        <PopExitNo onClick={handleExitNo}>Нет, остаться</PopExitNo>
                    </PopExitFormGroup>
                </PopExitForm>
            </PopExitBlock>
        </PopExitContainer>
    </PopExitWrapper>
    );
};

export default PopExit;