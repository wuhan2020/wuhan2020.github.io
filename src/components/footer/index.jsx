import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';
import Language from "../language";

const propTypes = {
  logo: PropTypes.string.isRequired, // logo地址
  language: PropTypes.oneOf(siteConfig.langList.map(l => l.value)),
};

class Footer extends Language {

  render() {
    const { logo, language } = this.props;
    const dataSource = this.getLanguageDict(language, 'site');
    return (
      <footer className="footer-container">
        <div className="footer-body">
          <img src={getLink(logo)} />
          <p className="docsite-power">website powered by docsite</p>
          <div id="google_translate_element"></div>
          <div className="cols-container">
            <div className="col col-6">
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
            <div className="col col-6">
              <dl>
                <dt>{dataSource.projects.title}</dt>
                {
                  dataSource.projects.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-6">
              <dl>
                <dt>{dataSource.sponsors.title}</dt>
                {
                  dataSource.sponsors.list.map((d, i) => (
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
