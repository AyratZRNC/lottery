import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import Admin from '../Pages/Admin/Admin';
import Start from '../Pages/Admin/Start/Start';
import Main from '../Pages/Main/Main';
import CreateUserModule from '../Pages/CreateUser/CreateUser';
import Lottery from "../Pages/Lottery";

class MainRouter extends Component {
    state = {
        show: true,
        timer: 120
    };

    render() {
        const timer = this.state.timer;
        return (
            <Switch>
                {/*страница главная*/}
                <Route exact render={() => <Main/>} path={'/'}/>

                {/*страница формы записи пользователей*/}
                <Route exact render={() => <CreateUserModule/>} path={'/users'}/>

                {/*страница админа*/}
                <Route exact render={() => <Admin/>} path={'/admin'}/>
                <Route exact render={() => <Start/>} path={'/start'}/>

                {/*страница lottery*/}
                <Route exact render={() => <Lottery timer={timer}/>} path={'/lottery'}/>
            </Switch>
        );
    }
}


export default MainRouter;