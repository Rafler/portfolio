import React from 'react';

import ModeChange from "../ModeChange/ModeChange";

import './Header.scss';

const Header = ({theme, setTheme, content}) => {
    const scrollTo = (elem) => {
        document.querySelector(elem).scrollIntoView({behavior: 'smooth'});
    };

    return (
        <>
            <header className="main-header" id="home">
                <a onClick={() => scrollTo('#home')} className="main-header__link">{content.HOME}</a>
                <a onClick={() => scrollTo("#about")} className="main-header__link">{content.ABOUT}</a>
                <a onClick={() => scrollTo('#skills')} className="main-header__link">{content.SKILLS}</a>
                <a onClick={() => scrollTo('#portfolio')} className="main-header__link">{content.PORTFOLIO}</a>
                <a onClick={() => scrollTo('#contact')} className="main-header__link">{content.CONTACTS}</a>
                <ModeChange theme={theme} setTheme={setTheme}/>
            </header>
        </>
    );
};

export default Header;
