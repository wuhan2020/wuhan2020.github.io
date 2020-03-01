import Language from "../../components/language";
import Header from "../../components/header";
import Footer from "../../components/footer";

class HackathonRefact extends Language {
    render() {
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
                        <section className="page-head">

                        </section>
                        <section className="software-importance">

                        </section>
                        <section className="callout">

                        </section>

                        <section className="hackathon-benefits">
                            <HackathonBenefits data={} />
                        </section>

                        <section className="activity-details">
                            <ActivityDetails data={} />
                        </section>

                        <section className="topics">
                            <Topics data={} />
                        </section>

                        <section className="participants">
                            <Participants data={} />
                        </section>

                        <section className="guests-reviewers-list">
                            <PersonnelList data={} />
                        </section>

                        <section className="partnership">
                            <PartnershipList data={} />
                            <div className="organizer"></div>
                            <div className="co-host"></div>
                            <div className="platform"></div>
                            <div className="media"></div>
                            <div className="community"></div>
                        </section>

                        <section className="bottom-banner">

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