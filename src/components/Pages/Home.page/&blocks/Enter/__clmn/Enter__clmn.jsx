import React from 'react';

import clmnL from 'assets/images/Home.page/Enter/l_clmn.png'
import clmnM from 'assets/images/Home.page/Enter/m_clmn.png'
import clmnR from 'assets/images/Home.page/Enter/r_clmn.png'

export const ENTER_CLMN_TYPE_L = 'enter_clmn_type_l'
export const ENTER_CLMN_TYPE_M = 'enter_clmn_type_m'
export const ENTER_CLMN_TYPE_R = 'enter_clmn_type_r'

const EnterClmn = ({ classNames = [], type }) => {

    const getImgByType = () => {
        switch (type) {
            case ENTER_CLMN_TYPE_L:
                return clmnL;
            case ENTER_CLMN_TYPE_M:
                return clmnM;
            case ENTER_CLMN_TYPE_R:
                return clmnR
        }
    }

    return (
        <div className={`enter__clmn ${classNames?.join(' ') || ''}`}
            style={{
                backgroundImage: `url(${getImgByType(type)})`
            }}
        >
        </div>
    );
};

export default EnterClmn;