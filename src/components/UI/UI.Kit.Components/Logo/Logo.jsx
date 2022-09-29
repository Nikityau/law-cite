import React from 'react';

import './styles.common/Logo.scss'

import logoIcon_light from 'assets/favicon/logo_light_white.png'
import logoIcon_dark from 'assets/favicon/logo_dark_blue.png'

export const LOGO_STYLES_LIGHT = 'logo_styles_light';
export const LOGO_STYLES_DARK = 'logo_styles_dark';

const Logo = ({ styles = LOGO_STYLES_DARK }) => {

    return (
        <div className={`logo ${styles === LOGO_STYLES_DARK 
            ? 'logo_theme_dark' : 'logo_theme_light'}`
        }>
            <img src={styles === LOGO_STYLES_DARK
                ? logoIcon_dark : logoIcon_light} alt={'logo'}/>
            <span>Justice Law. Co</span>
        </div>
    );
};

export default Logo;