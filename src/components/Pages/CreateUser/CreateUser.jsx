import React, {Component} from 'react';
import css from './CreateUser.module.css';
import { Container, Row, Col } from 'bootstrap-4-react';
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Header from "../../Vidget/Logo";
export default class CreateUser extends Component{
    state = {
        name: "",
        organization: "",
        email: "",
        current:"",
        phone: "",
        simulator: "",
        error: "",
        list: []
    };
    componentDidMount() {

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });


    };
    onSubmit = e => {
        e.preventDefault();
        const { name } = this.state;
        localStorage.clear();
        localStorage.setItem("userName", name);
        const local = localStorage.getItem("userName");
        console.log(local);
        // if (checkAuth(email, password)) {
        //   auth.login(() => {
        //     this.props.history.push("/account");
        //   });
        // } else {
        //   alert("Неправильный логин или пароль!");
        // }
    };
    render() {
        return (
        <Container>
            <Row>
                <Header/>
            </Row>

            <Row className={css.rowStyle}>
                <Col alignSelf="center">
                    <div className={css.loginForm}>
                        <form className={css.form} onSubmit={this.onSubmit} autoComplete="off">
                            <Row className={css.loginForm__Flex}>
                               <Col col="6">
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="name">Фамилия Имя Отчество</InputLabel>
                                        <Input
                                            id="name"
                                            name="name"
                                            autoFocus
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="organization">Название компании</InputLabel>
                                        <Input
                                            id="organization"
                                            name="organization"
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="email">E-MAIL</InputLabel>
                                        <Input
                                            id="email"
                                            name="email"
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                </Col>

                                <Col col="6"> <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="current">Должность</InputLabel>
                                    <Input
                                        id="current"
                                        name="current"
                                        onChange={this.handleChange}
                                    />
                                </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="phone">Телефон</InputLabel>
                                        <Input
                                            id="phone"
                                            name="phone"
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="simulator">Какой тренажер нужен?</InputLabel>
                                        <Input
                                            id="simulator"
                                            name="simulator"
                                            onChange={this.handleChange}
                                        />
                                    </FormControl>
                                </Col>
                                <Col>
                                    <Button
                                        className={css.buttonSubmit}
                                        type="submit"
                                    >
                                        РЕГИСТРАЦИЯ
                                    </Button>
                                </Col>
                            </Row>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
        )
    }
}


