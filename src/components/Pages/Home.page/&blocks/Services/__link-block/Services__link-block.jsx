import React from 'react';

const ServicesLinkBlock = ({ title, subtitle, clickHandler }) => {
    return (
        <div className={'services__link-block'} onClick={clickHandler}>
            <div className={'services__link-block-title'}>
                <h3> { title } </h3>
                <p> { subtitle } </p>
            </div>
        </div>
    );
};

export default ServicesLinkBlock;