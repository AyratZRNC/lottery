import React from 'react';
import {NavLink} from 'react-router-dom';
import css from "../Main/Main.module.css"
import Admin from '../../../assets/img/panel.png';
import Room from '../../../assets/img/lottery.png';
import People from '../../../assets/img/group.png';
import Header from "../../Vidget/Logo";


const cards = [
    {id: 1, img: [Admin], title: 'Управление розыгрышем', description: 'Start/Stop', link: '/start' },
    {id: 2, img: [People], title: 'База участников', description: 'Информация об участниках', link: '/statistic' },
    {id: 3, img: [Room], title: 'База призов', description: 'Информация о призах', link: '/bd' }
];

export default function Main() {

    return (
        <div className={css.mainWrapper}>
            <Header/>
            {cards.map(card => (
                <div key={card.title}>
                    <div className={css.card}>
                        <div className={css.card__img}>
                            <img src={card.img} alt={card.description}/>
                        </div>
                        <div className={css.card__item}>
                            <div className={css.card__title}>
                                {card.title}
                            </div>
                            <div className={css.card__description}>
                                {card.description}
                            </div>
                        </div>
                        <div className={css.card__button}>
                            <NavLink to={card.link}>
                                Перейти
                            </NavLink>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}