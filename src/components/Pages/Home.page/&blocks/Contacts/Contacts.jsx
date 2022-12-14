import React from 'react';

import Contacts__data from "components/Pages/Home.page/&blocks/Contacts/__data/Contacts__data";
import Contacts__form from "components/Pages/Home.page/&blocks/Contacts/__form/Contacts__form";

import './style.common/Contacts.scss'
import './style.common/__data/Contacts__data.scss'
import './style.common/__form/Contacts__form.scss'

import 'ui/UI.Kit.Styles/ui.styles/el_wdth_150.scss'
import 'ui/UI.Kit.Styles/ui.styles/el_y_down_60.scss'

const Contacts = () => {
    return (
        <article className={'contacts el_padding_side_100'}
            id={'contacts'}
        >
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