import React from 'react';
import cookie from 'js-cookie';
import siteConfig from '../../../site_config/site';

const {
  langList = [
      { value: 'zh-cn', text: '简体中文' },
      { value: 'en-us', text: 'English' },
      { value: 'ja-jp', text: '日本語' },
      { value: 'it-it', text: 'Italiano' },
      { value: 'pt-br', text: 'Português' }
    ]
} = siteConfig;

class Language extends React.Component {
  onLanguageChange = (language, oldLang) => {
    const pathname = window.location.pathname;
    const newPathname = pathname.replace(`${window.rootPath}/${oldLang}`, `${window.rootPath}/${language}`);
    cookie.set('docsite_language', language, { expires: 365 });
    window.location = newPathname;
  }

  getLanguage = () => {
    const urlLang = window.location.pathname.replace(window.rootPath || '', '').split('/')[1];
    let language = this.props.lang || urlLang || cookie.get('docsite_language') || siteConfig.defaultLanguage;
    const langValueList = langList.map(l => l.value);
    // 防止链接被更改导致错误的cookie存储
    if (!langValueList.includes(language)) {
      language = siteConfig.defaultLanguage;
    }
    // 同步cookie语言版本
    if (language !== cookie.get('docsite_language')) {
      cookie.set('docsite_language', language, { expires: 365 });
    }
    return language;
  }
}

export default Language;
