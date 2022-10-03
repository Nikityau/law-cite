import React, {useState} from 'react';

import Services__title from "components/Pages/Services.page/__title/Services__title";
import Services__services from "components/Pages/Services.page/__services/Services__services";
import ServicesPage__serviceModal from "components/Pages/Services.page/__service-modal/Services.page__service-modal";

import './style.common/Services.page.scss'
import './style.common/__title/Services__title.scss'
import './style.common/__services/Services.page__services.scss'
import './style.common/__service-card/Services.page__sevices-card.scss'
import './style.common/__service-modal/Services.page__service-modal.scss'

const ServicesPage = () => {

    const [currentService, setCurrService] = useState({})

    const onServiceClickHandler = (service) => {
        setCurrService(service)
    }

    return (
        <main className={'services-page app__container'} id={'el'}>
            <div className={'services-page__inner-container el_padding_side_100'}>
                <Services__title/>
                <Services__services
                    onServiceClickHandler={onServiceClickHandler}
                />
                <ServicesPage__serviceModal
                    service={currentService}
                />
            </div>
        </main>
    );
};

export default ServicesPage;