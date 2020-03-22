import React, { useState } from 'react';
import siteConfig from '../../../site_config/site';
import { getLanguage, getLanguageDict } from '../../../utils';
import './index.scss';
import LanguageList from '../LanguageList';
import Logo from '../logo';
import HeaderNav from '../headerNav';


const HeaderRefactored = (props) => {
    const { type, language, logo, currentKey } = props;
    let [lang, setLang] = useState(language);
    
    return (
        <div className='header-container'>
            <Logo language={lang} logoLink={logo} title={siteConfig.name}/>
            {true && <HeaderNav language={lang} type={type} currentKey={currentKey} />}
            {true && <LanguageList language={lang}/>}
        </div>
    );
};

export default HeaderRefactored;
