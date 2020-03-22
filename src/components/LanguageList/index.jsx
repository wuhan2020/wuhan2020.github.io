import React from 'react';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';
import cookie from 'js-cookie';
import siteConfig from '../../../site_config/site';

const { Option } = Select;
const LanguageList = (props) => {
    const { language } = props;

    const handleLanguageSwitch = (newLanguage) => {
        const pathname = window.location.pathname;
        const newPathname = pathname.replace(`${window.rootPath}/${language}`, `${window.rootPath}/${newLanguage}`);
        cookie.set('docsite_language', language, { expires: 365 });
        window.location = newPathname;
    };

    return (
        <div className="language-list-container">
             <Select
                className="switch-lang"
                size="small"
                value={language}
                onSelect={handleLanguageSwitch}>
                {
                    siteConfig.langList.map(l => <Option key={l.value} value={l.value}>{l.text}</Option>)
                }
            </Select>
        </div>
    );
};

export default LanguageList;