import React from 'react';

import ConsultForm from "ui/UI.Kit.Components/ConsultForm/ConsultForm";

const ContactsForm = () => {

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className={'contacts__form-consult'}>
            <ConsultForm onSubmit={onSubmit}/>
        </div>
    );
};

export default ContactsForm;