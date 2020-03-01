import React from 'react';
import ReactDOM from 'react-dom';
import Language from "../../components/language";
import Header from "../../components/header";
import Footer from "../../components/footer";

class HackathonRefact extends Language {
    constructor(props) {
		super(props);
    }
    
    render() {
        const language = this.getLanguage();
        const dataSource = this.getLanguageDict(['zh-cn'], 'hackathonRefact');
        const { topBanner, antiEpidemicSituation } = dataSource;
        const { slogan, kickoff, invitation } = topBanner;

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
                            <div className="top-banner__slogan">
                                <h1 className="top-banner__slogan__motivation">{slogan.motivation}</h1>
                                <h1 className="top-banner__slogan__city">{slogan.city}</h1>
                            </div>
                            <div className="top-banner__kickoff">
                                <span>{kickoff.time}</span>
                                <span>{kickoff.description}</span>
                            </div>
                            <div className="top-banner__invitation">
                                <div className="top-banner__invitation__callout">
                                    {invitation.callout}
                                </div>
                                <div className="top-banner__invitation__registration">
                                    <a target="_blank" href={invitation.link}>{invitation.registration}</a>
                                </div>
                            </div>
                        </section>
                        <section className="anti-epidemic-situation">
                            {antiEpidemicSituation}
                        </section>
                        <section className="software-importance">

                        </section>
                        <section className="callout-banner">

                        </section>

                        

                        <section className="bottom-banner">
                        <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
                        </section>
                    </article>
                </main>
            </div>
        );
    }
}

document.getElementById('root') && ReactDOM.render(<HackathonRefact />, document.getElementById('root'));

export default HackathonRefact;