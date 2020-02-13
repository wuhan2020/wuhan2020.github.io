import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';
import Language from "../language";

const { Option } = Select;

const searchSwitch = {
  baidu: {
    logo: 'https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png',
    url: 'https://www.baidu.com/s?wd=',
  },
  google: {
    logo: 'https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg',
    url: 'https://www.google.com/search?q=',
  },
};
const noop = () => {};
const propTypes = {
  currentKey: PropTypes.string,
  logo: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'normal']),
  language: PropTypes.oneOf(siteConfig.langList.map(l => l.value)),
  onLanguageChange: PropTypes.func,
};
const defaultProps = {
  type: 'primary',
  language: 'zh-cn',
  onLanguageChange: noop,
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuBodyVisible: false,
      language: props.language,
      search: siteConfig.defaultSearch,
      searchValue: '',
      inputVisible: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      language: nextProps.language,
    });
  }

  onKeyDown(e) {
    if (e.keyCode === 13) {
      this.goSearch();
    }
  }

  onInputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  }

  toggleMenu = () => {
    this.setState({
      menuBodyVisible: !this.state.menuBodyVisible,
    });
  }

  switchLang = (language) => {
    const oldLang = this.state.language;
    this.setState({
      language,
    });
    this.props.onLanguageChange(language, oldLang);
  }

  switchSearch = () => {
    let search;
    if (this.state.search === 'baidu') {
      search = 'google';
    } else {
      search = 'baidu';
    }
    this.setState({
      search,
    });
  }

  toggleSearch = () => {
    this.setState({
      searchVisible: !this.state.searchVisible,
    });
  }

  goSearch = () => {
    const { search, searchValue } = this.state;
    window.open(`${searchSwitch[search].url}${window.encodeURIComponent(`${searchValue} site:${siteConfig.domain}`)}`);
  }

  render() {
    const { type, logo, onLanguageChange, currentKey } = this.props;
    const { menuBodyVisible, language, search, searchVisible } = this.state;
    return (
      <header
        className={
          classnames({
            'header-container': true,
            [`header-container-${language}`]: true,
            [`header-container-${type}`]: true,
          })
        }
      >
        <div className="header-body">
          <a href={getLink(`/${language}/index.html`)}>
            <img className="logo" alt={siteConfig.name} title={siteConfig.name} src={getLink(logo)} />
          </a>
          {
            siteConfig.defaultSearch ?
            (
              <div
                className={classnames({
                  search: true,
                  [`search-${type}`]: true,
                })}
              >
                <span className="icon-search" onClick={this.toggleSearch} />
                {
                  searchVisible ?
                  (
                    <div className="search-input">
                      <img src={searchSwitch[search].logo} onClick={this.switchSearch} />
                      <input autoFocus onChange={this.onInputChange} onKeyDown={this.onKeyDown} />
                    </div>
                  ) : null
                }
              </div>
            ) : null
          }
          {
            onLanguageChange !== noop ?
            (
              <Select
                className="lang-select"
                size="small"
                value={language}
                onSelect={this.switchLang}
              >
                {
                  siteConfig.langList.map(l => <Option key={l.value} value={l.value}>{l.text}</Option>)
                }
              </Select>
            )
            :
            null
          }
          <div
            className={
              classnames({
                'header-menu': true,
                'header-menu-open': menuBodyVisible,
              })
            }
          >
            <img
              className="header-menu-toggle"
              onClick={this.toggleMenu}
              src={type === 'primary' ? getLink('/images/system/menu_white.png') : getLink('/images/system/menu_gray.png')}
            />
            <ul>
              {(siteConfig[language] || siteConfig[siteConfig.defaultLanguage]).pageMenu.map(item => (
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
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
