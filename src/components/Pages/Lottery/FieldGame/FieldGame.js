import React from 'react';
import '../../../Vidget/SlickSlider/slick.css';
import { Drum } from "../../../Vidget/SlickSlider/Drum";


const FieldGame  = (props) => {
    return (
        <div className="sliderWrapper">
            <div className="left_arrow_box">Победитель</div>
                <Drum speed={props.speed}
                      autoplay={props.autoplay}
                />
            <div className="right_arrow_box">Победитель</div>
        </div>

    );
};

export default FieldGame
