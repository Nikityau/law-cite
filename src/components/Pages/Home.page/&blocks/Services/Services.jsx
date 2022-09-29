import React, {useContext} from 'react';

import {NavContext} from "components/Utils.Components/Nav.HOC";

import Services__linkBlock from "components/Pages/Home.page/&blocks/Services/__link-block/Services__link-block";

import {APP_ROUTER_PATH_REVIEWS, APP_ROUTER_PATH_SERVICES} from "components/AppRouter/AppRouter.paths";

import './style.common/Services.scss'
import './style.common/__link-block/Services__link-block.scss'
import './style.common/__link-block/Services__link-block_hover.scss'

const Services = () => {

    const navContext = useContext(NavContext)

    const clickHandler = (path) => {
        navContext?.navByPath(path)
    }

    clickHandler.servicesLinkHandler = () => {
        clickHandler(APP_ROUTER_PATH_SERVICES)
    }
    clickHandler.reviewsLinkHandler = () => {
        clickHandler(APP_ROUTER_PATH_REVIEWS)
    }

    return (
        <section className={'services'}>
            <Services__linkBlock
                clickHandler={clickHandler.servicesLinkHandler}
                title={'Услуги'}
                subtitle={'список наших услуг'}/>
            <Services__linkBlock
                clickHandler={clickHandler.reviewsLinkHandler}
                title={'Отзывы'}
                subtitle={'список наших отзывов'}/>
        </section>
    );
};

export default Services;