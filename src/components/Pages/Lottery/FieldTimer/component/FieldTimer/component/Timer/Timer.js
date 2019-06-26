import React from 'react';
import css from "../../../../../../CreateUser/CreateUser.module.css";
import TimerMinSec from "./TimerMinSec";

class Timer extends React.Component {
    constructor(props){
        super(props)

    }
    render() {
        const min = this.props.time;
        const { timerRun, timeIsOut, timerStop } = this.props;
        const sec = min * 60;
        return(
            <div className={css.timer}>
                <div className={css.timer__data}>
                    <TimerMinSec timerStop={timerStop} timeIsOut={timeIsOut} timerRun={timerRun} sec={sec}/>
                </div>
            </div>
        )
    }
}

export default Timer;