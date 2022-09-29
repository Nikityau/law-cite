import React from 'react';

import banner from 'assets/images/Home.page/AboutUs/photo-banner-2.png'

const AboutUsBanner = () => {
    return (
        <div className={'about-us__banner about-us__banner_top_left_tongue'}
            style={{
                backgroundImage: `url(${banner})`
            }}
        >
        </div>
    );
};

export default AboutUsBanner;