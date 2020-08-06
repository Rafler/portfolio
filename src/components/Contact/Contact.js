import React from 'react';

import cv from '../../data/cv.pdf';
import './Contact.scss'

const Contact = ({content}) => {
    return (
        <section className="contact" id="contact">
            <h2 className="title">{content.TITLE}</h2>
            <p className="description">{content.DESCRIPTION}</p>
            <div className="contact__buttons">
                <button className="contact__button"><a className="contact__button__text" href="mailto:amuronyk@gmail.com">{content.BUTTON.MAIL}</a></button>
                <button className="contact__button reversed"><a className="contact__button__text " href={cv} download="CV Andrii Myroniuk">{content.BUTTON.CV}</a></button>
            </div>
            <div className="contact__media">
                <a target="_blank" href="https://www.instagram.com/andrii.lv/" className="contact__media__link inst"/>
                <a target="_blank" href="https://www.linkedin.com/in/andrii-myroniuk-573921155/"
                   className="contact__media__link linkedin"/>
            </div>
            <span className="contact__message">{content.MESSAGE}</span>
        </section>
    );
};

export default Contact;
