import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { Container, Row, Col } from 'bootstrap-4-react';
import css from '../Main/Main.module.css';
import { Card } from 'bootstrap-4-react';
import Header from "../../Vidget/Logo";


export default class Admin extends Component {


    render() {
        return (
            <Container>
                <Row>
                    <Header/>
                </Row>
                <Row className={css.rowStyle}>
                    <Col col="sm" alignSelf="center">
                        <Card style={{width: '100%'}}>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Subtitle mb="2" text="muted">Запуск розыгрыша</Card.Subtitle>
                                <Card.Text>Необходимо установить время</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <NavLink to="/start" className={css.buttonLink}>
                                    Перейти
                                </NavLink>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col col="sm" alignSelf="center">
                        <Card style={{width: '100%'}}>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Subtitle mb="2" text="muted">Информация об участниках</Card.Subtitle>
                                <Card.Text>Посмотреть информацию об участниках.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <NavLink to="/statistic" className={css.buttonLink}>
                                    Перейти
                                </NavLink>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col col="sm" alignSelf="center">
                        <Card style={{width: '100%'}}>
                            <Card.Header></Card.Header>
                            <Card.Body>
                                <Card.Subtitle mb="2" text="muted">База призов</Card.Subtitle>
                                <Card.Text>Установить призы победителям.</Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <NavLink to="/bd" className={css.buttonLink}>
                                    Перейти
                                </NavLink>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}