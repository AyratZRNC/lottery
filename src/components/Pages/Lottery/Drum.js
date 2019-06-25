import React from 'react';
import css from "./FieldTimer.module.css";
import Slider from "react-slick";
import './slick.css';

const UserItem = (props) => {
    const { name, workOrg } = props;
    return(
        <div className={css.userItem}>
            <div className={css.userItem__header}>
                {name}
            </div>
            <div className={css.userItem__contact}>
                {workOrg}
            </div>
        </div>
    )
};

class SimpleSlider extends React.Component {
    state = {
        speed: 500,
        autoplay: true
    };
    render() {
        let settings = {
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            rtl: false,
            centerMode: true,
            focusOnSelect: true,
            pauseOnHover: false,
            centerPadding: "50px",
            autoplay: this.state.autoplay,
            speed: this.state.speed,
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

export const Drum  =() =>{
        return (
            <SimpleSlider/>
        )
};
