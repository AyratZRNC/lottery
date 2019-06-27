import React from 'react';

import Slider from "react-slick";
import './slick.css';
import { UserItem } from './UserItem'

export const Drum  = (props) =>{
    const { autoplay, speed } = props;
    return (
        <SimpleSlider autoplay={autoplay} speed={speed}/>
    )
};


class SimpleSlider extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props);
        let settings = {
            className: "center",
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            rtl: false,
            centerMode: true,
            focusOnSelect: true,
            pauseOnHover: false,
            centerPadding: "0px",
            autoplay: this.props.autoplay,
            speed: this.props.speed,
            autoplaySpeed: 0,
            cssEase: "linear",
            vertical: true,
            arrows: false
        };


        return (
                <Slider {...settings}>
                    <UserItem name={'первый'} workOrg={'ООО Название'}/>
                    <UserItem name={'второй'} workOrg={'ООО Название'}/>
                    <UserItem name={'третий'} workOrg={'ООО Название'}/>
                    <UserItem name={'четвертый'} workOrg={'ООО Название'}/>
                    <UserItem name={'пятый'} workOrg={'ООО Название'}/>
                    <UserItem name={'шестой'} workOrg={'ООО Название'}/>
                    <UserItem name={'седьмой'} workOrg={'ООО Название'}/>
                </Slider>

        );
    }
}

