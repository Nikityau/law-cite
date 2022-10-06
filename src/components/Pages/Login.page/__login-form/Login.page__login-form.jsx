import React, {useState} from 'react';

import Login from "ui/UI.Kit.Components/Form/Input/Login/Login";
import Password from "ui/UI.Kit.Components/Form/Input/Password/Password";
import Button from "ui/UI.Kit.Components/Form/Button/Button";

const LoginPageLoginForm = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState({ value: '', type: 'password' })

    const changeTypePassword = () => {
        switch (password.type) {
            case 'text':
                setPassword({ ...password, type: 'password'})
                break;
            case 'password':
                setPassword({ ...password, type: 'text'})
                break;
        }
    }

    const changeLogin = (e) => {
        setLogin(e.target.value);
    }

    const changePassword = (e) => {
        setPassword({ ...password, value: e.target.value })
    }

    const subHandler = (e) => {
        e.preventDefault();
        return;
    }

    return (
        <form>
            <div className={'login-page__form-input'}>
                <Login
                    value={login}
                    setValue={changeLogin}
                    placeholder={'Логин'}
                />
            </div>
            <div className={'login-page__form-input'}>
                <Password
                    placeholder={'Пароль'}
                    value={password.value}
                    setValue={changePassword}
                    type={password.type}
                    changeTypeCb={changeTypePassword}
                />
            </div>
            <div className={'login-page__form-error'}>
                <span></span>
            </div>
            <div className={'login-page__form-btn-sub'}>
                <Button
                    text={'Войти'}
                    onSubHandler={subHandler}
                />
            </div>
        </form>
    );
};

export default LoginPageLoginForm;