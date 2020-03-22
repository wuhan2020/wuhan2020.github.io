import React, { useState, useEffect } from 'react';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';
import cookie from 'js-cookie';
import siteConfig from '../../../site_config/site';

const { Option } = Select;
const LanguageList = (props) => {
    const { language, languageChange } = props;

    const handleSwitchingLanguage = (e) => void languageChange(e.target.value);

    useEffect(() => {
        const pathname = window.location.pathname;
        const newPathname = pathname.replace(`${window.rootPath}/${language}`, `${window.rootPath}/${language}`);
        cookie.set('docsite_language', language, { expires: 365 });
        window.location = newPathname;
    }); 

    return (
        <div className="language-list-container">
             <Select
                className="switch-lang"
                size="small"
                value={language}
                onSelect={handleSwitchingLanguage}>
                {
                    siteConfig.langList.map(l => <Option key={l.value} value={l.value}>{l.text}</Option>)
                }
            </Select>
        </div>
    );
};

export default LanguageList;