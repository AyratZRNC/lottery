import React from "react";
import FieldTimer from "./FieldTimer/component/FieldTimer/FieldTimer";
import FieldGame from "./FieldGame/FieldGame";


export default class Lottery extends React.Component {
    state = {
        timerRun: true,
        fieldGamShow: false,
        runLottery: true,
        cert1: false,
        cert2: false,
        cert3: false,
        speed:6000,
        autoplay: false,
        time: 130
    };
    timeIsOut = () => {
        console.log('время ожидания розыгрыша закончилось');
        // this.setState({
        //     fieldGamShow: true
        // });
    };



    render() {
        const {fieldGamShow, timerRun, runLottery, speed, autoplay, time } = this.state;
        console.log(timerRun);
        if(fieldGamShow){
            return <FieldGame
                runLottery={runLottery}
                speed={speed}
                autoplay={autoplay}
            />
        }
        return (
            <div>
                <FieldTimer
                    time={time}
                    timerRun={timerRun}
                    timeIsOut={this.timeIsOut}

                />
            </div>
        )
    }
}