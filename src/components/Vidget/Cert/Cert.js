import React from 'react';
import './cert.css';

export const Cert = (props) => {
    const { priz } = props;
    return (
        <div className="cert">
            <div className="cert__block">
                <div className="cert__prize">{`${priz} `}<span>рублей</span>    </div>
                <div className="cert__descriptionBottom">Скидка применяется удиноразово при заказе до 30.11.19 г. и не
                    превышает скидку размером 10% от общей суммы контракта
                </div>
            </div>
        </div>
    )
}