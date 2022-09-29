import React from 'react';

import logoIcon_light from 'assets/favicon/logo_light_white.png'
import logoIcon_dark from 'assets/favicon/logo_dark_blue.png'

const Logo = () => {
    return (
        <div className={'logo'}>
            <img src={logoIcon_dark} alt={'logo'}/>
            <span>Justice Law. Co</span>
        </div>
    );
};

export default Logo;