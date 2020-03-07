import React from 'react';
import ReactDOM from 'react-dom';
import BadgeCardList from './badgeCardList';
import KanbanTimer from './kanbanTimer';
import Language from "../../components/language";
import Header from '../../components/header';
import Footer from '../../components/footer';
import './index.scss';

class HackathonKanban extends Language {

    render() {
        const language = this.language;
        const dataSource = this.getLanguageDict(['zh-cn'], 'hackathonKanban');
        const { kanbanTimer, contentTitle, badgeCards } = dataSource;
      
        // Data for 11 badge cards (divided into 3 sections)
        const firstItemList = ['country', 'participant', 'team', 'star'].map( item => badgeCards[item] );
        const secondItemList = ['visits', 'audience', 'community', 'exposure'].map( item => badgeCards[item] );
        const thirdItemList = ['media', 'volunteers', 'vip'].map( item => badgeCards[item] );

        return (
            <div className="kanban-page">
                <Header
                    currentKey="hackathon"
                    type="normal"
                    logo="/images/wuhan2020-logo-gray.png"
                    language={language}
                    onLanguageChange={this.onLanguageChange}
                />
                <main>
                    <article>
                        <section className="content-title">
                            <div className="content-title-text">{contentTitle}</div>
                        </section>
                        <section className="kanban-timer">
                            <KanbanTimer {...kanbanTimer} />
                        </section>
                        <section className="badge-card-list-first">
                            <BadgeCardList itemList={firstItemList} />
                        </section>
                        <section className="badge-card-list-second">
                            <BadgeCardList itemList={secondItemList} />
                        </section>
                        <section className="badge-card-list-third">
                            <BadgeCardList itemList={thirdItemList} />
                        </section>
                    </article>
                </main>
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} />
            </div>
        );
    }

}

document.getElementById('root') && ReactDOM.render(<HackathonKanban />, document.getElementById('root'));

export default HackathonKanban;
