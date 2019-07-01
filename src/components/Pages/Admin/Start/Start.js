import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { Grid, Typography, Container, CssBaseline } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import css from './start.module.css';


export default class Start extends Component {
    constructor(props){
        super(props);
        // this.setValue = this.setValue.bind(this);
    }
    state = {
        value: ''
    };

    StartTimerOn = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log('старт таймера');
    };
    setValue = (e) =>{
        e.preventDefault();
        e.stopPropagation();
        console.log(e.target.value);
        this.setState({value: e.target.value})
    };
    render() {
        return (
            <React.Fragment>
                <CssBaseline/>
                <Container direction="row"
                           justify="center"
                           alignItems="center"
                           maxWidth="lg"
                           className={css.startWrapper}>
                    <Grid container lg>
                        <form className={css.startWrapper__form}
                              onSubmit={this.onSubmit}
                              autoComplete="off">
                            <Typography variant="subtitle1" gutterBottom>
                                Укажите время для таймера:
                            </Typography>
                            <Grid item lg container>
                                <Grid item container direction="row" alignItems='center'>
                                    <Grid item>
                                        <FormControl required>
                                            <InputLabel htmlFor="name">Укажите время</InputLabel>
                                            <Input
                                                type='number'
                                                id="name"
                                                name="name"
                                                onChange={this.setValue}
                                                value={this.state.value}
                                            />
                                        </FormControl>

                                    </Grid>
                                    <Grid item>
                                        <Button
                                            onClick={this.StartTimerOn}
                                            className="startWrapper__buttonSubmit"
                                            type="submit">
                                            СТАРТ ТАЙМЕРА
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>


                            <Typography variant="subtitle1" gutterBottom>
                                Управление
                            </Typography>
                            <Grid item lg container>
                                <Grid item container direction="row" alignItems='center'>
                                    <Grid item>
                                        <Button
                                            onClick={this.StartTimerOn}
                                            className="startWrapper__buttonSubmit"
                                            type="submit">
                                            СТАРТ РОЗЫГРЫША
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Container>
            </React.Fragment>

        );
    }
}


