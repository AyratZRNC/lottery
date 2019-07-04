import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { Grid, Typography, Container, CssBaseline } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import css from './start.module.css';
import Header from "../../../Vidget/Logo";
import { DataConsumer } from "../../../../context";


export default class Start extends Component {
    state = {
        value: ''
    };

    render() {
        return (
            <DataConsumer>
                {
                    ({setValue, startTimerOn, inputTime}) =>(
                        <React.Fragment>
                            <CssBaseline/>
                            <Header/>
                            <Container direction="row"
                                       justify="center"
                                       className={css.startWrapper}>
                                <Grid>
                                    <form className={css.startWrapper__form}
                                          onSubmit={this.onSubmit}
                                          autoComplete="off">
                                        <Typography variant="subtitle1" gutterBottom>
                                            Блок подготовки к розыгрышу
                                        </Typography>
                                        <Typography variant="subtitle1" gutterBottom>
                                            Укажите время для сбора данных участников:
                                        </Typography>
                                        <Grid item container>
                                            <Grid item>
                                                <FormControl required>
                                                    <InputLabel htmlFor="name">Укажите время в мин.</InputLabel>
                                                    <Input
                                                        type='number'
                                                        id="name"
                                                        name="name"
                                                        onChange={setValue}
                                                        value={inputTime}
                                                    />
                                                </FormControl>
                                                <Button variant="contained" color="primary"
                                                        onClick={startTimerOn}
                                                        className="startWrapper__buttonSubmit"
                                                        type="submit">
                                                    Запуск времени на сбор данных
                                                </Button>
                                                <Button variant="contained" color="secondary"
                                                        onClick={this.StartTimerOn}
                                                        className="startWrapper__buttonSubmit"
                                                        type="submit">
                                                    Завершить сбор данных
                                                </Button>
                                            </Grid>
                                        </Grid>

                                        <Typography variant="subtitle1" gutterBottom>
                                            Блок управления розыгрышем
                                        </Typography>

                                        <Grid item container direction="column">
                                            <Grid item>
                                                <Button
                                                    variant="contained" color="primary"
                                                    onClick={this.StartTimerOn}
                                                    className="startWrapper__buttonSubmit"
                                                    type="submit">
                                                    Розыгрыш 1 места
                                                </Button>
                                                <Button
                                                    variant="contained" color="primary"
                                                    onClick={this.StartTimerOn}
                                                    className="startWrapper__buttonSubmit"
                                                    type="submit">
                                                    Розыгрыш 2 места
                                                </Button>
                                                <Button
                                                    variant="contained" color="primary"
                                                    onClick={this.StartTimerOn}
                                                    className="startWrapper__buttonSubmit"
                                                    type="submit">
                                                    Розыгрыш 3 места
                                                </Button>

                                            </Grid>
                                            <Grid item>
                                                <Button
                                                    variant="contained" color="secondary"
                                                    onClick={this.StartTimerOn}
                                                    className="startWrapper__buttonSubmit"
                                                    type="submit">
                                                    Завершить розыгрыш
                                                </Button>
                                            </Grid>
                                        </Grid>

                                    </form>
                                </Grid>
                            </Container>
                        </React.Fragment>
                    )
                }
            </DataConsumer>


        )
    }
}


