import React, {useState, useEffect} from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import BurgerMenuIcon from "../BurgerMenuIcon/BurgerMenuIcon";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import '../../_colors.scss';
import './App.scss';

window.__forceSmoothScrollPolyfill__ = true;
smoothscroll.polyfill();

function App() {
    const [language, setLanguage] = useState('en');
    const [dTheme, setDTheme] = useState(false);
    const [openedMenu, setMenu] = useState(false);

    useEffect(() => {
        const lang = !localStorage.getItem('lang') ? 'en' : localStorage.getItem('lang');
        const theme = JSON.parse(localStorage.getItem('theme'));
        setDTheme(theme);
        setLanguage(lang);
    }, [])

    useEffect(() => {
        if (openedMenu) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }, [openedMenu])

    let CONTENT = require(`../../data/${language}.lang.json`);

    const themeChange = (value) => {
        localStorage.setItem('theme', value);
        setDTheme(value);
    };

    const langChange = (value) => {
        if (!(localStorage.getItem('lang') === value)) {
            localStorage.setItem('lang', value);
        }
        setLanguage(value);
    };

    return (
        <div className={dTheme ? 'darkTheme app' : 'app'}>
            <BurgerMenuIcon click={() => setMenu(!openedMenu)} menu={openedMenu}/>
            <BurgerMenu open={openedMenu} content={CONTENT.HEADER} theme={dTheme} setTheme={themeChange} lang={language}
                        setLang={langChange} setMenu={setMenu}/>
            <Header theme={dTheme} setTheme={themeChange} content={CONTENT.HEADER}/>
            <Home lang={language} setLang={langChange} content={CONTENT.HOME}/>
            <About content={CONTENT.ABOUT}/>
            <Skills content={CONTENT.SKILLS}/>
            <Portfolio content={CONTENT.PORTFOLIO}/>
            <Contact content={CONTENT.CONTACTS}/>
        </div>
    );
};

export default App;
