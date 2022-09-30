import React from 'react';
import {Link} from "react-router-dom";

const whatLinkRender = (uri, linkNative, linkReactRouter) => {
    if (/^(http|https|#)/.test(uri)) {
        return linkNative;
    }

    return linkReactRouter
}
const whatRenderInside = (text, img, textInside, imgInside) => {
    if(text) {
        return textInside
    }

    if(img) {
        return imgInside
    }

    return (
        <span>text</span>
    )
}

const LinkUni = ({uri, img = undefined, text = undefined}) => {

    const textInside = (
        <span>{ text }</span>
    )

    const imgInside = (
        <img src={img} alt="img"/>
    )

    const linkNative = (
        <a href={uri}>
            { whatRenderInside(text, img, textInside, imgInside) }
        </a>
    )

    const linkReactRouter = (
        <Link to={uri}>
            { whatRenderInside(text, img, textInside, imgInside) }
        </Link>
    )

    return (
        <>
            {whatLinkRender(uri, linkNative, linkReactRouter)}
        </>
    );
};

export default LinkUni;