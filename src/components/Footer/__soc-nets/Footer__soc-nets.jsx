import React from 'react';
import {Link} from "react-router-dom";

import Logo, {LOGO_STYLES_LIGHT} from "ui/UI.Kit.Components/Logo/Logo";
import {APP_ROUTER_PATH_HOME} from "components/AppRouter/AppRouter.paths";

import LinkUni from "ui/UI.Kit.Components/Link.uni/Link.uni";

import yt_icon from 'assets/images/Home.page/Footer/yt_icon.png'
import t_icon from 'assets/images/Home.page/Footer/t_icon.png'
import fb_icon from 'assets/images/Home.page/Footer/fb_icon.png'

const FooterSocNets = () => {
    return (
        <section className={'footer__soc-nets'}>
           <div className={'footer__link-wrapper'}>
               <Link to={APP_ROUTER_PATH_HOME}>
                   <Logo styles={LOGO_STYLES_LIGHT}/>
               </Link>
           </div>
            <div className={'footer__nets'}>
                <LinkUni uri={'https://youtube.com'} img={yt_icon}/>
                <LinkUni uri={'https://facebook.com'} img={fb_icon}/>
                <LinkUni uri={'https://twitter.com'} img={t_icon}/>
            </div>
        </section>
    );
};

export default FooterSocNets;