import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';

const {
  langList = [
      { value: 'zh-cn', text: '简体中文' },
      { value: 'en-us', text: 'English' },
      { value: 'ja-jp', text: '日本語' },
      { value: 'it-it', text: 'Italiano' },
    ]
} = siteConfig;

const propTypes = {
  logo: PropTypes.string.isRequired, // logo地址
  language: PropTypes.oneOf(langList.map(l => l.value)),
};

class Footer extends React.Component {

  render() {
    const { logo, language } = this.props;
    const dataSource = siteConfig[language] || siteConfig[siteConfig.defaultLanguage];
    return (
      <footer className="footer-container">
        <div className="footer-body">
          <img src={getLink(logo)} />
          <p className="docsite-power">website powered by docsite</p>
          <div className="cols-container">
            <div className="col col-12">
              <h3>{dataSource.vision.title}</h3>
              <p>{dataSource.vision.content}</p>
            </div>
            <div className="col col-6">
              <dl>
                <dt>{dataSource.documentation.title}</dt>
                {
                  dataSource.documentation.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-6">
            <dl>
            <dt>{dataSource.resources.title}</dt>
            {
              dataSource.resources.list.map((d, i) => (
                <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
              ))
            }
            </dl>
            </div>
          </div>
          <div className="copyright"><span>{dataSource.copyright}</span></div>
        </div>
      </footer>
    );
  }
}

Footer.propTypes = propTypes;

export default Footer;
