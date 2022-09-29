import React from 'react';

import Header__nav from "components/Pages/Home.page/&blocks/Header/__nav/Header__nav";
import Logo from "components/UI/UI.Kit.Components/Logo/Logo";

import './styles.common/header.scss'

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__container'}>
                <Logo/>
                <Header__nav/>
                <div className={'header__button'}>

                </div>
            </div>
        </header>
    );
};

export default Header;