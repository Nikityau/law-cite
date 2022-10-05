import React from 'react';

import './style.common/Input.scss'
import './style.common/_border_bottom/Input_border_bottom.scss'
import './style.common/_text_pos/Input_text_pos_left.scss'
import './style.common/_text_pos/Input_text_pos_center.scss'

export const INPUT_UI_TEXT_POS_LEFT = 'input-ui_text_pos_left';
export const INPUT_UI_TEXT_POS_CENTER = 'input-ui_text_pos_center';

const Input = ({type, position = INPUT_UI_TEXT_POS_LEFT, placeholder, value, setValue, isError, errorText}) => {

    return (
        <div className={[
            'input-ui-container',
            position
        ].join(' ')}>
            <input
                className={`input-ui ${position} input-ui_border_bottom`}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={setValue}
            />
            <span className={`input-ui__error ${isError ? 'input-ui_error_invoke' : 'input-ui_no_error'}`}>{ errorText }</span>
        </div>
    );
};

export default Input;