import React from 'react';

import Header__navEl from "components/Header/__nav-el/Header__nav-el";
import {APP_ROUTER_PATH_REVIEWS, APP_ROUTER_PATH_SERVICES} from "components/AppRouter/AppRouter.paths";

const HeaderNav = () => {
    return (
        <nav className={'header__nav'}>
            <Header__navEl navLink={APP_ROUTER_PATH_SERVICES} text={'Услуги'}/>
            <Header__navEl navLink={'#contacts'} text={'Контакты'}/>
            <Header__navEl navLink={APP_ROUTER_PATH_REVIEWS} text={'Отзывы'}/>
            <Header__navEl navLink={'#answers'} text={'Ответы'}/>
        </nav>
    );
};

export default HeaderNav;