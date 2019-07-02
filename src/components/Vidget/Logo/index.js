import React from 'react';
import Logo from "../../../assets/img/ZarnitzaInno_Logo.png";
import {NavLink} from 'react-router-dom';
import css from './logo.module.css'

export const Header = () => {
    return(
        <div className={css.logoButton}>
            <NavLink to="/">
                <img src={Logo}
                />
            </NavLink>
        </div>

    )
};
export default Header;