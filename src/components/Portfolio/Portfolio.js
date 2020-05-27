import React, {useRef} from 'react';
import Slider from "react-slick";

import data from '../../data/portfolio.json'
import './Portfolio.scss'

const Portfolio = ({content}) => {
    const slider = useRef(null);

    const settings = {
        dots: window.innerWidth > 768,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        lazyLoad: true,
        adaptiveHeight: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        className: 'slides',
    };

    return (
        <section className="portfolio gray" id="portfolio">
            <h2 className="title">{content.TITLE}</h2>
            <div className="wrapper">
                <button className="arrow left" onClick={() => slider.current.slickPrev()}/>
                <Slider ref={slider} {...settings}>
                    {
                        data.map(el =>
                            <div className="portfolio__slide">
                                <a href={el.link} target="_blank">
                                    <img src={process.env.PUBLIC_URL + el.href} alt={el.title} className="portfolio__slide__image"/>
                                </a>
                                <a target="_blank" className="portfolio__slide__title" href={el.link}>{el.title}</a>
                            </div>
                        )
                    }
                </Slider>
                <button className="arrow right" onClick={() => slider.current.slickNext()}/>
            </div>
        </section>
    );
};

export default Portfolio;
