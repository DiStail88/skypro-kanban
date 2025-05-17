import React, { useState, useEffect, useRef } from 'react';

const Header = () => {

    const [showUserInfo, setShowUserInfo] = useState(false);
    const popupRef = useRef(null);
    const nameRef = useRef(null);

    const headerPopup = () => {
        setShowUserInfo(prev => !prev);
    };

    useEffect(() => {
        const headerClickPopup = (e) => {
            if (nameRef.current.contains(e.target)) { 
                return;
            } else if (popupRef.current && !popupRef.current.contains(e.target)) {
                setShowUserInfo(false); 
            }
        };
    
        document.addEventListener('mousedown', headerClickPopup);
    
        return () => {
            document.removeEventListener('mousedown', headerClickPopup);
        };
    }, []);

    return (
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo _show _light">
                        <a href="" target="_self"><img src="images/logo.png" alt="logo"></img></a>
                    </div>
                    <div className="header__logo _dark">
                        <a href="" target="_self"><img src="images/logo_dark.png" alt="logo"></img></a>
                    </div>
                    <nav className="header__nav">
                        <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
                        <a href="#user-set-target" ref={nameRef} className="header__user _hover02"
                        onClick = {event => {
                            event.preventDefault();
                            headerPopup();
                        }}
                        >
                        Ivan Ivanov
                        </a>
                        <div ref={popupRef} className={`header__pop-user-set pop-user-set ${showUserInfo ? 'visible' : 'hidden'}`} id="user-set-target">
                            <p className="pop-user-set__name">Ivan Ivanov</p>
                            <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                            <div className="pop-user-set__theme">
                                <p>Темная тема</p>
                                <input type="checkbox" className="checkbox" name="checkbox"></input>
                            </div>
                            <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
                        </div>
                    </nav>					
                </div>
            </div>			
        </header>
    );
};

export default Header;