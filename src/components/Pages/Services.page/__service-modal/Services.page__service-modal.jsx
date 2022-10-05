import React, {useEffect, useRef, useState} from 'react';
import {useNavigate} from "react-router-dom";

import Button from "ui/UI.Kit.Components/Button/Button";

import {APP_ROUTER_PATH_CONSULT} from "components/AppRouter/AppRouter.paths";

import ServicePage__serviceModalController
    from "components/Pages/Services.page/__service-modal/controller/Service.page__service-modal.controller";

const ServicesPageServiceModal = ({ service, isOpen, close }) => {

    const modalRef = useRef(undefined)

    const navigate = useNavigate()

    const [modalController] = useState(new ServicePage__serviceModalController())

    useEffect(() => {
        modalController.modal = modalRef.current;
        modalController.init();
    }, [])

    const onBuyFile = () => {

    }

    const onConsult = () => {
        navigate(APP_ROUTER_PATH_CONSULT)
    }

    return (
        <div className={[
            'services-page__service-modal',
            'service-modal',
            isOpen
                ? 'service-modal_open'
                : 'service-modal_close'
        ].join(' ')} ref={modalRef}>
            <div className={'service-modal__go-back-btn'}>
                <button onClick={close}>
                    Вернуться назад
                </button>
            </div>
            <div className={'service-modal__service-title'}>
                <h3> { service.service_title } </h3>
            </div>
            <div className={'service-modal__service-description'}>
                <p> { service.service_description }  </p>
            </div>
            <div className={'service-modal__spec-btns'}>
                {
                    service.service_can_buy_file &&
                    <Button
                        classNames={['service-modal__btn']}
                        text={'Купить Файл'}
                        onClickHandler={onBuyFile}
                    />
                }
                {
                    service.service_can_consult &&
                    <Button
                    classNames={['service-modal__btn']}
                    text={'Консультация'}
                    onClickHandler={onConsult}
                    />
                }
            </div>
        </div>
    );
};

export default ServicesPageServiceModal;