import React from 'react';
import { getLink } from '../../../utils';

import './index.scss';

const Logo = (props) => {
    const {language, title, logoLink} = props;

    return (
        <div className='logo-container'>
            <a href={getLink(`/${language}/index.html`)}>
                <img className="logo-image" alt={title} title={title} src={getLink(logoLink)} />
            </a>
         </div>
    );
};

export default Logo;