import React from 'react';

import './Contact.scss'

const Contact = ({content}) => {
    return (
        <section className="contact" id="contact">
            <h2 className="title">{content.TITLE}</h2>
            <p className="description">{content.DESCRIPTION}</p>
            <a className="contact__button" href="mailto:amuronyk@gmail.com">{content.BUTTON}</a>
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
