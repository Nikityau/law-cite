import React from 'react';

import './style.common/Input.scss'
import './style.common/_border_bottom/Input_border_bottom.scss'

export const INPUT_UI_TEXT_POS_LEFT = 'input-ui_text_pos_left';
export const INPUT_UI_TEXT_POS_CENTER = 'input-ui_text_pos_center';

const Input = ({type, position, placeholder, value, setValue}) => {

    return (
        <input
            className={`input-ui ${position} input-ui_border_bottom`}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={setValue}
        />
    );
};

export default Input;