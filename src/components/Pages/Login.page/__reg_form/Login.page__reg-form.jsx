import React, {useState} from 'react';

import Login from "ui/UI.Kit.Components/Form/Input/Login/Login";
import Password from "ui/UI.Kit.Components/Form/Input/Password/Password";
import Button from "ui/UI.Kit.Components/Form/Button/Button";

const LoginPageRegForm = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState({ value: '', repeatValue: '', type: 'password' })

    const loginChange = (e) => {
        setLogin(e.target.value)
    }

    const passwordValue = e => {
        setPassword({ ...password, value: e.target.value })
    }

    const passwordRepeatValue = e => {
        setPassword({ ...password, repeatValue: e.target.value })
    }

    const changePasswordType = () => {
        switch (password.type) {
            case 'text':
                setPassword({ ...password, type: 'password' })
                break;
            case 'password':
                setPassword({ ...password, type: 'text' })
                break;
        }
    }

    const subHandler = e => {
        e.preventDefault();
        return;
    }

    return (
        <form>
            <div className={'login-page__form-input'}>
                <Login
                    value={login}
                    placeholder={'Логин'}
                    setValue={loginChange}
                />
            </div>
            <div className={'login-page__form-input'}>
                <Password
                    value={password.value}
                    type={password.type}
                    placeholder={'Пароль'}
                    setValue={passwordValue}
                    changeTypeCb={changePasswordType}
                />
            </div>
            <div className={'login-page__form-input'}>
                <Password
                    value={password.repeatValue}
                    type={password.type}
                    placeholder={'Пароль'}
                    setValue={passwordRepeatValue}
                    changeTypeCb={changePasswordType}
                />
            </div>
            <div className={'login-page__form-error'}>
                <span></span>
            </div>
            <div className={'login-page__form-btn-sub'}>
                <Button
                    text={'Регистрация'}
                    onSubHandler={subHandler}
                />
            </div>
        </form>
    );
};

export default LoginPageRegForm;