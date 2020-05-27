import React from 'react';

import './BurgerMenuIcon.scss'

const BurgerMenuIcon = ({click, menu}) => {
    return (
        <div className={menu ? 'burger-icon open' : 'burger-icon'} onClick={click}>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
            <span/>
        </div>
    );
};

export default BurgerMenuIcon;
