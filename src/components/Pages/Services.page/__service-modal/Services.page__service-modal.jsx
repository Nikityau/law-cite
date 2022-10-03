import React, {useRef} from 'react';
import Button from "ui/UI.Kit.Components/Button/Button";

const ServicesPageServiceModal = ({ service, isOpen }) => {

    const modalRef = useRef(undefined)

    const onBuyFile = () => {

    }

    const onConsult = () => {

    }

    return (
        <div className={'services-page__service-modal service-modal'} ref={modalRef}>
            <div className={'service-modal__go-back-btn'}>
                <button>
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