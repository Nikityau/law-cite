import React from 'react';

import ConsultForm, {CONSULT_FORM_ELS_ALIGN_CENTER} from "ui/UI.Kit.Components/ConsultForm/ConsultForm";

import './style.common/Consult.page.scss'

const ConsultPage = () => {

    const onSubmit = (data) => {
    }

    return (
        <div className={'consult-page app__container'}>
            <div className={'consult-page__container'}>
                <div className={'consult-page__title'}>
                    <h1> Консультация </h1>
                    <p> Здесь Вы можете оставить заявку на консультацию со специалистом С Вами свяжутся по электронной почте или телефону </p>
                </div>
                <div className={'consult-page__form-container'}>
                    <ConsultForm
                        onSubmit={onSubmit}
                        elsAlign={CONSULT_FORM_ELS_ALIGN_CENTER}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConsultPage;