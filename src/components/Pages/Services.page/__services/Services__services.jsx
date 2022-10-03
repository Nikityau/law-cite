import React from 'react';

import  { servicesArr } from './Services__services.preset'
import Services__serviceCard from "components/Pages/Services.page/__service-card/Services__service-card";

const ServicesServices = ({ onServiceClickHandler }) => {

    return (
        <div className={'services-page__services-container'}>
            {
                servicesArr?.map((service,index) =>
                    <Services__serviceCard
                        key={index}
                        service={service}
                        onBtnClickHandler={onServiceClickHandler}
                    />
                )
            }
        </div>
    );
};


export default ServicesServices;