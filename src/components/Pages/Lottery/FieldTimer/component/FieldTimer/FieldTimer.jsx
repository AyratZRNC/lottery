import React, {Component} from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';
import Timer from './component/Timer/Timer'
import {BImg, Navbar} from 'bootstrap-4-react';
import css from "../../../../CreateUser/CreateUser.module.css";
import Header from "../../../../../Vidget/Logo";

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

            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row className={css.rowStyle}>
                    <Col alignSelf="center">
                        <div className={css.timerDescription}>
                            Розыгрыш
                        </div>
                        <div>
                            <Timer timeIsOut={timeIsOut} timerRun={timerRun} time={time}/>
                        </div>
                        <div className={css.timerDescriptionBottom}>
                            НЕБОЛЬШАЯ ЗАМЕТКА ИЛИ ИНФОРМАЦИЯ О РОЗЫГРЫШЕ
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
