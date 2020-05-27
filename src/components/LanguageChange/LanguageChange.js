import React from 'react';

import './LanguageChange.scss'

const LanguageChange = ({lang, setLang}) => {
    const checkLang = (language) => {
        return language === lang;
    };

    const changeLanguage = (newLang) => {
        if (!checkLang(newLang)) {
            setLang(newLang);
        }
    };

    const activeLang = (language) => {
        return checkLang(language) ? '' : 'unactive'
    }

    return (
        <div className="language-change">
            <span onClick={() => changeLanguage('ua')} className={activeLang('ua')}>UA</span> | <span
            onClick={() => changeLanguage('en')} className={activeLang('en')}>ENG</span>
        </div>
    );
};

export default LanguageChange;
