import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Admin from '../Pages/Admin/Admin';
import Start from '../Pages/Admin/Start/Start';
import Main from '../Pages/Main/Main';
import Statistic from '../Pages/Admin/Statistic/Statistic';
import Priz from '../Pages/Admin/Priz/Priz';
import CreateUserModule from '../Pages/CreateUser/CreateUser';
import Lottery from "../Pages/Lottery";
import { DataProvider } from '../../context'



class MainRouter extends Component {
    state = {
        value: '',
        timerRun: false,
        // включить окно игры
        fieldGamShow: false,
        //включение автопрокрутки слайдера
        autoplay: false,
        //включение окна с таймером до розыгрыша
        //старт лотереи из админ кабинета
        runLottery: false,
        //время таймера ожидания до розыгрыша из админ кабинета
        time: 110,
        //скорость вращения барабана на автоматической прокрутке
        speed: 500,
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


    setValue = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target.value);
        this.setState({value: e.target.value})
    };

    startTimerOn = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('старт таймера');
        this.setState((state) => ({timerRun: !this.state.timerRun}));

    };

    render() {
        // const timer = this.props.timer;
        const { value, time } = this.state;
        return (
            <DataProvider value={{setValue: this.setValue, startTimerOn: this.startTimerOn, inputTime: value }}>
                <Switch>
                    {/*страница главная*/}
                    <Route exact render={() => <Main/>} path={'/'}/>
                    {/*страница формы записи пользователей*/}
                    <Route exact render={() => <CreateUserModule/>} path={'/users'}/>
                    {/*страница админа*/}
                    <Route exact render={() => <Admin/>} path={'/admin'}/>
                    {/*управление розыгрышем*/}
                    <Route exact render={() => <Start/>} path={'/start'}/>
                    {/*статистика пользователей*/}
                    <Route exact render={() => <Statistic/>} path={'/statistic'}/>
                    {/*статистика призов*/}
                    <Route exact render={() => <Priz/>} path={'/bd'}/>
                    {/*страница lottery*/}
                    <Route exact render={() => <Lottery time={value}/>} path={'/lottery'}/>
                </Switch>
            </DataProvider>
        );
    }
}


export default MainRouter;