import React from 'react';
import './slick.css';
import { Drum } from "./Drum";


const FieldGame  = () => {
    return (
        <div className="sliderWrapper">
            <div className="left_arrow_box">Победитель</div>
                <Drum/>
            <div className="right_arrow_box">Победитель</div>
        </div>

    );
};

export default FieldGame
