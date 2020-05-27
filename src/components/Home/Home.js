import React from 'react';

import LanguageChange from "../LanguageChange/LanguageChange";

import './Home.scss';

const Home = ({lang, setLang, content}) => {
    return (
        <section className="home">
            <div className="home__info">
                <h1 className="home__info__title">{content.TITLE}</h1>
                <p className="home__info__description">{content.DESCRIPTION}</p>
                <LanguageChange lang={lang} setLang={setLang}/>
            </div>
            <img src="/assets/images/person.jpg" alt="photo" className="home__image"/>
        </section>
    );
};

export default Home;
