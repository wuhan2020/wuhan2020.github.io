import React, { useState, useEffect } from 'react';
import Select from 'antd/lib/select';
import 'antd/lib/select/style/css';
import cookie from 'js-cookie';
import siteConfig from '../../../site_config/site';

const { Option } = Select;
const LanguageList = (props) => {
    const { defaultLang } = props;
    let [lang, setLang] = useState(defaultLang);

    const handleSwitchingLanguage = (e) => {
        const lang = e.target.value;
        setLang(lang);
    };

    useEffect(() => {
        const pathname = window.location.pathname;
        const newPathname = pathname.replace(`${window.rootPath}/${defaultLang}`, `${window.rootPath}/${lang}`);
        cookie.set('docsite_language', lang, { expires: 365 });
        window.location = newPathname;
    }); 

    return (
        <Select
            className="switch-lang"
            size="small"
            value={lang}
            onSelect={handleSwitchingLanguage}>
            {
                siteConfig.langList.map(l => <Option key={l.value} value={l.value}>{l.text}</Option>)
            }
        </Select>
    );
};

export default LanguageList;