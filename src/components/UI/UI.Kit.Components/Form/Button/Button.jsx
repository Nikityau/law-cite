import React from 'react';

import './style.common/Button.scss'

const Button = ({ text, onSubHandler }) => {
    return (
        <button className={'form-btn-ui'} onClick={onSubHandler}>
            { text }
        </button>
    );
};

export default Button;