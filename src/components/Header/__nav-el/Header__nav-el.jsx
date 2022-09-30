import React, {useEffect} from 'react';
import {Link} from "react-router-dom";

const HeaderNavEl = ({ navLink, text }) => {

    const whatRender = () => {
        if(/^#/.test(navLink)) {
            return<a href={navLink} className={'header__nav-el'}>
                <span> { text } </span>
            </a>
        }

        return routerLink;
    }

    const routerLink = (
        <Link to={navLink} className={'header__nav-el'}>
            <span> { text } </span>
        </Link>
    )

    return (
        <>
            { whatRender() }
        </>
    );
};

export default HeaderNavEl;