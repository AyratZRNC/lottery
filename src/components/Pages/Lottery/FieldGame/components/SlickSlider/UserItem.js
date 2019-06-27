import React from 'react';
import css from "./UserItem.module.css";
import './slick.css';

export const UserItem = (props) => {
    const { name, workOrg } = props;
    return(
        <div className={css.userItem}>
            <div className={css.userItem__header}>
                {name}
            </div>
            <div className={css.userItem__contact}>
                {workOrg}
            </div>
        </div>
    )
};
