import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'; // fetch polyfill
import { getScrollTop } from '../../../utils';
import Header from '../../components/header';
import Button from '../../components/button';
import Footer from '../../components/footer';
import Language from '../../components/language';
import homeConfig from '../../../site_config/home';
import './index.scss';

class Home extends Language {

    constructor(props) {
        super(props);
        this.state = {
            headerType: 'primary',
            starCount: 0,
            forkCount: 0,
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const scrollTop = getScrollTop();
            if (scrollTop > 66) {
                this.setState({
                    headerType: 'normal',
                });
            } else {
                this.setState({
                    headerType: 'primary',
                });
            }
        });
        fetch('//api.github.com/repos/wuhan2020/wuhan2020')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    starCount: data.stargazers_count,
                    forkCount: data.forks_count,
                });
            });
    }

    render() {
        const { starCount, forkCount } = this.state;
        const language = this.getLanguage();
        const dataSource = homeConfig[language];
        const { headerType } = this.state;
        const headerLogo = headerType === 'primary' ? '/images/wuhan2020-logo-white.png' : '/images/wuhan2020-logo.png';
        return (
            <div className="home-page">
                <section className="top-section">
                    <Header
                        currentKey="home"
                        type={headerType}
                        logo={headerLogo}
                        language={language}
                        onLanguageChange={this.onLanguageChange}
                    />
                    <div className="top-body">
                        <div className="vertical-middle">
                            <div className="product-name">
                                <h2>{dataSource.brand.brandName}</h2>
                            </div>
                            <p className="product-desc">{dataSource.brand.briefIntroduction}</p>
                            <div className="button-area">
                                {
                                    dataSource.brand.buttons.map(b => <Button type={b.type} key={b.type} link={b.link}
                                                                              target={b.target}>{b.text}</Button>)
                                }
                            </div>
                          <div className="github-buttons">
                            <a href="https://github.com/wuhan2020/wuhan2020" target="_blank" rel="noopener noreferrer">
                              <div className="star">
                                <img src="https://img.alicdn.com/tfs/TB1FlB1JwHqK1RjSZFPXXcwapXa-32-32.png"/>
                                <span className="type">Star</span>
                                <span className="line"/>
                                <span className="count">{starCount}</span>
                              </div>
                            </a>
                            <a href="https://github.com/wuhan2020/wuhan2020/fork" target="_blank" rel="noopener noreferrer">
                              <div className="fork">
                                <img src="https://img.alicdn.com/tfs/TB1zbxSJwDqK1RjSZSyXXaxEVXa-32-32.png"/>
                                <span className="type">Fork</span>
                                <span className="line"/>
                                <span className="count">{forkCount}</span>
                              </div>
                            </a>
                          </div>
                        </div>
                      <div className="header-image">
                        <img src="/images/wuhan2020-header-image.png"/>
                      </div>
                    </div>
                </section>
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language}/>
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<Home/>, document.getElementById('root'));

export default Home;
