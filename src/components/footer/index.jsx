import React from 'react';
import PropTypes from 'prop-types';
import siteConfig from '../../../site_config/site';
import { getLink } from '../../../utils';
import './index.scss';
import Language from "../language";
import Gitalk from "../gitalk";

const propTypes = {
  logo: PropTypes.string.isRequired, // logo地址
  module: PropTypes.string.isRequired, // 所属模块
  language: PropTypes.oneOf(siteConfig.langList.map(l => l.value)),
};

class Footer extends Language {

  render() {
    const { logo, module, language } = this.props;
    const dataSource = this.getLanguageDict(language, 'site');
    const dataProject = this.getLanguageDict(language, 'project');
    const gitalkTag = 'home' != module ? <Gitalk class_name="footer-body"/> : "";

    return (
      <footer className="footer-container">
        {gitalkTag}
        <div className="footer-body">
          <img src={getLink(logo)} />
          <p className="docsite-power">website powered by docsite</p>
          <div id="google_translate_element"></div>
          <div className="cols-container">
            <div className="col col-4">
              <h3>{dataSource.vision.title}</h3>
              <p>{dataSource.vision.content}</p>
            </div>
            <div className="col col-2">
              <dl>
                <dt>{dataSource.resources.title}</dt>
                {
                  dataSource.resources.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-4">
              <dl>
                <dt>{dataSource.documentation.title}</dt>
                {
                  dataSource.documentation.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-4">
              <dl>
                <dt>{dataProject.barText}</dt>
                {
                  dataProject.projects.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.title}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-3">
              <dl>
                <dt>{dataSource.sponsors.title}</dt>
                {
                  dataSource.sponsors.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-3">
              <dl>
                <dt>{dataSource.friendlyLink.title}</dt>
                {
                  dataSource.friendlyLink.list.map((d, i) => (
                    <dd key={i}><a href={getLink(d.link)} target={d.target || '_self'}>{d.text}</a></dd>
                  ))
                }
              </dl>
            </div>
            <div className="col col-3">
              <h3>{dataSource.statistics.title}</h3>
              <p><span id="busuanzi_container_page_pv">{dataSource.statistics.page_pv}<span id="busuanzi_value_page_pv"></span></span></p>
              <p><span id="busuanzi_container_site_pv">{dataSource.statistics.site_pv}<span id="busuanzi_value_site_pv"></span></span></p>
              <p><span id="busuanzi_container_site_uv">{dataSource.statistics.site_uv}<span id="busuanzi_value_site_uv"></span></span></p>
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
