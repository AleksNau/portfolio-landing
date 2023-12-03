
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.scss";

import react from "./images/react.png";
import node from "./images/node.png";
import sass from "./images/sass.png";
import redux from "./images/redux.png";
import html5 from "./images/html5.png";
import postman from "./images/postman.svg";
import photoshop from "./images/adobePhoto.jpg";

import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoSlider extends Component {
    render() {
        var settings = {
            centerMode: true,
            dots: true,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            focusOnSelect:true,
            pauseOnFocus:true,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true,
                        pauseOnHover: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1280,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        pauseOnHover: true,
                        focusOnSelect:true,
                        pauseOnFocus:true,
                        autoplay: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        pauseOnHover: true,
                        focusOnSelect:true,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        focusOnSelect:true
                    }
                }
            ]
        };
        return (
                <Slider {...settings}>
                    <div className={'slider-block'} >
                        <img src={react} alt="react"/>
                    </div>
                    <div className={'slider-block'}>
                        <img src={node} alt="node"/>
                    </div>
                    <div className={'slider-block'}>
                        <img src={sass} alt="sass"/>
                    </div>
                    <div className={'slider-block'}>
                        <img src={html5} alt="html5"/>
                    </div>
                    <div className={'slider-block'}>
                        <img src={redux} alt="redux"/>
                    </div>
                    <div className={'slider-block'}>
                        <img src={postman} alt="postman"/>
                    </div>
                    <div className={'slider-block'}>
                        <img src={photoshop} alt="photoshop"/>
                    </div>
                </Slider>
        );
    }
}
