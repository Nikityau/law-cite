import React, {useState} from 'react';

import {useToggler} from "components/Utils.Components/CustomHooks/useToggler";

import Services__title from "components/Pages/Services.page/__title/Services__title";
import Services__services from "components/Pages/Services.page/__services/Services__services";
import ServicesPage__serviceModal from "components/Pages/Services.page/__service-modal/Services.page__service-modal";

import './style.common/Services.page.scss'
import './style.common/__title/Services__title.scss'
import './style.common/__services/Services.page__services.scss'
import './style.common/__service-card/Services.page__sevices-card.scss'
import './style.common/__service-modal/Services.page__service-modal.scss'
import './style.common/__service-modal/_open/Service.page__service-modal_open.scss'
import './style.common/__service-modal/_close/Service.page__service-modal_close.scss'

const ServicesPage = () => {

    const [is, toggler] = useToggler(false);
    const [currentService, setCurrService] = useState({})

    const onServiceClickHandler = (service) => {
        setCurrService(service);
        toggler.on();
    }

    return (
        <main className={'services-page app__container'} id={'el'}>
            <div className={'services-page__inner-container el_padding_side_100'}>
                <Services__title/>
                <Services__services
                    onServiceClickHandler={onServiceClickHandler}
                />
                <ServicesPage__serviceModal
                    isOpen={is}
                    close={toggler.off}
                    service={currentService}
                />
            </div>
        </main>
    );
};

export default ServicesPage;