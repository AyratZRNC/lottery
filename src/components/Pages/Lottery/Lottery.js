import React from "react";
import ReactDOM from 'react-dom';
import FieldTimer from "./FieldTimer/FieldTimer";
import FieldGame from "./FieldGame/FieldGame";
import {Cert} from "../../Vidget/Cert/Cert";


export default class Lottery extends React.Component {
    state = {
        // включить окно игры
        fieldGamShow: true,
        //включение автопрокрутки слайдера
        autoplay: true,
        //включение таймера до розыгрыша
        timerRun: false,
        //настройка для админ кабинета
        runLottery: true,
        cert1: false,
        cert2: false,
        cert3: false,
        speed: 3000,
        time: 120
    };
    timeIsOut = () => {
        console.log('время ожидания розыгрыша закончилось');
        // this.setState({
        //     fieldGamShow: true
        // });
    };

    render() {
        const {fieldGamShow, timerRun, runLottery, speed, autoplay, time, cert1, cert2, cert3 } = this.state;
        console.log('Статус таймера: ', timerRun);
        if(cert1 && !cert2 && !cert3){
            return (
                ReactDOM.createPortal(
                    <Cert priz={100000}/>,
                    document.body
                )
            );
        } else if (cert2 && !cert1 && !cert3){
            return  (
                ReactDOM.createPortal(
                    <Cert priz={75000}/>,
                    document.body
                )
            );
        } else if (cert3 && !cert1 && !cert3){
            return  (
                ReactDOM.createPortal(
                    <Cert priz={50000}/>,
                    document.body
                )
            );
        }
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