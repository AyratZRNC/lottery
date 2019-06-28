import React from 'react';
import {NavLink} from 'react-router-dom';
import css from "./Main.module.css"
import Admin from '../../../assets/img/panel.png';
import Room from '../../../assets/img/lottery.png';
import People from '../../../assets/img/group.png';


const cards = [
    {id: 1, img: [Admin], title: 'Панель управления', description: 'Кабинет организатора розыгрыша', link: '/admin' },
    {id: 2, img: [Room], title: 'Окно просмотра', description: 'Включить просмотр розыгрыша', link: '/lottery' },
    {id: 3, img: [People], title: 'Запись участников розыгрыша', description: 'Записать участников розыгрыша', link: '/users' }
    ];

export default function Main() {

    return (
        <>
            <div className={css.mainWrapper}>
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
        </>
    );
}
