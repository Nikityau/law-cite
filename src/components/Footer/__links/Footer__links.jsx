import React from 'react';

import Footer__linkBlock from "components/Footer/__link-block/Footer__link-block";

import {linkBlocksArray} from "components/Footer/__link-block/Footer__link-block.preset";

const FooterLinks = () => {
    return (
        <section className={'footer__links'}>
            {
                linkBlocksArray?.map((linkBlock, index) =>
                    <Footer__linkBlock
                        key={index}
                        linkBlock={linkBlock}
                    />
                )
            }
        </section>
    );
};

export default FooterLinks;