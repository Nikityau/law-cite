import React from 'react';

import './style.common/Login.scss'

const Login = ({ placeholder, value, setValue }) => {
    return (
        <input className={'input-login-ui'}
            placeholder={placeholder}
            value={value}
            onChange={setValue}
        >
        </input>
    );
};

export default Login;