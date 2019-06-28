import React, {Component} from 'react';
import Timer from './component/Timer/Timer'
import css from "./FieldTimer.module.css";
import Logo from "../../../../assets/img/ZarnitzaInno_Logo.png"

export default class FieldTimer extends Component{

    timeIsOut = () => {
        console.log('время ожидания розыгрыша закончилось');
        // this.setState({
        //     fieldGamShow: true
        // });
    };
    render() {
        const {timeIsOut, timerRun, time} = this.props;
        return (

            <div className={css.timerWrapper}>
                <div className={css.logo}>
                    <img src={Logo} alt="ПО Зарница"/>
                </div>
                <div>
                    <div className={css.timerDescription}>
                        Розыгрыш
                    </div>
                    <div>
                        <Timer timeIsOut={timeIsOut} timerRun={timerRun} time={time}/>
                    </div>
                </div>
                <div className={css.timerDescriptionBottom}>
                    НЕБОЛЬШАЯ ЗАМЕТКА ИЛИ ИНФОРМАЦИЯ О РОЗЫГРЫШЕ
                </div>
            </div>
        )
    }
}
