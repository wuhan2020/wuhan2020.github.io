import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import siteConfig from '../../../site_config/site';
import { getLink, getLanguage, getLanguageDict } from '../../../utils';

import './index.scss';

const HeaderNav = (props) => {
    const {language , type, currentKey} = props;
    let [isMenuBodyShown, setIsMenuBodyShown] = useState(false);

    return (
        <div className={`header-menu-container ${isMenuBodyShown ? 'header-menu-open' : ''}`}>
            <img
              className="header-menu-toggle"
              onClick={() => setIsMenuBodyShown(!isMenuBodyShown)}
              src={getLink(`/images/system/${type === 'primary' ? 'menu_white' : 'menu_gray'}.png`)}
            />
            <ul>
              {getLanguageDict(language, 'site').pageMenu.map(item => (
                <li
                  className={classnames({
                    'menu-item': true,
                    [`menu-item-${type}`]: true,
                    [`menu-item-${type}-active`]: currentKey === item.key,
                  })}
                  key={item.key}
                >
                  <a href={getLink(item.link)} target={item.target || '_self'}>{item.text}</a>
                </li>))}
            </ul>
          </div>
    );
};

export default HeaderNav;