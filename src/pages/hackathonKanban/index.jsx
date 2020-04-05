import React from 'react';
import ReactDOM from 'react-dom';
import BadgeCardList from './badgeCardList';
import KanbanTimer from './kanbanTimer';
import Language from "../../components/language";
import HeaderRefactored from '../../components/headerRefactored';
import Footer from '../../components/footer';
import CountryMapList from './countryMapItem';
import TeamItemList from './teamItemList';
import HackathonProgress from './hackathonProgress';
import Gitalk from '../../components/gitalk';
import './index.scss';

const mockMilestones = [{
    time: '02-28',
    event: '热身',
    color: ''
}, {
    time: '02-29',
    event: '注册 入群 预热 组队',
    color: ''
}, {
    time: '03-06',
    event: '初赛',
    color: ''
}, {
    time: '03-07',
    event: '提交项目截止',
    color: ''
}, {
    time: '03-08',
    event: '决赛',
    color: ''
}]

class HackathonKanban extends Language {

    render() {
        const language = this.language;
        const module = "hackathonKanban";
        const dataSource = this.getLanguageDict(['zh-cn'], module);
        const { kanbanTimer, contentTitle, badgeCards, teamData} = dataSource;

        // Data for 11 badge cards (divided into 3 sections)
        const firstItemList = ['country', 'participant', 'team', 'star'].map(item => badgeCards[item]);
        const secondItemList = ['visits', 'audience', 'community', 'exposure'].map(item => badgeCards[item]);
        const thirdItemList = ['media', 'volunteers', 'vip'].map(item => badgeCards[item]);

        return (
            <div className="kanban-page">
                <HeaderRefactored
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
                        <section className="country-map">
                            <CountryMapList />
                        </section>
                        <section className="badge-card-list-second">
                            <BadgeCardList itemList={secondItemList} />
                        </section>
                        <section>
                            <HackathonProgress title="当前比赛进程" timeStart="2020-02-28" timeEnd="2020-03-08" mileStones={mockMilestones} />
                        </section>
                        <section className="badge-card-list-third">
                            <BadgeCardList itemList={thirdItemList} />
                        </section>
                        <section className="preliminary-round">
                            <div className="section-title">{teamData.sectionTitle}</div>
                            <div className="section-description">{teamData.sectionDescription}</div>
                            <div className="team-list-wrapper">
                                <TeamItemList teamListData={teamData.list} tableHeader={teamData.tableHeader} awardsData={teamData.awardsData} viewport='mobile' />
                            </div>
                        </section>
                    </article>
                </main>
                <Footer logo="/images/wuhan2020-logo-gray.png" language={language} module={module}/>
            </div>
        );
    }

}

document.getElementById('root') && ReactDOM.render(<HackathonKanban />, document.getElementById('root'));

export default HackathonKanban;
