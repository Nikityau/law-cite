import React from 'react';
import {Link, useNavigate} from "react-router-dom";

import Header__nav from "components/Pages/Home.page/&blocks/Header/__nav/Header__nav";

import {APP_ROUTER_PATH_HOME} from "components/AppRouter/AppRouter.paths";

import Logo, {LOGO_STYLES_DARK} from "components/UI/UI.Kit.Components/Logo/Logo";
import Button from "components/UI/UI.Kit.Components/Button/Button";

import './styles.common/header.scss'

const Header = () => {

    const navigate = useNavigate()

    const btnClickHandler = () => {
        navigate('/login')
    }

    return (
        <header className={'header'}>
            <div className={'header__container'}>
                <div className={'header__btn-link'}>
                    <Link to={APP_ROUTER_PATH_HOME}>
                        <Logo styles={LOGO_STYLES_DARK}/>
                    </Link>
                </div>
                <div className={'header__inner-container'}>
                    <Header__nav/>
                    <div className={'header__btn-link'}>
                        <Button text={'Личный Кабинет'} onClickHandler={btnClickHandler}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;