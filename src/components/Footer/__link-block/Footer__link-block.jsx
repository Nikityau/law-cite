import React from 'react';
import LinkUni from "ui/UI.Kit.Components/Link.uni/Link.uni";

const linkBlockExample = {
    linkTitleUri: 'uri',
    linkTitleText: 'text',
    subLinks: [
        {
            subLinkTitleUri: 'uri',
            subLinkTitleText: 'text'
        }
    ]
}

const FooterLinkBlock = ({ linkBlock }) => {
    return (
        <section className={'footer__link-block'}>
            <div className={'footer__t-link'}>
                <LinkUni
                    uri={linkBlock?.linkTitleUri || '/'}
                    text={linkBlock?.linkTitleText || 'undefined'}
                />
            </div>
            <div className={'footer__sub-link-container'}>
                {
                    linkBlock?.subLinks?.map(({subLinkTitleUri, subLinkTitleText }, index) =>
                        <LinkUni
                            key={index}
                            uri={subLinkTitleUri}
                            text={subLinkTitleText}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default FooterLinkBlock;