import React from 'react';
import ReactDOM from 'react-dom';
import Language from '../../components/language';
import Header from '../../components/header';
import Bar from '../../components/bar';
import Slider from '../../components/slider';
import EventCard from './eventCard';
import ContactItem from './contactItem';
import ContributorItem from './contributorItem';
import Footer from '../../components/footer';

import './index.scss';
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css';
class Community extends Language {

  render() {
    const language = this.getLanguage();
    // const dataSource = communityConfig[language] || communityConfig[siteConfig.defaultLanguage];
    const dataSource = this.getLanguageDict(language, 'community');
    return (
      <div className="community-page">
        <Header
          currentKey="community"
          type="normal"
          logo="/images/wuhan2020-logo-gray.png"
          language={language}
          onLanguageChange={this.onLanguageChange}
        />
        <Bar img="https://img.alicdn.com/tfs/TB115XwJzTpK1RjSZKPXXa3UpXa-160-160.png" text={dataSource.barText} />
        <section className="events-section">
          <h3>{dataSource.events.title}</h3>
          <Slider>
            {dataSource.events.list.map((event, i) => (
              <EventCard event={event} key={i} />
            ))}
          </Slider>
        </section>
        <section className="contact-section">
          <h3>{dataSource.contacts.title}</h3>
          <p>{dataSource.contacts.desc}</p>
          <div className="contact-list">
          {
            dataSource.contacts.list.map((contact, i) => (
              <ContactItem contact={contact} key={i} />
            ))
          }
          </div>
        </section>
        <section className="contributor-section">
          <h3>{dataSource.contributorGuide.title}</h3>
          <p>{dataSource.contributorGuide.desc}</p>
          <div className="contributor-list">
          {
            dataSource.contributorGuide.list.map((contributor, i) => (
              <ContributorItem contributor={contributor} key={i} />
            ))
          }
          </div>
        </section>
        <section className="contributor-section">
          <GitalkComponent options={{
            clientID: "728da77f67226e477f03",
            clientSecret: 'ec7e55e9a7a022900677599b776e4164c1fdd759',
            repo: 'website-comment',
            owner: 'wuhan2020',
            admin: ['zhaofeng-shu33', 'iLtc', 'jeremy0519', 'lovepoem', 'chenrui333'],
            id: window.location.pathname,
            distractionFreeMode: false // Facebook-like distraction free mode
          }}/>
        </section>
        <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
      </div>
    );
  }
}

document.getElementById('root') && ReactDOM.render(<Community />, document.getElementById('root'));

export default Community;
