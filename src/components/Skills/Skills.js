import React, {useRef} from 'react';
import Slider from "react-slick";

import data from '../../data/skills.json'
import './Skills.scss'

const Skills = ({content}) => {
    const slider = useRef(null);
    const slidesToShow = Math.round(window.innerWidth / 320)

    const settings = {
        dots: window.innerWidth > 768,
        infinite: true,
        speed: 1000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        autoplay: true,
        lazyLoad: true,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        className: 'slides',
    };

    return (
        <section className="skills" id="skills">
            <h2 className="title">{content.TITLE}</h2>
            <p className="description">{content.DESCRIPTION}</p>
            <div className="wrapper">
                <button className="arrow left" onClick={() => slider.current.slickPrev()}/>
                <Slider ref={slider} {...settings}>
                    {
                        data.map(el =>
                            <div className="skills__slide">
                                <img src={el.href} alt="logo" className="skills__slide__image"/>
                                <div className="star-rating" title={el.rate / 5}/>
                            </div>
                        )
                    }
                </Slider>
                <button className="arrow right" onClick={() => slider.current.slickNext()}/>
            </div>
        </section>
    );
};

export default Skills;
