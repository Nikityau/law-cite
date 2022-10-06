import React from 'react';

import './style.common/Password.scss'

import eyeOpen from 'assets/icons/form/eye-open.png'
import eyeClose from 'assets/icons/form/eye-close.png'

const Password = ({ placeholder, value, setValue, type, changeTypeCb}) => {
    return (
        <div className={'password-ui'}>
            <input
                placeholder={placeholder}
                value={value}
                onChange={setValue}
                type={type}
            />
            <img src={type === 'text' ? eyeOpen : eyeClose} alt={'text'} onClick={changeTypeCb}/>
        </div>
    );
};

export default Password;