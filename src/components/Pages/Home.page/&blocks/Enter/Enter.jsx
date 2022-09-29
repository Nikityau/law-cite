import React from 'react';

import Enter__text from "components/Pages/Home.page/&blocks/Enter/__text/Enter__text";
import Enter__clmns from "components/Pages/Home.page/&blocks/Enter/__clmns/Enter__clmns";

import './style.common/Enter.scss'
import './style.common/__text/Enter__text.scss'
import './style.common/__clmns/Enter__clmns.scss'
import './style.common/__clmn/Enter__clmn.scss'

import './style.common/__clmn/_clmn_size/Enter__clmn_size_plus.scss'
import './style.common/__clmn/_clmn_pos/Enter__clmn_pos_climb_80.scss'
import './style.common/__clmn/_clmn_border/Enter__clmn_border_left_top.scss'
import './style.common/__clmn/_clmn_border/Enter__clmn_border_right_top.scss'

const Enter = () => {
    return (
        <section className={'enter-block el_padding_side_100'}>
            <Enter__text/>
            <Enter__clmns/>
        </section>
    );
};

export default Enter;