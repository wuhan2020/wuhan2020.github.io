import React from 'react';
import cookie from 'js-cookie';
import siteConfig from '../../../site_config/site';

import zh_cn from '../../../i18n/zh-cn'
import en_us from '../../../i18n/en-us'
import fr_fr from '../../../i18n/fr-fr'
import it_it from '../../../i18n/it-it'
import ja_jp from '../../../i18n/ja-jp'
import pt_br from '../../../i18n/pt-br'

class Language extends React.Component {
  onLanguageChange = (language, oldLang) => {
    const pathname = window.location.pathname;
    const newPathname = pathname.replace(`${window.rootPath}/${oldLang}`, `${window.rootPath}/${language}`);
    cookie.set('docsite_language', language, { expires: 365 });
    window.location = newPathname;
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
    switch (lang_code) {
      case 'zh-cn':
        return zh_cn[module];

      case 'en-us':
        return en_us[module];

      case 'fr-fr':
        return fr_fr[module];

      case 'it-it':
        return it_it[module];

      case 'ja-jp':
        return ja_jp[module];

      case 'pt-br':
        return pt_br[module];

      default:
        return this.getLanguageDict(siteConfig.defaultLanguage, module);
    }
  }
}

export default Language;
