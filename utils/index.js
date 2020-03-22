/* eslint-disable import/prefer-default-export */
import cookie from 'js-cookie';
import siteConfig from '../site_config/site';

export const throttle = (fn, delay) => {
  let timer = null;
  return function(...args) {
    const context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  };
};

export const getScrollTop = () => {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
};

export const getLink = (link) => {
  if (`${link}`.length > 1 && /^\/[^/]/.test(`${link}`)) {
    return `${window.rootPath}${link}`;
  }
  return link;
};

export const parseJSONStr = (str) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
};

const _tryRequire = (lang_code, default_lang_code) => {
  try {
    return require('../i18n/' + lang_code).default
  } catch (err) {
    return require('../i18n/' + default_lang_code).default
  }
};

export const getLanguage = () => {
  const urlLang = window.location.pathname.replace(window.rootPath || '', '').split('/')[1];
  let language = urlLang || cookie.get('docsite_language') || siteConfig.defaultLanguage;
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

export const getLanguageDict = (lang_code, module) => {
  const language = _tryRequire(lang_code, siteConfig.defaultLanguage);

  return language[module];
}