// 全局的一些配置
export default {
  rootPath: '',
  port: 8080,
  domain: 'wuhan2020.github.io', // 站点部署域名，无需协议和path等
  api: 'https://api.wuhan2020.org.cn',
  // defaultSearch: 'baidu', // 默认搜索引擎，baidu或者google
  langList: [
    { value: 'zh-cn', text: '简体中文' },
    { value: 'en-us', text: 'English' },
    { value: 'ja-jp', text: '日本語' },
    { value: 'it-it', text: 'Italiano' },
    { value: 'fr-fr', text: 'Français' },
    { value: 'pt-br', text: 'Português' }
  ], // 支持的语言列表
  defaultLanguage: 'zh-cn',
};
