import React from 'react';
import cookie from 'js-cookie';
import siteConfig from '../../../site_config/site';

class Language extends React.Component {
  onLanguageChange = (language, oldLang) => {
    const pathname = window.location.pathname;
    const newPathname = pathname.replace(`${window.rootPath}/${oldLang}`, `${window.rootPath}/${language}`);
    cookie.set('docsite_language', language, { expires: 365 });
    window.location = newPathname;
  };

  tryRequire = (lang_code) => {
    try {
      return require('../../../i18n/' + lang_code).default
    } catch (err) {
      return require('../../../i18n/' + siteConfig.defaultLanguage).default
    }
  };

  getLanguage = () => {
    const urlLang = window.location.pathname.replace(window.rootPath || '', '').split('/')[1];
    let language = this.props.lang || urlLang || cookie.get('docsite_language') || siteConfig.defaultLanguage;
    const langValueList = siteConfig.langList.map(l => l.value);
    // 防止链接被更改导致错误的cookie存储
    if (!langValueList.includes(language)) {
      language = siteConfig.defaultLanguage;
    }
    // 同步cookie语言版本
    if (language !== cookie.get('docsite_language')) {
      cookie.set('docsite_language', language, { expires: 365 });
    }
    return language;
  };

  getLanguageDict = (lang_code, module) => {
    const language = this.tryRequire(lang_code);

    return language[module];
  }
}

export default Language;
