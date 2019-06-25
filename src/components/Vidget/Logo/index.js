import React from 'react';
import { BImg } from 'bootstrap-4-react';
import Logo from "../../../assets/img/ZarnitzaInno_Logo.png";
import {NavLink} from 'react-router-dom';


export const Header = () => {
    return(
        <NavLink to="/">
            <BImg style={{position: 'absolute', top: 50}}
                  src={Logo}
            />
        </NavLink>
    )
};
export default Header;