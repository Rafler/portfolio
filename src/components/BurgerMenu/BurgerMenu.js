import React from 'react';

import ModeChange from "../ModeChange/ModeChange";
import LanguageChange from "../LanguageChange/LanguageChange";

import './BurgerMenu.scss'

const BurgerMenu = ({open, content, theme, setTheme, setLang, lang, setMenu}) => {
    const scrollTo = (elem) => {
        setMenu(false);
        document.querySelector(elem).scrollIntoView({behavior: 'smooth'});
    };

    return (
        <section className={open ? 'burger-menu open' : 'burger-menu'}>
            <nav className="burger-menu__nav">
                <a onClick={() => scrollTo('#home')} className="burger-menu__nav__link">{content.HOME}</a>
                <a onClick={() => scrollTo("#about")} className="burger-menu__nav__link">{content.ABOUT}</a>
                <a onClick={() => scrollTo('#skills')} className="burger-menu__nav__link">{content.SKILLS}</a>
                <a onClick={() => scrollTo('#portfolio')} className="burger-menu__nav__link">{content.PORTFOLIO}</a>
                <a onClick={() => scrollTo('#contact')} className="burger-menu__nav__link">{content.CONTACTS}</a>
            </nav>
            <ModeChange setTheme={setTheme} theme={theme}/>
            <LanguageChange lang={lang} setLang={setLang}/>
        </section>
    );
};

export default BurgerMenu;
