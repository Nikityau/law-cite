import React from 'react';

import Enter__clmn, {
    ENTER_CLMN_TYPE_L,
    ENTER_CLMN_TYPE_M,
    ENTER_CLMN_TYPE_R
} from "components/Pages/Home.page/&blocks/Enter/__clmn/Enter__clmn";

const EnterClmns = () => {
    return (
        <div className={'enter-block__clmns'}>
            <Enter__clmn classNames={[
                'enter__clmn_border_right_top'
            ]}
                type={ENTER_CLMN_TYPE_L}/>
            <Enter__clmn classNames={[
                'enter__clmn_size_plus',
                'enter__clmn_pos_climb_80'
            ]}
                         type={ENTER_CLMN_TYPE_M}/>
            <Enter__clmn classNames={[
                'enter__clmn_border_left_top'
            ]}
                type={ENTER_CLMN_TYPE_R}/>
        </div>
    );
};

export default EnterClmns;