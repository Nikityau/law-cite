import React, {useContext} from 'react';

import Button from "components/UI/UI.Kit.Components/Button/Button";

import {NavContext} from "components/Utils.Components/Nav.HOC";
import {APP_ROUTER_PATH_SERVICES} from "components/AppRouter/AppRouter.paths";

const EnterText = () => {

    const navContext = useContext(NavContext)

    const clickHandler = () => {
        navContext?.navByPath(APP_ROUTER_PATH_SERVICES)
    }

    return (
        <div className={'enter-block__text'}>
            <div className={'enter-block__text-title'}>
                <h1>Мы знаем, что делаем</h1>
            </div>
            <div className={'enter-block__text-subtitle'}>
                <h3>Мы знаем, что работа с бумажками отнимает много времени и часто бывает нудной</h3>
                <h3>Мы можем помочь</h3>
            </div>
            <div className={'enter-block__text-services-btn'}>
                <Button classNames={['btn_padding_side_50']} text={'Услуги'} onClickHandler={clickHandler}/>
            </div>
        </div>
    );
};

export default EnterText;