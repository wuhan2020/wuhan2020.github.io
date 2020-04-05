import React from 'react';
import siteConfig from '../../../site_config/site';
import LanguageList from '../LanguageList';
import Logo from '../logo';
import HeaderNav from '../headerNav';
import './index.scss';

const HeaderRefactored = (props) => {
    const { type, language, logo, currentKey } = props;
    
    return (
        <div className={`header-container ${type}`}>
            <Logo language={language} logoLink={logo} title={siteConfig.name}/>
            {true && <HeaderNav language={language} type={type} currentKey={currentKey} />}
            {true && <LanguageList language={language}/>}
        </div>
    );
};

export default HeaderRefactored;
