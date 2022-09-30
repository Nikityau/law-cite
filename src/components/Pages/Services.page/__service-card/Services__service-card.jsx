import React from 'react';

const ServicesServiceCard = ({ service }) => {

    const clickHandler = () => {

    }

    return (
        <div className={'services-page__service-card service-card'}>
            <div className={'service-card__block service-card__half-h service-card__half-w service-card__title'}>
                <h3>{ service?.service_title }</h3>
            </div>
            <div className={'service-card__block service-card__half-h service-card__half-w service-card__direction'}>
                <h3>{ service?.service_direction }</h3>
            </div>
            <div className={'service-card__block service-card__half-h service-card__bottom-info'}>
                <div className={'service-card__actual-info'}>
                    <div className={'service-card__actual-date'}>
                        <span>Актуальность</span>
                        <span>{ service?.service_actuality_date }</span>
                    </div>
                    <div className={'service-card__smth_info'}>
                        <span>Какая-то инфа</span>
                        <span>Для справки</span>
                    </div>
                </div>
                <div className={'service-card__btn-more-info'}>
                    <button onClick={clickHandler}>
                        Узнать больше +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesServiceCard;