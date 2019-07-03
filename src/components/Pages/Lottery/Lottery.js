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
        //включение окна с таймером до розыгрыша
        timerRun: false,
        //старт лотереи из админ кабинета
        runLottery: false,
        //время таймера ожидания до розыгрыша из админ кабинета
        time: 120,
        //скорость вращения барабана на автоматической прокрутке
        speed: 300,
        //показ сертификата 1 место
        cert1: false,
        //показ сертификата 2 место
        cert2: false,
        //показ сертификата 3 место
        cert3: false,
        //сумма за 1 место
        priz1: 100000,
        //сумма за 2 место
        priz2: 75000,
        //сумма за 3 место
        priz3: 50000

    };
    timeIsOut = () => {
        console.log('время ожидания розыгрыша закончилось');
        // this.setState({
        //     fieldGamShow: true
        // });
    };

    render() {
        const {...data} = this.state;
        console.log('Статус таймера: ', data.timerRun);
        if (data.cert1 && !data.cert2 && !data.cert3) {
            return (
                ReactDOM.createPortal(
                    <Cert priz={data.priz1}/>,
                    document.body
                )
            );
        } else if (data.cert2 && !data.cert1 && !data.cert3) {
            return (
                ReactDOM.createPortal(
                    <Cert priz={data.priz2}/>,
                    document.body
                )
            );
        } else if (data.cert3 && !data.cert1 && !data.cert2) {
            return (
                ReactDOM.createPortal(
                    <Cert priz={data.priz3}/>,
                    document.body
                )
            );
        }
        if (data.fieldGamShow) {
            return (
                <FieldGame
                    runLottery={data.runLottery}
                    speed={data.speed}
                    autoplay={data.autoplay}
                />
            )
        }
        return (
            <>
                <FieldTimer
                    time={data.time}
                    timerRun={data.timerRun}
                    timeIsOut={this.timeIsOut}
                />

            </>)
    }
}
