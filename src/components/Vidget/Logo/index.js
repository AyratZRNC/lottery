import React from 'react';
import Logo from "../../../assets/img/ZarnitzaInno_Logo.png";
import {NavLink} from 'react-router-dom';


export const Header = () => {
    return(
        <NavLink to="/">
            <img src={Logo}
            />
        </NavLink>
    )
};
export default Header;