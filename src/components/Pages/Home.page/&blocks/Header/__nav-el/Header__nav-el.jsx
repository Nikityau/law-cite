import React from 'react';

const HeaderNavEl = ({ navLink, text }) => {
    return (
        <a href={navLink} className={'header__nav-el'}>
            <span> { text } </span>
        </a>
    );
};

export default HeaderNavEl;