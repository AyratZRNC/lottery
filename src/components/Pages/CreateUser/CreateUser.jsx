import React, {Component} from 'react';
import css from './CreateUser.module.css';
import Logo from "../../../assets/img/ZarnitzaInno_Logo.png";
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
    };
    componentDidMount() {

    }

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    onSubmit = e => {
        e.preventDefault();
        this.setState({
            name: "",
            organization: "",
            email: "",
            current:"",
            phone: "",
            simulator: "",
            error: "",}
        );
        const { ...person } = this.state;
        let player = {
            name: person.name,
            userName: person.name,
            userOrganization: person.organization,
            email: person.email,
            phone: person.phone,
            simulator: person.simulator
        };
        localStorage.clear();
        let playerJson = JSON.stringify(player);
        localStorage.setItem("участник", playerJson);
        const currentPlayer = localStorage.getItem("участник");
        console.log('Принят пользователь', currentPlayer);
    };
    render() {
        return (
            <div className={css.loginForm}>
                <Header/>
                <form className={css.form} onSubmit={this.onSubmit} autoComplete="off">
                    <div className={css.loginForm__col}>
                        <input
                            id="name"
                            required
                            name="name"
                            type="text"
                            placeholder="Имя фамилия отчество"
                            autoFocus
                            onChange={this.handleChange}
                        />
                        <input
                            id="organization"
                            required
                            type="text"
                            name="organization"
                            placeholder="Название компании"
                            onChange={this.handleChange}
                        />
                        <input
                            id="email"
                            type="email"
                            required
                            name="email"
                            placeholder="E-mail"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className={css.loginForm__col}>
                        <input
                            id="current"
                            type="text"
                            required
                            name="current"
                            placeholder="Должность"
                            onChange={this.handleChange}
                        />
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            placeholder="Телефон"
                            onChange={this.handleChange}
                        />
                        <input
                            type="text"
                            id="simulator"
                            name="simulator"
                            required
                            placeholder="Какой тренажер нужен?"
                            onChange={this.handleChange}
                        />
                    </div>
                    <button
                        className={css.buttonSubmit}
                        type="submit"
                    >
                        РЕГИСТРАЦИЯ
                    </button>
                </form>

            </div>
        )
    }
}


