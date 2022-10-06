import React, {useState} from 'react';

import Logo, {LOGO_STYLES_LIGHT} from "ui/UI.Kit.Components/Logo/Logo";
import LoginPage__regForm from "components/Pages/Login.page/__reg_form/Login.page__reg-form";
import LoginPage__loginForm from "components/Pages/Login.page/__login-form/Login.page__login-form";

import './style.common/Login.page.scss'

const FORM_TYPE_LOG_IN = 'login';
const FORM_TYPE_REG = 'reg';

const LoginPage = () => {

    const [formType, setFormType] = useState(FORM_TYPE_LOG_IN)

    const formTypeSwitcher = (type) => {
        switch (type) {
            case FORM_TYPE_REG:
                setFormType(FORM_TYPE_REG)
                break;
            case FORM_TYPE_LOG_IN:
                setFormType(FORM_TYPE_LOG_IN)
                break;
        }
    }
    formTypeSwitcher.loginSwitcher = () => {
        formTypeSwitcher(FORM_TYPE_LOG_IN)
    }
    formTypeSwitcher.regSwitcher = () => {
        formTypeSwitcher(FORM_TYPE_REG)
    }


    const formSwitcher = () => {
        switch (formType) {
            case FORM_TYPE_REG:
                return <LoginPage__regForm/>
            case FORM_TYPE_LOG_IN:
                return <LoginPage__loginForm/>
        }
    }

    const formTitle = () => {
        switch (formType) {
            case FORM_TYPE_REG:
                return (
                    'Регистрация'
                )
            case FORM_TYPE_LOG_IN:
                return (
                    'Вход'
                )
        }
    }

    const switchButton = () => {
        switch (formType) {
            case FORM_TYPE_REG:
                return (
                    <button onClick={formTypeSwitcher.loginSwitcher}>
                        Вход
                    </button>
                )
            case FORM_TYPE_LOG_IN:
                return (
                    <button onClick={formTypeSwitcher.regSwitcher}>
                        Регистрация
                    </button>
                )
        }
    }

    return (
        <div className={'login-page'}>
            <div className={'login-page__container app__container'}>
                <div className={'login-page__company-title'}>
                    <Logo
                        styles={LOGO_STYLES_LIGHT}
                    />
                </div>
                <div className={'login-page__form-container'}>
                    <div className={'login-page__form-title'}>
                        <h3>
                            {
                                formTitle()
                            }
                        </h3>
                    </div>
                    <div className={'login-page__form'}>
                        {
                            formSwitcher()
                        }
                    </div>
                </div>
                <div className={'login-page__switch-btn'}>
                    {
                        switchButton()
                    }
                </div>
            </div>
        </div>
    );
};

export default LoginPage;