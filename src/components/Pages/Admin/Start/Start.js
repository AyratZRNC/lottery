import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { Grid, Paper, Container, CssBaseline } from '@material-ui/core';
import InputLabel from "@material-ui/core/InputLabel";
import css from '../../Main/Main.module.css';
import Header from "../../../Vidget/Logo";


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
                <Container maxWidth="lg">
                    <Grid container lg>
                        <form className={css.form} onSubmit={this.onSubmit} autoComplete="off">
                            <Grid item lg container>
                                <Grid item container direction="row" alignItems='center'>
                                    <Grid item>
                                        <Paper>
                                            <FormControl margin="normal" required>
                                                <InputLabel htmlFor="name">Укажите время</InputLabel>
                                                <Input
                                                    type='number'
                                                    id="name"
                                                    name="name"
                                                    onChange={this.setValue}
                                                    value={this.state.value}
                                                />
                                            </FormControl>
                                        </Paper>

                                    </Grid>
                                    <Grid item>
                                        <Paper>
                                            <Button
                                                onClick={this.StartTimerOn}
                                                className={css.buttonSubmit}
                                                type="submit"
                                            >
                                                СТАРТ ТАЙМЕРА
                                            </Button>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm container>

                            </Grid>
                        </form>
                    </Grid>
                </Container>
            </React.Fragment>

        );
    }
}


