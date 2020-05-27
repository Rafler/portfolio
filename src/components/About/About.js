import React from 'react';

import './About.scss'

const About = ({content}) => {
    return (
        <section className="about gray" id="about">
            <h2 className="title">{content.TITLE}</h2>
            <p className="description">{content.DESCRIPTION}</p>
        </section>
    );
};

export default About;
