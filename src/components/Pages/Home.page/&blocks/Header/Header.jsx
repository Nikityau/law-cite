import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";

import Header__nav from "components/Pages/Home.page/&blocks/Header/__nav/Header__nav";

import {APP_ROUTER_PATH_HOME, APP_ROUTER_PATH_LOGIN} from "components/AppRouter/AppRouter.paths";

import Logo, {LOGO_STYLES_DARK} from "components/UI/UI.Kit.Components/Logo/Logo";
import Button from "components/UI/UI.Kit.Components/Button/Button";

import {NavContext} from "components/Utils.Components/Nav.HOC";

import './styles.common/header.scss'
import '../../../../UI/UI.Kit.Styles/ui.styles/el_padding_side.scss'

const Header = () => {

    const navContext = useContext(NavContext)

    const btnClickHandler = () => {
        navContext?.navByPath(APP_ROUTER_PATH_LOGIN)
    }

    return (
        <header className={'header el_padding_side_100'}>
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