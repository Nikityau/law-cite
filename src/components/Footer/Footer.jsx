import React from 'react';

import Footer__socNets from "components/Footer/__soc-nets/Footer__soc-nets";
import Footer__links from "components/Footer/__links/Footer__links";

import './styles.common/Footer.scss'
import './styles.common/__soc-nets/Footer__soc-nets.scss'
import './styles.common/__links/Footer__links.scss'
import './styles.common/__link-block/Footer__link-block.scss'

const Footer = () => {
    return (
        <footer className={'footer'}>
            <div className={'footer__container app__container'}>
                <div className={'footer__inner-container el_padding_side_100'}>
                    <Footer__socNets/>
                    <Footer__links/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;