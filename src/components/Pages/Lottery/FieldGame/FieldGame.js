import React from 'react';
import './components/SlickSlider/slick.css';
import { Drum } from "./components/SlickSlider/Drum";


const FieldGame  = (props) => {
    const {speed, autoplay} = props;

    return (
        <div className="sliderWrapper">
            <div className="left_arrow_box"><span>Победитель</span></div>
                <Drum speed={speed}
                      autoplay={autoplay}
                />
            <div className="right_arrow_box"><span>Победитель</span></div>
        </div>

    );
};

export default FieldGame
