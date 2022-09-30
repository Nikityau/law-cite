import React from 'react';

const ContactsData = () => {
    return (
        <div className={'contacts__data el_y_down_60'}>
            <div className={'contacts__data-template'}>
                <h5>Адрес</h5>
                <p>Ул. Академика Янгеля 23</p>
            </div>
            <div className={'contacts__data-template'}>
                <h5>Телефон</h5>
                <p>+7 955 555 55 55</p>
            </div>
            <div className={'contacts__data-template'}>
                <h5>E-mail</h5>
                <p>loremipsum@gmail.com</p>
            </div>
        </div>
    );
};

export default ContactsData;