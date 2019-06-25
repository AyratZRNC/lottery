import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'bootstrap-4-react';
import Timer from '../../Vidget/Timer/Timer'
import {BImg, Navbar} from 'bootstrap-4-react';
import css from "../CreateUser/CreateUser.module.css";
import Header from "../../Vidget/Logo";
import FieldGame from "./FieldGame";


export default class FieldTimer extends Component{
    state = {
        //start timer
        timerRun: true,
        //show fieldGame, lottery drum
        fieldGamShow: false,
        //
        runLottery: true,
        cert1: false,
        cert2: false,
        cert3: false
    };
    timeIsOut = () => {
        console.log('время ожидания розыгрыша закончилось');
        // this.setState({
        //     fieldGamShow: true
        // });
    };
    render() {
        console.log(this.props.timer);
        const timeIsOut = this.timeIsOut;
        const time = this.props.timer;
        if (this.state.fieldGamShow) {
            return (
                ReactDOM.createPortal(
                <FieldGame/>,
                    document.body
                    )
            )
        }
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
                            <Timer timeIsOut={timeIsOut} timerRun={this.state.timerRun} time={time}/>
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
