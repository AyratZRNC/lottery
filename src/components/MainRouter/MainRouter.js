import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Admin from '../Pages/Admin/Admin';
import Start from '../Pages/Admin/Start/Start';
import Main from '../Pages/Main/Main';
import Statistic from '../Pages/Admin/Statistic/Statistic';
import Priz from '../Pages/Admin/Priz/Priz';
import CreateUserModule from '../Pages/CreateUser/CreateUser';
import Lottery from "../Pages/Lottery";

class MainRouter extends Component {


    render() {
        const timer = this.props.timer;
        return (
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
                <Route exact render={() => <Lottery timer={timer}/>} path={'/lottery'}/>
            </Switch>
        );
    }
}


export default MainRouter;