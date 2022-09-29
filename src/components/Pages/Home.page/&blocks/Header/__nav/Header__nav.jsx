import React from 'react';
import Header__navEl from "components/Pages/Home.page/&blocks/Header/__nav-el/Header__nav-el";

const HeaderNav = () => {
    return (
        <nav className={'header__nav'}>
            <Header__navEl navLink={'#services'} text={'Услуги'}/>
            <Header__navEl navLink={'#contacts'} text={'Контакты'}/>
            <Header__navEl navLink={'#reviews'} text={'Отзывы'}/>
            <Header__navEl navLink={'#answers'} text={'Ответы'}/>
        </nav>
    );
};

export default HeaderNav;