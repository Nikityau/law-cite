import React from 'react';

import './styles.common/Button.scss'
import 'src/components/UI/UI.Kit.Components/Button/styles.common/btn_padding/btn_def_padding.scss'
import 'src/components/UI/UI.Kit.Components/Button/styles.common/btn_padding/btn_padding_side_50.scss'

const Button = ({ text, onClickHandler, classNames = [] }) => {
    return (
        <button className={`btn-comp btn_def_padding ${classNames.join(' ')}`} onClick={onClickHandler}>
            { text }
        </button>
    );
};

export default Button;