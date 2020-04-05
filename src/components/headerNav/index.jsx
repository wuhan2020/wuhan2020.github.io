import React, { useState } from 'react';
import { getLink, getLanguageDict } from '../../../utils';

import './index.scss';

const HeaderNav = (props) => {
    const {language , type, currentKey} = props;
    let [isMenuBodyShown, setIsMenuBodyShown] = useState(false);

    return (
        <div className='header-menu-container'>
            <img
              className="header-menu-toggle"
              onClick={() => setIsMenuBodyShown(!isMenuBodyShown)}
              src={getLink(`/images/system/${type === 'primary' ? 'menu_white' : 'menu_gray'}.png`)}
            />
            <ul className={`menu-list ${isMenuBodyShown ? 'menu-open' : ''}`}>
              {getLanguageDict(language, 'site').pageMenu.map(item => (
                <li
                  className={`menu-item ${type} ${currentKey === item.key ? 'active' : '' }`}
                  key={item.key}
                >
                  <a href={getLink(item.link)} target={item.target || '_self'}>{item.text}</a>
                </li>))}
            </ul>
          </div>
    );
};

export default HeaderNav;