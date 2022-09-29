import React from 'react';

import Contacts__data from "components/Pages/Home.page/&blocks/Contacts/__data/Contacts__data";
import Contacts__form from "components/Pages/Home.page/&blocks/Contacts/__form/Contacts__form";

import './style.common/Contacts.scss'

const Contacts = () => {
    return (
        <article className={'contacts el_padding_side_100'}>
            <div className={'contacts__title'}>
                <h2>Контакты</h2>
            </div>
            <div className={'contacts__conts'}>
                <Contacts__data/>
                <Contacts__form/>
            </div>
        </article>
    );
};

export default Contacts;