import React from 'react';
import ReactDOM from 'react-dom'

import Language from '../../components/language';
import { getLink } from '../../../utils';
import siteConfig from '../../../site_config/site';
import CertificationContent from './certificationContent';

import './index.scss';

class Certification extends Language {
    constructor(props) {
        super(props);
    }
    render() {
        const language = ['zh-cn'];
        const dataSource = this.getLanguageDict(language, 'certification');
        const logoUrl = '/images/wuhan2020-logo-white.png';
        return (
            <main>
                <div className="certification-page">
                    <header>
                        <a href={getLink(`/${language}/index.html`)}>
                            <img className="logo" alt={siteConfig.name} title={siteConfig.name} src={logoUrl} />
                        </a>
                    </header>
                    <article>
                        <CertificationContent dataSource={dataSource}  />
                    </article>
                </div>
            </main>
        )
    }

}

document.getElementById('root') && ReactDOM.render(<Certification />, document.getElementById('root'));

export default Certification