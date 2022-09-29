import React from 'react';

import './styles.common/Button.scss'

const Button = ({ text, onClickHandler, classNames = [] }) => {
    return (
        <button className={`btn-comp btn_def_padding ${classNames.join(' ')}`} onClick={onClickHandler}>
            { text }
        </button>
    );
};

export default Button;