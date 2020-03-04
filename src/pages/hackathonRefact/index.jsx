import React from 'react';
import ReactDOM from 'react-dom';
import Language from "../../components/language";
import Header from "../../components/header";
import Footer from "../../components/footer";

import './index.scss';

class HackathonRefact extends Language {
    constructor(props) {
        super(props);
    }
    
    render() {
        const language = this.getLanguage();
        const dataSource = this.getLanguageDict(['zh-cn'], 'hackathonRefact');
        const { invitation, antiEpidemicSituation } = dataSource;

        return(
            <div className="hackathon-page">
                <Header
                    type="normal"
                    currentKey="blog"
                    logo="/images/wuhan2020-logo.png"
                    language={language}
                    onLanguageChange={this.onLanguageChange}
                />
                <main>
                    <article>
                        <section className="top-banner">
                            <div className="top-banner__invitation">
                                <label className="top-banner__invitation__kickoff">
                                    {invitation.kickoff.date} {invitation.kickoff.description}
                                </label>
                                <label className="top-banner__invitation__callout">
                                    {invitation.callout}
                                </label>
                                <a className="top-banner__invitation__registration"
                                    target="_blank" 
                                    href={invitation.link}>{invitation.registration}
                                </a>
                            </div>
                        </section>

                        <section className="anti-epidemic-situation">
                            <div className="anti-epidemic-situation__content">
                                {antiEpidemicSituation}
                            </div>
                        </section>
                    </article>
                </main>
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<HackathonRefact />, document.getElementById('root'));

export default HackathonRefact;