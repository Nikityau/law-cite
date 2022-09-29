import React from 'react';

import AboutUs__description from "components/Pages/Home.page/&blocks/AboutUs/__description/AboutUs__description";
import AboutUs__banner from "components/Pages/Home.page/&blocks/AboutUs/__banner/AboutUs__banner";

import './style.common/AboutUs.scss'
import './style.common/__description/AboutUs__dsecription.scss'
import './style.common/__banner/AboutUs__banner.scss'
import './style.common/__banner/_top_left_tongue/AboutUs__banner_top_left_tongue.scss'

import '../../../../UI/UI.Kit.Styles/ui.styles/font_motserrat_600.scss'

const AboutUs = () => {
    return (
        <article className={'about-us el_padding_side_100'}>
            <AboutUs__description/>
            <AboutUs__banner/>
        </article>
    );
};

export default AboutUs;