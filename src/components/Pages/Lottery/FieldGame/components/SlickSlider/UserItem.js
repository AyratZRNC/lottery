import React from 'react';
import "./UserItem.css";
import './slick.css';

export const UserItem = (props) => {
    const { name, workOrg } = props;
    return(
        <div className="userItem">
            <div className="userItem__header">
                {name}
            </div>
            <div className="userItem__contact">
                {workOrg}
            </div>
        </div>
    )
};
