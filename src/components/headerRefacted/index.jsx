import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../site_config/site';
import { getLink, getLanguage, getLanguageDict } from '../../../utils';
import './index.scss';
import classnames from 'classnames';
import LanguageList from '../LanguageList';

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

const propTypes = {
  currentKey: PropTypes.string,
  logo: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'normal']),
  language: PropTypes.oneOf(siteConfig.langList.map(l => l.value))
};
const defaultProps = {
  type: 'primary',
  language: 'zh-cn'
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

  onKeyDown = (e) => {
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
    const { type, logo, currentKey } = this.props;
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
          <LanguageList defaultLang={this.state.lang} />
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
        </div>
      </header>
    );
  }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
export default Header;
