import React from "react";
import FieldTimer from "./FieldTimer/FieldTimer";
import FieldGame from "./FieldGame/FieldGame";


export default class Lottery extends React.Component {
    state = {
        // включить окно игры
        fieldGamShow: false,
        //включение таймера до розыгрыша
        timerRun: false,
        //включение автопрокрутки слайдера
        autoplay: false,
        runLottery: true,
        cert1: false,
        cert2: false,
        cert3: false,
        speed: 2000,
        time: 120
    };
    timeIsOut = () => {
        console.log('время ожидания розыгрыша закончилось');
        // this.setState({
        //     fieldGamShow: true
        // });
    };



    render() {
        const {fieldGamShow, timerRun, runLottery, speed, autoplay, time } = this.state;
        console.log('Статус таймера: ', timerRun);

        if(fieldGamShow){
            return(
                <FieldGame
                    runLottery={runLottery}
                    speed={speed}
                    autoplay={autoplay}
                />
            )
        }
        return (

            <FieldTimer
                time={time}
                timerRun={timerRun}
                timeIsOut={this.timeIsOut}
            />
        )
    }
}