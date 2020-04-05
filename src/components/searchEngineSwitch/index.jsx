import React, { useState, useEffect } from 'react';
import siteConfig from '../../../site_config/site';

const SearchEngineSwitch = () => {
    const engineData = {
        baidu: {
            logo: 'https://img.alicdn.com/tfs/TB1n6DQayLaK1RjSZFxXXamPFXa-300-300.png',
            url: 'https://www.baidu.com/s?wd=',
        },
        google: {
            logo: 'https://img.alicdn.com/tfs/TB1REfuaCzqK1RjSZFjXXblCFXa-300-300.jpg',
            url: 'https://www.google.com/search?q=',
        },
    };
    const engineSwitchMap = {'baidu': 'google', 'google': 'baidu'};

    let [engine, setEngine] = useState(siteConfig.defaultSearch||'baidu');
    let [searchValue, setSearchValue] = useState('');
    let [isEngineShown, setIsEngineShown] = useState(false);

    useEffect(() => {
        const handleOnKeyDown = (e) => {
            if (e.keyCode === 13) {
                window.open(`${engineData[engine].url}${window.encodeURIComponent(`${searchValue} site:${siteConfig.domain}`)}`);
            }
        };
        document.addEventListener('keydown', handleOnKeyDown);
        return () => void document.removeEventListener('keydown', handleOnKeyDown);
    }, []);
    
    return ( siteConfig.defaultSearch && 
        <div className='search-engine-container'>
            <span className="icon-search" onClick={() => setIsEngineShown(!isEngineShown)} />
            { searchVisible &&
                <div className="search-input">
                    <img src={searchSwitch[search].logo} onClick={() => setEngine(engineSwitchMap[engine])} />
                    <input autoFocus onChange={(e) => setSearchValue(e.target.value)} value={searchValue} />
                </div>
            }
        </div>
    );
};

export default SearchEngineSwitch;

