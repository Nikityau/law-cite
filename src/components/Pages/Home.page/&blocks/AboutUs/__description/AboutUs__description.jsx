import React from 'react';

const AboutUsDescription = () => {
    return (
        <div className={'about-us__description'}>
            <div className={'about-us__description-text font_montserrat_600'}>
                <span>О нас</span>
            </div>
            <div className={'about-us__description-text'}>
                <span>Пару слов</span>
                <span>о том кто мы</span>
            </div>
            <div className={'about-us__description-text'}>
                <span>Justice Law. Co уже 15 лет на рынке</span>
                <span>Помогает людям с юр. вопросами</span>
            </div>
        </div>
    );
};

export default AboutUsDescription;